const add = document.querySelector("#addBtn");
const input = document.querySelector("#todoInput");
const completedList = document.querySelector("#completedList");
const pendingList=document.querySelector("#pendingList");
async function loadTodos() {

   pendingList.innerHTML = "";
   completedList.innerHTML = "";

    const response = await fetch("http://localhost:3000/get");
    const todos = await response.json();

    todos.forEach(todo => {

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.innerText = todo.title;

        
        const completed = document.createElement("button");
        if(todo.completed)
          completed.innerText = "Undo";
        else
            completed.innerText="complete";

        const deleted = document.createElement("button");
        deleted.innerText = "Delete";
        if (todo.completed) {
            span.style.textDecoration = "line-through";
            
        }
        else{
            span.style.textDecoration="none";
        }

        completed.addEventListener("click", async () => {

           const response= await fetch(`http://localhost:3000/put/${todo._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    // completed: true
                    completed:!todo.completed
                    
                })
            });
            console.log(" click");
            await response.json();

            await loadTodos();
        });
       

        deleted.addEventListener("click", async () => {

            await fetch(`http://localhost:3000/delete/${todo._id}`, {
                method: "DELETE"
            });

            await loadTodos();
        });

        li.appendChild(span);
        li.appendChild(completed);
        li.appendChild(deleted);

        // todoList.appendChild(li);
        if(todo.completed){
            completedList.appendChild(li);
        }
        else{
            pendingList.appendChild(li);
        }
    });
}

loadTodos();

add.addEventListener("click", async () => {

    const todo = {
        title: input.value,
        completed: false
    };

    await fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(todo)
    });

    input.value = "";// After adding a new item it remains in the box itself this line is used to clear the input box after adding 

    await loadTodos();
});





// completed.addEventListener("click", async () => {

//     await fetch(`http://localhost:3000/put/${todo._id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             completed: !todo.completed
//         })
//     });

//     await loadTodos();
//  Use this Toggle to replace click and double click });