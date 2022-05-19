import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './component/home/Home';
import { Switch, Route } from "react-router-dom";

import Logintow from './component/login/Logintow';
import { useHistory } from "react-router-dom";
import ManagermentPost from './component/table/post/ManagermentPost';
import ManagermentAcount from './component/table/account/ManagermentAcount';


function App() {
    const token = sessionStorage.getItem("Token");
    const history = useHistory()
    useEffect(() => {
        if (!token) {
            history.push("/login")
        }
    }, [])
    return (
        <Switch>
            <Route path="/" exact component={() => <Home />} />
            <Route path="/login" exact component={() => <Logintow />} />
            <Route path="/ManagermentPost" exact component={() => <ManagermentPost />} />
            <Route path="/ManagermentAcount" exact component={() => <ManagermentAcount />} />
        </Switch>
    );
}

export default App;
