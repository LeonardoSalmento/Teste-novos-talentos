import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UpdateTask from './pages/UpdateTask';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home }/>
                <Route path="/login" component={ Login } />
                <Route path="/register" exact component={ Register }/>
                <Route path="/updateTask/:id" exact component={ UpdateTask }/>
            </Switch>
        </BrowserRouter>
    );
}