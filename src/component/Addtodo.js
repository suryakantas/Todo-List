import React, { useState } from 'react'


export const Addtodo = ({addTodo}) => {
    const [title,setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description can not be blank.");
        }else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
        
    }
    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-lable">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" placeholder="Todo Title"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-lable">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc" placeholder="Todo Description"/>
                </div>
                    <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
