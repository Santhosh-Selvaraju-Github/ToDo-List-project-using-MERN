import React, { useEffect, useState } from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import axios from "axios"

const List = () => {
    const [todoList,setTodoList] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5000/get")
        .then(result => {setTodoList(result.data)})
        .catch(err => console.log(err))
    },[])
    
    const handleComplete = (id) => { 
        axios.put(`http://localhost:5000/complete/${id}`)
        .then(result => {
            window.location.reload();
        })
        .catch(err => console.log(err))
    }

    const handleDelete = (id) => { 
        axios.delete(`http://localhost:5000/remove/${id}`)
        .then(result => {
            window.location.reload();
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <ul class="todo-list">
                {todoList.length === 0
                ? <h3 className='noData'>No Data</h3>
                : todoList.map(details=>{
                   return <li className="todo-list-item" onClick={()=>handleComplete(details._id)}>
                            {details.complete
                            ? <MdCheckBox className='box-icon' />
                            : <MdCheckBoxOutlineBlank className='box-icon' />}
                            <div className={details.complete ? "select" : ""}>{details.content}</div>
                            {/* <p onClick={()=>handleEdit(details._id)} class="edit">
                                <span class="fas fa-edit"></span>
                            </p> */}
                            <p onClick={()=>handleDelete(details._id)} class="remove">
                                <span class="fas fa-times"></span>
                            </p>
                        </li>})
                }                
            </ul>
        </div>
    )
}

export default List