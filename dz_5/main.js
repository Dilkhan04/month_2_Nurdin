const input = document.getElementById('input')
const createButton = document.getElementById('create_button')
const todoList = document.getElementById('todo_list')

function createTodo () {
    if (input.value.trim() === '') {
        return false
    } else {
        const div = document.createElement('div')
        const text = document.createElement('h3')
        div.setAttribute('class', 'block_text')
        text.innerText = input.value
        todoList.append(div)
        div.append(text)
        const divButtons = document.createElement('div')
        divButtons.setAttribute('class', 'divButtons')
        div.append(divButtons)
        const changeButton = document.createElement('button')
        changeButton.setAttribute('class', 'changeButton')
        divButtons.append(changeButton)
        changeButton.innerText = 'change'
        changeButton.onclick = () => {
            text.innerText = prompt('change')
        }
        const deleteButtons = document.createElement('button')
        deleteButtons.setAttribute('class', 'deleteButtons')
        divButtons.append(deleteButtons)
        deleteButtons.innerText = 'delete'
        deleteButtons.onclick = () => {
            div.remove()
        }
    }
    input.value = ''
}

createButton.addEventListener('click', createTodo)
input.addEventListener('keydown', e => e.keyCode === 13 ? createTodo() : false)