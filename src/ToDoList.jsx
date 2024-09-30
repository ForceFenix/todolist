import React, { useState } from 'react';
import './css/ToDoList.css'
import Fondo from "./images/fondo-bosque.jpg"

const ToDoList = () => {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleInputChange = event => {
        setNewTask(event.target.value)
    }

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }
    const deleteTask = index => {
        const updateTasks = tasks.filter((_, i) => i !== index)
        setTasks(updateTasks)
    }

    const moveTaskUp = index => {

    }
    const moveTaskDown = index => {

    }

    return (
        <>
            <div className="todo-container">


                <div className="to-do-list">

                    <h1>Cosas para hacer</h1>

                    <div className='input-container'>
                        <input
                            type="text"
                            placeholder='Agregar tarea...'
                            value={newTask}
                            onChange={handleInputChange}
                        />
                        <button
                            className='add-button'
                            onClick={addTask}>
                            Agregar
                        </button>
                    </div>


                    <ol>
                        {tasks.map((task, index) =>
                            <li key={index} className='to-do-list__li'>
                                <span className='text'>
                                    {task}
                                </span>
                                <button
                                    className='delete-button'
                                    onClick={e => deleteTask(index)}>
                                    Borrar
                                </button>
                            </li>
                        )}
                    </ol>

                </div>
            </div>
        </>
    )
}

export { ToDoList }