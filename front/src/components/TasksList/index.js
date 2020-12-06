import React from 'react';
import './taskList.css';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'
import { faTrash, faPen, faSquare, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TasksList = (props) => {
    const token = localStorage.getItem('token');
    const history = useHistory();

    const changeStatus = async (id) => {
        await api.get(`changeStatusTask/${id}`,  {
            headers: {
                authorization:token
            }});
    
        history.push('/');
    }

    function updateTask(id){

        history.push(`/updateTask/${props.task._id}`);
    }


    const handleDelete = async (id) => {
        await api.delete(`tasks/${id}`,  {
            headers: {
                authorization:token
            }});
    
        history.push('/');
    }
    return(
        <div className="container">
            <div className="container-list">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        {props.task.title}
                        <span className="badge">
                            <button type="button" className="btn btn-primary" onClick={ () => changeStatus(props.task._id) }>{props.task.finished === true ? <FontAwesomeIcon icon={faCheckSquare}/> : <FontAwesomeIcon icon={faSquare}/>}</button>
                            <button href={`/updateTask/${props.task._id}`} onClick={ () => updateTask(props.task._id) } type="button" className="btn btn-secondary"><FontAwesomeIcon icon={faPen} /></button>
                            <button onClick={ () => handleDelete(props.task._id) } type="button" className="btn btn-danger"><FontAwesomeIcon icon={faTrash} /></button>
                        </span>
                    </li>
                </ul>
            </div>
        </div>

    )

}

export default TasksList;