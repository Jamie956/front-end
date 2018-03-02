import React from 'react';
import { renderToString } from 'react-dom/server';
import { AppComponent } from './AppComponent';

export function render() {
  return renderToString(<AppComponent/>)
}