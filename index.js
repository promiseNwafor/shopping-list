var input = document.querySelector("#text");
var enter = document.querySelector("button");
var liAll = document.querySelectorAll("li");
var ul = document.querySelector("ul");
var span = document.querySelectorAll("span");


function inputLength(){
    return input.value.length;
}
function executeKeypressEvent(event){
    if (inputLength() > 0 && event.which === 13){
        addNewList()
    }
}
function executeClickEvent(){
    if (inputLength() > 0){
        addNewList()
    }
}

function addNewList(){
    newListListener();
    input.value = "";
}

function newListListener(){
    var li = document.createElement("li");
    var span = document.createElement("span");
    var fa = document.createElement("i");
    fa.classList.add("fa", "fa-trash-o");
    span.appendChild(fa);
    span.addEventListener("click", function(){
        this.parentElement.remove();
    })
    li.appendChild(span);
    li.appendChild(document.createTextNode(input.value));
    li.addEventListener("click", function(){
        this.classList.toggle("done");
    })
    ul.appendChild(li);
}

liAll.forEach(function (li){
    li.addEventListener("click", function(){
        this.classList.toggle("done");
    })
})

span.forEach(function (item){
    item.addEventListener("click", function(){
        this.parentElement.remove();
    })
})

input.addEventListener("keypress", executeKeypressEvent)


enter.addEventListener("click", executeClickEvent)