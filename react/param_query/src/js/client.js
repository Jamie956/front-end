import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute } from "react-router";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";

const app = document.getElementById('app');
ReactDOM.render(
    <Router>
        <Route path="/" component={Layout}>
            <IndexRoute component={Featured}></IndexRoute>
            <Route path="archives(/:article)" name="archives" component={Archives}></Route>
            <Route path="settings" name="settings" component={Settings}></Route>            
        </Route>
    </Router>
,app);