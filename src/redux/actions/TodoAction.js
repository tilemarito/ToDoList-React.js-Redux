export const ADD_TODO_LIST = "ADD_TODO_LIST"
export const CHECKBOX_TODO_LIST = "CHECKBOX_TODO_LIST"
export const DELETE_TODO_LIST = "DELETE_TODO_LIST"
export const EDIT_TODO_LIST = "EDIT_TODO_LIST"
export const ALL = "ALL"
export const ACTIVE = "ACTIVE"
export const COMPLETED = "COMPLETED"

export const addTodos = (item) => ({
    type : ADD_TODO_LIST,
    payload : item
})

export const checkboxTodos = (id) => ({
    type : CHECKBOX_TODO_LIST,
    payload : id
})

export const deleteTodos = (id) => ({
    type : DELETE_TODO_LIST,
    payload : id
})

export const editTodos = (item) => ({
    type : EDIT_TODO_LIST,
    payload : item
})

export const all = () => ({
    type : ALL
})

export const active = () => ({
    type : ACTIVE
})

export const completed = () => ({
    type : COMPLETED
})