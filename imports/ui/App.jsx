import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <div className="text-gray-200">Styling test</div>
    <Hello/>
    <Info/>
    <h2>Image relative</h2>
    <img src='/revolin_dancing_guy.png' />
    <h2>Image utilisant meteor.absoluteUrl()</h2>
    <img src={`${Meteor.absoluteUrl()}revolin_dancing_guy.png`} />
  </div>
);
