import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Todos from "./pages/Todos";
import Holiday from "./pages/Holiday";

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <Route path="todos" component={Todos}></Route>
            <Route path="holiday" component={Holiday}></Route>
        </Route>
    </Router>    
, app);