let inputBox = document.getElementById("input-box")
let listContainer = document.getElementById("list-container");
let editOpenBtn = document.getElementById("")
let editCloseBtn = document.getElementById("editClose")
let openBtn = document.getElementById("openModal");
let closeBtn = document.getElementById("closeModal");
let modal = document.getElementById("modal");
let option = document.getElementById("option")
let doneCard = document.querySelector('#doneCard').querySelector('.list-container')
let blockedCard = document.querySelector('#blockedCard').querySelector('.list-container')
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
    else if(option.value == "done"){

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        doneCard.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "";
        li.appendChild(span);
        let newDiv = document.createElement('div');
        newDiv.classList.add('editButton');
        li.appendChild(newDiv);

        saveData();

    }
    else if(option.value == "blocked"){

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        blockedCard.appendChild(li);
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

doneCard.addEventListener("click", function(e){
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
    saveData()
}, false);

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
    saveData()
}, false);

blockedCard.addEventListener("click", function(e){
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
        editButton.contentEditable = false
        li.focus();

    }
    saveData()
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
        modal.classList.add("open");
        const li = e.target.parentElement;
        inputBox.value = li.innerText
        closeBtn.onclick = function() {
            li.innerText = inputBox.value;
            let span = document.createElement("span");
            span.innerHTML = "";
            li.appendChild(span);
            let newDiv = document.createElement('div');
            newDiv.classList.add('editButton');
            li.appendChild(newDiv);
            if(option.value == "inprogress"){
                progressCard.appendChild(li)
            } else if (option.value == "done") {
                doneCard.appendChild(li)
            } else if (option.value == "blocked"){
                blockedCard.appendChild(li)
            }
        };
        
    }  
    
}, false);





function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
    localStorage.setItem("data2", doneCard.innerHTML);
    localStorage.setItem("data3",  progressCard.innerHTML);
    localStorage.setItem("data4",  blockedCard.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    doneCard.innerHTML = localStorage.getItem("data2");
    progressCard.innerHTML = localStorage.getItem("data3");
    blockedCard.innerHTML = localStorage.getItem("data4s");
}
showTask()
