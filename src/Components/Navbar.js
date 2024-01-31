import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './Navbar.css'
export default class Navbar extends Component {
  constructor(props) {
    super(props);

    // Initialize state
    this.state = {
      mode: 'light',
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
  render(props) {
    return (
        <nav className={`navbar  navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode}`} style={{position:"sticky"}} >
  <div className="container-fluid">
    <Link className="navbar-brand"  to="/"> <h1>NewsMonkey</h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse align-items-center" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/general"> <h3>Home </h3></Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li> */}
        <li className="nav-item"><Link className="nav-link" to="/business"><h3> Business  </h3> </Link> </li> 
        <li className="nav-item"><Link className="nav-link" to="/entertainment"> <h3>Entertainment</h3></Link> </li> 
        <li className="nav-item"><Link className="nav-link" to="/general"> <h3>General</h3></Link> </li> 
        <li className="nav-item"><Link className="nav-link" to="/health"> <h3>Health</h3></Link></li> 
        <li className="nav-item"><Link className="nav-link" to="/science"> <h3>Science</h3></Link> </li >      
        <li className="nav-item"><Link className="nav-link" to="/sports"> <h3>Sports</h3></Link></li> 
        <li className="nav-item"><Link className="nav-link" to="/technology"> <h3>Technology</h3></Link> </li> 
      </ul>
      <div class={`form-check form-switch p-0" text-${this.state.mode ==='light'?'dark':'light'} mx-4 justify-content-center`}>
  <div class="d-inline-flex flex-row-reverse gap-1">
    <input class="form-check-input ms-0" type="checkbox" role="switch" id="switchCheckLabelStart" onClick={this.toggleMode} />
    <label class="form-check-label" for="flexswitchCheckLabelStart"><h2>{this.state.mode === "light"?"DarkMode":"LightMode"}</h2>   </label>
  </div>
</div>
    </div>
    {/* {this.mode === 'light'?'EnableDarkMode':'EnableLightMode'} */}
  </div>
   
</nav>
      
    )
  }
}
