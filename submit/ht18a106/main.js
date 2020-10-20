let todoItem = [
  // { id: 0, text: 'todo1', checked: false }
]

const checkStorage = () => {
  if (localStorage.getItem('todo')) {
    try {
      todoItem = JSON.parse(localStorage.getItem('todo'))
    } catch (e) {
      localStorage.removeItem('todo')
    }
  }
}

const saveTodo = () => {
  const parsed = JSON.stringify(todoItem)
  localStorage.setItem('todo', parsed)
}

const reGenerate = () => {
  const todo_ul = document.getElementById('todo_ul')

  // html 側のリストを全消去
  while (todo_ul.firstChild) {
    todo_ul.removeChild(todo_ul.firstChild)
  }

  // 再生成
  for (const item of todoItem) {
    const listEl = document.createElement('li')
    listEl.setAttribute('class', 'todo-item')

    const checkEl = document.createElement('input')
    if (item.checked === true) { checkEl.checked = true }
    checkEl.setAttribute('type', 'checkbox')
    checkEl.setAttribute('onclick', `checkItem(${item.id})`)

    const delEl = document.createElement('a')
    delEl.setAttribute('href', `#`)
    delEl.setAttribute('onclick', `deleteOne(${item.id})`)
    delEl.setAttribute('class', 'del-button')
    delEl.textContent = 'Delete'

    const labelEl = document.createElement('label')
    labelEl.appendChild(checkEl)
    labelEl.insertAdjacentHTML('beforeend', item.text)
    labelEl.appendChild(delEl)

    listEl.appendChild(labelEl)
    todo_ul.appendChild(listEl)
  }
  // console.log(todoItem)
}

const checkItem = (id) => {
  for (let i = 0; i < todoItem.length; i++) {
    if (todoItem[i].id === id && todoItem[i].checked) {
      todoItem[i].checked = false
    } else if (todoItem[i].id === id && !todoItem[i].checked) {
      todoItem[i].checked = true
    }
  }
  saveTodo()
}

const addTodo = (press) => {
  const todo = document.getElementById('todo_value')

  if (!todo.value) return false
  // ボタン(true) 又は Enter が押されたら
  if (window.event.keyCode == 13 || press == true) {
    const nextId =
      todoItem.length === 0 ? 0
        : todoItem[todoItem.length - 1].id + 1
    todoItem.push({
      id: nextId,
      text: todo.value,
      checked: false
    })
    reGenerate()
    todo.value = ''
  }
  saveTodo()
}

const deleteSelected = () => {
  todoItem = todoItem.filter((element, index, array) => {
    return Boolean(element.checked === false)
  })
  reGenerate()
  saveTodo()
}

const deleteOne = (id) => {
  todoItem = todoItem.filter((element, index, array) => {
    return Boolean(element.id !== id)
  })
  reGenerate()
  saveTodo()
}

window.checkItem = checkItem
window.addTodo = addTodo
window.deleteSelected = deleteSelected
window.deleteOne = deleteOne

window.onload = () => {
  checkStorage()
  reGenerate()
}
