export const ADD_TODO = 'ADD_TODO'

let nextTodoId = 0;

export const addTodo = text => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text, //text:textを省略
    }
}