import React from 'react';
import { render } from 'react-dom';
import { AppComponent } from '../server/AppComponent';

render(<AppComponent/>, window.document.getElementById('app'));