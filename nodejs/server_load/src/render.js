import React from 'react';
import { renderToString } from 'react-dom/server';
import { HelloCompo } from './HelloCompo';

export function render() {
  return renderToString(<HelloCompo/>)
}
