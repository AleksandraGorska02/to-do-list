import React,{useState} from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faPen,faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import { v4 as uuidv4 } from "uuid";

function App() {
  const [toDo, setToDo]=useState([
    {"id":1,"title":"task 1","status":false},
    {"id":2,"title":"task 2","status":false}
  ]);

  const [newTask, setNewTask]=useState('');
  const [updateData, setUpdate,Data]=useState('');

  const addTask = () => {
    if (newTask) {
      const newTaskadd = { id: uuidv4(), title: newTask, status: false };
      setToDo([...toDo, newTaskadd]);
      setNewTask("");
    }
  };
  

  
  const deleteTask=(id)=>{
 
    const updatedToDo = toDo.filter((task) => task.id !== id);
    setToDo(updatedToDo);
    
  }
  const markDone=(id)=>{
    let newTask = toDo.map(task=>{if(task.id===id){
       if(task.status===true){
     return({...task,status:false}) 
    }
    if(task.status ===false){
      return({...task,status:true}) 
    }
   }
      return task;
    
    }
      )
   setToDo(newTask);
    
}
  
  const changeTask=(e)=>{

    //
  }
 






  return (
    <div className="container App">
        <br></br>
        <h2>To Do List React</h2>
        <br></br>

        {toDo && toDo.length ? '' : 'brak zadań'}

        {toDo && toDo 

          
          .map( (task, index) => {
                return(
                  <React.Fragment key={task.id}>
                    <div className='col taskBg'>

                        <div className={task.status ? 'done' : ''}>

                          <span className='taskNumber'>{index + 1}</span>
                          <span className='taskText'>{task.title}</span>

                        </div>

                        <div className='iconWrap'>
                          <span title='yes / no' onClick={(e)=>markDone(task.id)}>
                            <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>
                          </span>
                          <span title='edit'>
                            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                          </span>
                          <span title='delete' onClick={()=>deleteTask(task.id)}
                          >
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                          </span>
                        </div>

                    </div>
                    
                  </React.Fragment>
                )
          })
        }

        <div className='row'>
          <div className='col'>
            <input className='form-control form-control-lg'></input>
          </div>
            <div className='col-auto'>
              <button className='btn btn-lg btn-success mr'>uaktualnij</button>
              <button className='btn btn-lg btn-warning'>anuluj</button>
              
            </div>
        </div>
        <br/>
        <div className='row'>
          <div className='col'>
            <input 
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}
            className='form-control form-control-lg'></input>
          </div>
            <div className='col-auto'>
              <button
              onClick={addTask}
               className='btn btn-lg btn-success mr'>dodaj</button>
                           
            </div>
        </div>
    </div>
  );
}

export default App;
