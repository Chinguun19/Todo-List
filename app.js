let inputBox = document.getElementById("input-box")
let editBox = document.getElementById("edit-box")
let listContainer = document.getElementById("list-container");
let editOpenBtn = document.getElementById("edid-modal")
//let editCloseBtn = document.getElementById("edit-modal")
let openBtn = document.getElementById("openModal");
let closeBtn = document.getElementById("closeModal");
let closeEditModal = document.getElementById("closeModalEdit")
let editModal = document.getElementById("edit-modal")
let modal = document.getElementById("modal");
let option = document.getElementById("option")
let editOption = document.getElementById("editOption")
let doneCard = document.querySelector('#doneCard').querySelector('.list-container')
let blockedCard = document.querySelector('#blockedCard').querySelector('.list-container')
let todoCard = document.getElementById("toDoCard")
let progressCard = document.querySelector('#progressCard').querySelector('.list-container')
let taskCount = listContainer.children.length;


function updateCounter() {
    const taskCount = listContainer.children.length; // Dynamically count children
    document.getElementById('count').textContent = taskCount;
}




openBtn.addEventListener("click", () => {
    modal.classList.add("open"); 
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
})
closeEditModal.addEventListener("click", () =>{
    editModal.classList.remove("open");
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
        taskCount++;
        updateCounter()
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
        editModal.classList.add("open");
        const li = e.target.parentElement;
        editBox.value = li.innerText
        closeEditModal.onclick = function() {
            li.innerText = editBox.value;
            let span = document.createElement("span");
            span.innerHTML = "";
            li.appendChild(span);
            let newDiv = document.createElement('div');
            newDiv.classList.add('editButton');
            li.appendChild(newDiv);
            if(editOption.value == "inprogress"){
                progressCard.appendChild(li)
            } else if (editOption.value == "done") {
                doneCard.appendChild(li)
            } else if (editOption.value == "blocked"){
                blockedCard.appendChild(li)
            } else if (editOption.value == "Todo"){
                listContainer.appendChild(li)
            }
        };
        
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
        editModal.classList.add("open");
        const li = e.target.parentElement;
        editBox.value = li.innerText
        closeEditModal.onclick = function() {
            li.innerText = editBox.value;
            let span = document.createElement("span");
            span.innerHTML = "";
            li.appendChild(span);
            let newDiv = document.createElement('div');
            newDiv.classList.add('editButton');
            li.appendChild(newDiv);
            if(editOption.value == "inprogress"){
                progressCard.appendChild(li)
            } else if (editOption.value == "done") {
                doneCard.appendChild(li)
            } else if (editOption.value == "blocked"){
                blockedCard.appendChild(li)
            } else if (editOption.value == "Todo"){
                listContainer.appendChild(li)
            }
        };
        
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
        editModal.classList.add("open");
        const li = e.target.parentElement;
        editBox.value = li.innerText
        closeEditModal.onclick = function() {
            li.innerText = editBox.value;
            let span = document.createElement("span");
            span.innerHTML = "";
            li.appendChild(span);
            let newDiv = document.createElement('div');
            newDiv.classList.add('editButton');
            li.appendChild(newDiv);
            if(editOption.value == "inprogress"){
                progressCard.appendChild(li)
            } else if (editOption.value == "done") {
                doneCard.appendChild(li)
            } else if (editOption.value == "blocked"){
                blockedCard.appendChild(li)
            } else if (editOption.value == "Todo"){
                listContainer.appendChild(li)
            }
        };
        
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
        taskCount --;
        updateCounter()
        saveData();
    } else if (e.target.classList.contains("editButton")) {
        editModal.classList.add("open");
        const li = e.target.parentElement;
        editBox.value = li.innerText
        closeEditModal.onclick = function() {
            li.innerText = editBox.value;
            let span = document.createElement("span");
            span.innerHTML = "";
            li.appendChild(span);
            let newDiv = document.createElement('div');
            newDiv.classList.add('editButton');
            li.appendChild(newDiv);
            if(editOption.value == "inprogress"){
                progressCard.appendChild(li)
            } else if (editOption.value == "done") {
                doneCard.appendChild(li)
            } else if (editOption.value == "blocked"){
                blockedCard.appendChild(li)
            } else if (editOption.value == "Todo"){
                listContainer.appendChild(li)
            }
        };
        
    }  

    saveData()  

}, false);





function saveData(){
    updateCounter()
    localStorage.setItem("data1", listContainer.innerHTML);
    localStorage.setItem("data2", doneCard.innerHTML);
    localStorage.setItem("data3",  progressCard.innerHTML);
    localStorage.setItem("data4",  blockedCard.innerHTML);
  
}
function showTask(){
    updateCounter()
    listContainer.innerHTML = localStorage.getItem("data1");
    doneCard.innerHTML = localStorage.getItem("data2");
    progressCard.innerHTML = localStorage.getItem("data3");
    blockedCard.innerHTML = localStorage.getItem("data4");
}
showTask()

