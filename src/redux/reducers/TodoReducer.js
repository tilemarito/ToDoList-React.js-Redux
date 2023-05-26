import { ACTIVE, ADD_TODOS, ALL, CHECKBOX_TODOS, COMPLETED, DELETE_TODOS, EDIT_TODOS } from "../actions/TodoAction"

const initialState = {
    todoslist : [
        {
            id: 1,
            title: 'Belajar React',
            isDone: true,
        },
        {
            id: 2,
            title: 'Belajar Redux',
            isDone: false,
        },
        {
            id: 3,
            title: 'Belajar Redux Thunk',
            isDone: false,
          }
    ]
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TODOS:
            return{
                ...state,
                todoslist: [...state.todoslist, action.payload]
            }
        case CHECKBOX_TODOS:
            return{
                ...state,
                todoslist: state.todoslist.map((item) => (item.id === action.payload ? {...item, isDone: !item.isDone} : item))
            }
        case DELETE_TODOS:
            return{
                ...state,
                todoslist: state.todoslist.filter((item) => item.id !== action.payload)
            }
        case EDIT_TODOS:
            return{
                ...state,
                todoslist: state.todoslist.map((item) => (item.id === action.payload.id ? {...item, title: action.payload.title} : item))
            }
            case ALL:
                return{
                    ...state,
                    filter : "ALL"
                }
            case ACTIVE:
                return{
                    ...state,
                    filter : "ACTIVE"
                }
            case COMPLETED:
                return{
                    ...state,
                    filter : "COMPLETED"
                }
        default: return state
    }
}

export default todoReducer