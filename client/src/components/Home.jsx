import React from 'react'
import Input from './Input'
import List from './List'

const Home = () => {

    return (
        <div class="todo-container">
            <h2>ToDo List</h2>
            <div class="todo">
                <Input/>
                <List/>
            </div>
        </div>
    )
}

export default Home