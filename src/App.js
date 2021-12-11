import './App.css';
import Header from './component/Header';
import { Todolit } from "./component/Todolit";
import React, { useState, useEffect } from 'react';
import { Footer } from './component/Footer';
import { Addtodo } from './component/Addtodo';


function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("i'm on delete ", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log(desc, title);
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  // localStorage.setItem("todos", JSON.stringify(todos));
  const [todos, setTodos] = useState(inittodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <div>
      <Header title="My Todolist" disablemenu={false} />
      <Addtodo addTodo={addTodo} />
      <Todolit todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
