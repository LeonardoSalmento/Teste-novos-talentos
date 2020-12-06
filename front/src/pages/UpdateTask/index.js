import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const UpdateTask = (props) => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [task, setTask] = useState();
    const token = localStorage.getItem('token');
    const id = props.task._id;

    useEffect(async () => {
        await api.get(`tasks/${id}`, {
            headers: {
                authorization: token
            }
        });

    },[token]);

    async function handleSubmit(){

        const data = {"title": title}


        await api.put(`tasks/${id}`, data, {
            headers: {
                authorization: token
            }
        });
    }


    return(
        <div className="container">
        <hr />
        <h2>Atualizar</h2>
            <div className="container-list">
                <form onSubmit={handleSubmit}>
                    <label>Título</label>
                    <input className="form-control" type="text" placeholder="Título da tarefa" name="title" value={ title }
                            onChange={ e=>setTitle(e.target.value) } />
                    <span className="badge"><button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faSave}/></button></span>

                </form>
            </div>
        </div>
    )
}


export default UpdateTask;