let G_todoListArr = [];
const localStorageKey = "todoList";


document.addEventListener("onload", loadFromStorage);
$(function() {
    $("#todoInput").on("key")
});

// first add a todo
function addToDo(optionalVal) {
    let todoList = $("#todoList"); 
    let todoInput = $("#todoInput");
    let todoInputValue = todoInput.val();
    todoInput.val('');

    
    // let li = $("<li></li>");
    let val = "";
    if(todoInputValue != '' || optionalVal != "") {
        // store todo
        if(optionalVal != "") {
            val = optionalVal;
        }
        else {
            val = todoInputValue;
            LSStoreTodo(val);
        }
    }

    let todoEle = $(`
    <li id="${val}" class="list-group-item">
        <h2>${val}</h2>
        <div class="controls">
            <button id="delBtn" style="margin-right:10px" class="btn btn-danger">X</button>
            <button id="finishBtn" class="btn btn-success">✓</button>
        </div>
    </li>
    `);

    todoEle.on("click" , "#delBtn", removeTodo);
    todoEle.on("click" , "#finishBtn", finishTodo);


    todoList.prepend(todoEle);

    
}

// remove a todo
function removeTodo(button) {
    // removeAlertHelper();
    // get the li to remove using the button
    // remove completed alert
    // let todoListItem = button.parentNode.parentNode;
    let todoListItem = $(this).closest("li");
    console.log(todoListItem);
    // remove todo from local storage
    LSRemoveLSTodo(todoListItem.attr("id").trim());
    console.log(todoListItem);
    todoListItem.remove();
}

function finishTodo(button) {
    let todoListItem = $(this).closest("li");

    todoListItem.addClass("done");
    console.log("class added");

    // show completed alert

}

// TODO: load todo list from storage
function loadFromStorage() {
    // check if todoList key is set
    let todoData = localStorage.getItem(localStorageKey);
    if(todoData) {
        G_todoListArr = JSON.parse(todoData);
        console.log(G_todoListArr);
        for(todo of G_todoListArr) {
            // console.log(todo);
            addToDo(todo);
        }
    }
    else {
        G_todoListArr = [];
    }
}

function LSStoreTodo(todo) {
    G_todoListArr.unshift(todo);
    localStorage.setItem(localStorageKey , JSON.stringify(G_todoListArr));
}

function LSRemoveLSTodo(todo) {
    for (let i = 0, n = G_todoListArr.length; i < n; i++) {
        if(G_todoListArr[i] == todo) {
            G_todoListArr.splice(i,1);
            break;
        }
    }
    localStorage.setItem(localStorageKey , G_todoListArr);
    console.log(G_todoListArr);
}