import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TasksSave = (props) => {
    const history = useHistory();
    const [title, setTitle] = useState('');

    async function handleSubmit(e){
        e.preventDefault();
        const token = localStorage.getItem('token');

        if (!title){
            return alert("Digite um título para a sua tarefa!");
        }
        const data = {"title": title}

        await api.post('tasks', data, {
            headers: {
                authorization: token
            }
        });

        history.push('/');

    }


    return(
    <>
     <div className="container">
        <hr />
        <h2>{props.title}</h2>
            <div className="container-list">
                <form onSubmit={handleSubmit}>
                    <label>Título</label>
                    <input className="form-control" type="text" placeholder="Título da tarefa" name="title" value={ title }
                            onChange={ e=>setTitle(e.target.value) } />
                    <span className="badge"><button type="submit" className="btn btn-primary"><FontAwesomeIcon icon={faSave}/></button></span>

                </form>
            </div>
        </div>
    </>
    )

}

export default TasksSave;