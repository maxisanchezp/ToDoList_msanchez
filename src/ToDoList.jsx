import React, {useState} from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState(['Comer algo', 'Bañarse']);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t,newTask]);
            setNewTask(''); 
        }
        
    }

    function deleteTask(index){
        
    }

    function moveTaskUp(index){
        
    }
    
    function moveTaskDown(index){

    }

    return(
        <div className='to-do-list'>

            <h1>Lista de actividades</h1>
            <div>
                <input type="text" placeholder='Ingrese la actividad...' value={newTask}
                onChange={handleInputChange}/>
                <button className='add-button' onClick={addTask}>Añadir</button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={() =>
                        deleteTask(index)}>Borrar</button>
                    
                    <button className='move-button' onClick={() =>
                        moveTaskUp(index)}>☝️</button>
                    
                    <button className='move-button' onClick={() =>
                        moveTaskUp(index)}>👇</button>
                </li>
            )}
            </ol>

        </div>
    )

}

export default ToDoList