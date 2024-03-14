import React, { useState } from 'react'
import axios from "axios"

const Input = () => {
    const [content,setContent] = useState()

    const handleAdd = () => { 
        axios.post("http://localhost:5000/add",{content:content})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    return (
        <form class="todo-header">
            <input type="text" onChange={e=>setContent(e.target.value)} autocomplete="off"/>
            <button type="submit" onClick={handleAdd}>ADD</button>
        </form>
    )
}

export default Input