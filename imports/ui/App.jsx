import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
// import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";


// export const AppRouter = () => (
//   <Router>
//     <Switch>
//       <Route path="./" component={App} exact />
//       <Route path='./other' component={OtherComponent} />
//     </Switch>
//   </Router>
// )



export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <div className="text-gray-200">Styling test</div>
    <Hello/>
    <Info/>
    {/* <Link to='/other'>LINK TO OTHER</Link> */}
    <h2>Image relative</h2>
    <img src='./revolin_dancing_guy.png' />
    <h2>Image utilisant meteor.absoluteUrl()</h2>
    <img src={`${Meteor.absoluteUrl()}revolin_dancing_guy.png`} />
    <h2>Image absolue</h2>
    <img src='/revolin_dancing_guy.png' />
  </div>
);

// export const OtherComponent = () => (
//   <div>
//     <div className="text-2xl text-yellow-200">Other component</div>
//     <Link to='/'>Back</Link>
//   </div>
// )
