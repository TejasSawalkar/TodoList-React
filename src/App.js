import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList';
import "./App.css"

function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText])
  }
  const deleteListItem = (key)=>{
    let newListTodo =[...listTodo]
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className='main-container'>
      <div className='center-container'>
        <TodoInput addList={addList}/>
        <h1 className='app-heading'>Todos</h1>
        <hr></hr>
        <br></br>
        {listTodo.map((listItem,i)=>{
          return(
            <TodoList key={i} item={listItem} deleteItem={deleteListItem} index={i}/>
          )
        })}
      </div>  
    </div>
  )
}

export default App;
