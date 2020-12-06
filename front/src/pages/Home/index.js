import React, {useState, useEffect} from 'react';
import './home.css';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'
import Header from '../../components/Header';
import TasksList from '../../components/TasksList';
import TaskSave from '../../components/TaskSave';


const Home = () => {
    const token = localStorage.getItem('token');
    const name = localStorage.getItem('userName');
    const history = useHistory();

    if (!token){
        history.push('/login');
    }

    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        api.get('tasks',  {
            headers: {
                authorization:token
            }}
            ).then(response =>{
            setTasks(response.data);
        });
    },[token, tasks]);


  return (<>
        <Header/>
        <div className="container">
        <h1>{name}, essa é a sua lista de afazeres</h1>

            <div className="container-row">
                {tasks.map(task => (
                    <div className="row" key={task._id}>
                        <TasksList className="title" task={task}/>
                        <div className="container-buttons">
                            <span className="status-row"></span>
                        </div>
                    </div>
                ))}
            </div>

            <TaskSave title="Salvar nova tarefa"/>
        </div>
    </>
  )
}

export default Home;