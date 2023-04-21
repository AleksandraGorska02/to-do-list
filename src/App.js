import React,{useState} from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faPen,faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [toDo, setToDo]=useState([
    {"id":1,"title":"task 1","status":false},
    {"id":2,"title":"task 2","status":false}
  ]);

  const [newTask, setNewTask]=useState('');
  const [updateData, setUpdate,Data]=useState('');

  const addTask=()=>{

//
  }
  const deleteTask=(id)=>{

    //
  }
  const markDone=(id)=>{

    //
  }
  const cancelUpdate=()=>{

    //
  }
  const changeTask=(e)=>{

    //
  }
  const updateTask=()=>{

    //
  }







  return (
    <div className="container App">
        <br></br>
        <h2>To Do List React</h2>
        <br></br>

        {toDo && toDo.length ? '' : 'brak zadań'}

    </div>
  );
}

export default App;
