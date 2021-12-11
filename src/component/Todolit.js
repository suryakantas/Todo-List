import React from 'react'
import { Todoitem } from "./Todoitem";

export const Todolit = (props) => {
    let todoStyle = {
       minHeight:"70vh",
       margin:"10px auto"
    }
    return (
        <div className="container" style={todoStyle}>
            <h3 className="my-3">Todo List</h3>
            {props.todos.length===0? "No todo to display":
            props.todos.map((todo) => {
                return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })
            }
        </div>
    )
}
