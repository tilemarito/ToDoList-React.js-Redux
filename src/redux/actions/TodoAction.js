export const ADD_TODOS = "ADD_TODOS"
export const CHECKBOX_TODOS = "CHECKBOX_TODOS"
export const DELETE_TODOS = "DELETE_TODOS"
export const EDIT_TODOS = "EDIT_TODOS"
export const ALL = "ALL"
export const ACTIVE = "ACTIVE"
export const COMPLETED = "COMPLETED"

export const addTodos = (item) => ({
    type : ADD_TODOS,
    payload : item
})

export const checkboxTodos = (id) => ({
    type : CHECKBOX_TODOS,
    payload : id
})

export const deleteTodos = (id) => ({
    type : DELETE_TODOS,
    payload : id
})

export const editTodos = (item) => ({
    type : EDIT_TODOS,
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