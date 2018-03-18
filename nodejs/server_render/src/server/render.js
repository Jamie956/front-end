import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {Greet} from '../components/greet';

ReactDOMServer.renderToString(<Greet/>);