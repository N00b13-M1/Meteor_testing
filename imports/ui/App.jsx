import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    {/* <h2>Hello World</h2> */}
    <Hello/>
    <Info/>
  </div>
);
