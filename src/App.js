import Main from "./main/Main";
import Admin from "./admin/Admin";
import Search from "./search/Search";
import Board from "./board/Board";
import Navigation from "./common/navigation/Navigation";
import Error from "./common/Error";
import Login from "./login/Login";
import ProtectedRoute from "./auth/ProtectedRoute";
import AdminWrapper from "./common/wrappers/AdminWrapper";
import Thread from "./thread/Thread";


import React from "react";
import {Switch, Route} from "react-router-dom";


function App() {
    return (
        <AdminWrapper>
            <Route path="/" component={Navigation}/>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/login" exact component={Login}/>
                <ProtectedRoute path="/admin" exact component={Admin}/>
                <Route path="/board/:prefix" exact component={Board}/>
                <Route path="/board/:prefix/:threadId" exact component={Thread}/>
                <Route path="/search" exact component={Search}/>
                <Route component={Error}/>
            </Switch>
        </AdminWrapper>
    );
}

export default App;
