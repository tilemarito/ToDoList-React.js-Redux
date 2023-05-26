import { useState } from "react"
import { active, addTodos, all, checkboxTodos, completed, deleteTodos, editTodos } from "../redux/actions/todoAction"
import { useDispatch, useSelector } from "react-redux"
import './style.css'

function Todos(){
    const [newTodos, setNewTodos] = useState("")
    const [editId, setEditId] = useState(null)
    const [editTitle, setEditTitle] = useState("")
    const dispatch = useDispatch()
    const todolist = useSelector((state) => state.todoslist)
    const filter = useSelector((state) => state.filter)


    const handleSetAdd = (e) => {
        e.preventDefault()
        if (newTodos.trim() !== ""){
            dispatch(
                addTodos({
                    id : Math.floor(Math.random() * 100),
                    title : newTodos,
                    isDone : false
                })
            )
        }
    }

    const handleSetInput = (e) => {
        setNewTodos(e.target.value)
    }

    const handleSetCheckbox = (id) => {
        dispatch(checkboxTodos(id))
    }

    const handleSetDelete = (id) => {
        dispatch(deleteTodos(id))
    }

    const handleInputEdit = (e) => {
        setEditTitle(e.target.value)
    }

    const handlSeteEdit = (item) => {
        setEditId(item.id)
        setEditTitle(item.title)
    }

    const updateTodos = () => {
        if(editTitle.trim() !== ""){
            dispatch(
                editTodos({
                    id : editId,
                    title : editTitle
                })
            )
            setEditId(null)
            setEditTitle("")
        }
    }

    const handleAll = () => {
        dispatch(all())
    }

    const handleActive = () => {
        dispatch(active())
    }

    const handleCompleted = () => {
        dispatch(completed())
    }

    return(
        <>
            <div className="todo-list">
                <h1>What's the plan for today</h1>
                <form id="form-todo" onChange={handleSetInput} value={newTodos} >
                    <input type="text" placeholder="What to do" />
                    <button onClick={handleSetAdd} ><b>Add</b></button>
                </form>
                <div id="btn-act">
                    <button className="act" onClick={handleAll} >All</button>
                    <button className="act" onClick={handleActive} >Active</button>
                    <button className="act" onClick={handleCompleted} >Completed</button>
                </div>

                {todolist.filter((item) =>{
                    if(filter === "ACTIVE"){
                        return !item.isDone
                    }else if(filter == "COMPLETED"){
                        return item.isDone
                    }else{
                        return true
                    }
                }).map((item) => (
                    <div key={item.id}>
                        <div id="list-todo">
                        <input id="klik" onChange={() => handleSetCheckbox(item.id)} checked={item.isDone} type="checkbox"/>
                            {editId === item.id ? (
                                <div id="change">
                                    <input type="text" value={editTitle} onChange={handleInputEdit} />
                                    <button className="btn-edit" onClick={updateTodos}>Update</button>
                                </div>
                            ) : (
                                <div id="todos" >
                                    <span>{item.title} </span>
                                    <div>
                                        <button className="btn-edit" onClick={() => handlSeteEdit(item)} >Edit</button>
                                        <button className="btn-del" onClick={() => handleSetDelete(item.id)} >Delete</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

            </div>     
        </>
    )
}

export default Todos