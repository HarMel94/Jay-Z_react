import React from "react";
import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';

import Main from "./components/Main";
import Credits from "./components/Credits";
import SliderFunc from "./components/SliderFunc";
import Home from "./components/Home";
import Video from "./components/Video";

//import { CSSTransition } from "react-transition-group";


export default function App() {

  // let routes = [
  //   {path: "/", Component: Main},
  //   {path: "/home", Component: Home},
  // ]

  return(

    // <BrowserRouter>                   //////   ANIMAEITED SWITCHING
    //   <div>
    //     <div>
    //       <NavLink to="/">Main00</NavLink>
    //       <NavLink to="/home">Home00</NavLink>
    //     </div>
    //     {routes.map(({path,Component}) =>
    //       <Route key={path} exact path={path}>
    //         {({match}) =>
    //           <CSSTransition
    //             in={match != null}
    //             timeout={1000}
    //             classNames="page"
    //             unmountOnExit                
    //           >
    //             <Component/>
    //           </CSSTransition>
    //         }
    //       </Route>
    //     )}
    //   </div>
    // </BrowserRouter>
   
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