let inputBox = document.getElementById("input-box")
let listContainer = document.getElementById("list-container");


function addTask () {
    if(inputBox.value === ''){
        alert(`Write something`);
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "";
        li.appendChild(span);
        let newDiv = document.createElement('div');
        newDiv.classList.add('editButton');
        li.appendChild(newDiv);

    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    } else if(e.target.tagName === "editButton");
     e.target.parentElement.contentEditable = false;

}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()
