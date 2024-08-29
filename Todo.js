let todoList = [
    {item: 'buy milk', dueDate: '11.07.24'},
    {item: 'go to college', dueDate: '11.07.24'}
];
displayItems();
function addTodo(){
    let inputElement = document.querySelector('#input-text');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}
function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = '';
    for(let i = 0; i < todoList.length; i++){
        let item = todoList[i].item;
        let dueDate = todoList[i].dueDate;
       newHtml += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
}