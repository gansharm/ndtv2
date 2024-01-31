  
import './App.css';
 import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
 import { BrowserRouter as Router,Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
 
 
   


export default class App extends Component {

  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      mode: 'dark',
    };

    // Bind event handler methods if necessary
    this.toggleMode = this.toggleMode.bind(this);
  }

  // Example event handler method
  toggleMode() {
    // Update state using this.setState
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = '#042743';
      console.log("dark")
    } else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = 'white';
      console.log("light")
    }
  }

     
  render() {
    return (
      <div>
        <Router> 
        <Navbar mode={this.mode} toggleMode={this.toggleMode}/>
         
        <Switch>
          <Route exact path="/general"><News key="general" country="in" category="general"/></Route>
          <Route exact path="/business"><News key="business" country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" country="in" category="entertainment"/></Route>
          <Route exact path="/health"><News key="health" country="in" category="health"/></Route>
          <Route exact path="/science"><News key="science" country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="sports" country="in" category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" country="in" category="technology"/></Route>

        </Switch>
        </Router>
      </div>
       
    )
  }
}

