import React from 'react'

function TodoList(props) {
  return (
    <li className='list-item'>
        {props.index} {props.item}
        <span className='icons'><i class="fa-sharp fa-solid fa-trash" onClick={e=>{
            props.deleteItem(props.index)
        }}></i></span>
    </li>
  )
}

export default TodoList