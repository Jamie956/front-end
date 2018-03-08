import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./Layout";
import Foo from "./pages/Foo";
import Bar from "./pages/Bar";
import Baz from "./pages/Baz";

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
				<IndexRoute component={Foo}></IndexRoute>
				<Route path="bar" component={Bar}></Route>
				<Route path="baz" component={Baz}></Route>            
		</Route>
	</Router>,
	document.getElementById('app')
);