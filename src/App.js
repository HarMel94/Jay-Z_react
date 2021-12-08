import React from "react";
import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';

import Main from "./components/Main";
import Credits from "./components/Credits";
import SliderFunc from "./components/SliderFunc";
import Home from "./components/Home";
import Video from "./components/Video";

export default function App() {
  return(   
    <Router>
      <div className = 'App'>

        <Switch>          
          <Route exact path='/' component={Main}/>
          <Link  path = '/credits' component={Credits}/>
          <Link  path = '/slider' component={SliderFunc}/>
          <Link  path = '/home' component={Home}/>
          <Link  path = '/video' component={Video}/>         
        </Switch>

      </div>
    </Router>
  );
};