import Logger from "./logger";
import Calc from "./calc";
import $ from 'jquery';
import 'bootstrap';
import './style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const  superCalc =   new  Calc();
const superLogger = new Logger();

superLogger.log(superCalc.add(1,2,3));



// $(document).ready(()=>{
//    window.alert("Трев");
// });

// $(function() {
//    window.alert("The DOM is now loaded and can be manipulated." );
// });




// const rootContainer = document.querySelector('#root');
// class Block extends React.Component {
//    render() {
//       return <div>
//          <h1>{this.props.header}</h1>
//       </div>
//    }
// }
// ReactDOM.render(<Block header={"Привет, я Alex"}/>, rootContainer);





const rootContainer = document.querySelector('#root');

class NavigateElement extends React.Component { 
   render() {
       return <li className ="nav-item active">
               <a className="nav-link" href={this.props.href}>
                  {this.props.text}
               </a>
            </li> 
   }
}

class NavigateMenuList extends React.Component{ 
   render() {
       return <ul className="navbar-nav mr-auto">
            <NavigateElement href={"/"} text={"Main"}/>
            <NavigateElement href={"/user/loginin"} text={"login in"}/>
            <NavigateElement href={"/user/register"} text={"Registration"}/>
         </ul>
   }
}

ReactDOM.render(<NavigateMenuList/>, rootContainer);










