const $ = id => document.getElementById(id);
const $q = selector => document.querySelector(selector);

const elements = {
    inputBox: $('input-box'),
    editBox: $('edit-box'),
    listContainer: $('list-container'),
    modal: $('modal'),
    editModal: $('edit-modal'),
    openBtn: $('openModal'),
    closeBtn: $('closeModal'),
    closeEditModal: $('closeModalEdit'),
    option: $('option'),
    editOption: $('editOption'),
    cards: {
        todo: $('list-container'),
        progress: $q('#progressCard .list-container'),
        done: $q('#doneCard .list-container'),
        blocked: $q('#blockedCard .list-container')
    }
};

function updateCounter() {
    $('count').textContent = elements.listContainer.children.length;
}

function createTaskElement(text) {
    const li = document.createElement('li');
    li.innerHTML = text;
    
    const span = document.createElement('span');
    const editButton = document.createElement('div');
    editButton.classList.add('editButton');
    
    li.appendChild(span);
    li.appendChild(editButton);
    
    return li;
}

function addTask() {
    if (!elements.inputBox.value) {
        alert('Write something');
        return;
    }

    const text = elements.inputBox.value;
    const targetCard = {
        'Todo': elements.cards.todo,
        'inprogress': elements.cards.progress,
        'done': elements.cards.done,
        'blocked': elements.cards.blocked
    }[elements.option.value];

    if (targetCard) {
        const taskElement = createTaskElement(text);
        targetCard.appendChild(taskElement);
    }

    elements.inputBox.value = '';
    saveData();
}

function handleCardClick(e) {
    const target = e.target;
    
    if (target.tagName === 'LI') {
        target.classList.toggle('checked');
    } else if (target.tagName === 'SPAN') {
        target.parentElement.remove();
    } else if (target.classList.contains('editButton')) {
        elements.editModal.classList.add('open');
        const li = target.parentElement;
        elements.editBox.value = li.innerText;

        elements.closeEditModal.onclick = () => {
            li.innerText = elements.editBox.value;
            
            const span = document.createElement('span');
            const editButton = document.createElement('div');
            editButton.classList.add('editButton');
            
            li.appendChild(span);
            li.appendChild(editButton);

            const targetCard = {
                'inprogress': elements.cards.progress,
                'done': elements.cards.done,
                'blocked': elements.cards.blocked,
                'Todo': elements.cards.todo
            }[elements.editOption.value];

            targetCard.appendChild(li);
            elements.editModal.classList.remove('open');
        };
    }

    saveData();
}

function saveData() {
    updateCounter();
    Object.keys(elements.cards).forEach((key, index) => {
        localStorage.setItem(`data${index + 1}`, elements.cards[key].innerHTML);
    });
}

function showTasks() {
    Object.keys(elements.cards).forEach((key, index) => {
        elements.cards[key].innerHTML = localStorage.getItem(`data${index + 1}`) || '';
    });
    updateCounter();
}

// Event Listeners
elements.openBtn.addEventListener('click', () => elements.modal.classList.add('open'));
elements.closeBtn.addEventListener('click', () => elements.modal.classList.remove('open'));
elements.closeEditModal.addEventListener('click', () => elements.editModal.classList.remove('open'));

Object.values(elements.cards).forEach(card => {
    card.addEventListener('click', handleCardClick);
});


$('buttonAdd').addEventListener('click', addTask);

// Initialize
showTasks();