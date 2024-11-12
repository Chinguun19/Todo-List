let inputBox = document.getElementById("input-box")
let listContainer = document.getElementById("list-container");
let openBtn = document.getElementById("openModal");
let closeBtn = document.getElementById("closeModal");
let modal = document.getElementById("modal");
let option = document.getElementById("option")

let todoCard = document.getElementById("toDoCard")
let progressCard = document.querySelector('#progressCard').querySelector('.list-container')


openBtn.addEventListener("click", () => {
    modal.classList.add("open"); 
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
})


function addTask () {
    if(inputBox.value === ''){
        alert(`Write something`);
    }
    else if(option.value == "Todo"){

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "";
        li.appendChild(span);
        let newDiv = document.createElement('div');
        newDiv.classList.add('editButton');
        li.appendChild(newDiv);
        saveData();

    }
    else if(option.value == "inprogress"){

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        progressCard.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "";
        li.appendChild(span);
        let newDiv = document.createElement('div');
        newDiv.classList.add('editButton');
        li.appendChild(newDiv);

        saveData();

    }



    inputBox.value = "";
    saveData();
}

progressCard.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.classList.contains("editButton")) {
        const li = e.target.parentElement;
        li.contentEditable = false
        e.target.parentElement.contentEditable = false
        li.focus();
    }
}, false);





listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.classList.contains("editButton")) {
        const li = e.target.parentElement;
        li.contentEditable = false;
        e.target.parentElement.contentEditable = false
        li.focus();
    }  
}, false);



function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()
