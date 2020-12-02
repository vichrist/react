import React from "react";
import '../css/homemain.css'; 
import {Link} from "react-router-dom"; 


function HomeMain() {
  return (
    <div className="background-image">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">Christal Vigil
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Home 
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="about">
                About
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="development">
                Development
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <br></br>

 
      <div className="imagehome">

      <div className="jumbotron">
      <div className="container-home">
  
      <h1 className="h1main">Welcome to my Portfolio!</h1><br></br>
      <p className="pmain">As a developer I have experienced how developing extends much beyond what the surface exposes. <b>Get a glimpse on what I see as important to the service of web development.</b></p>
      <h1 className="h1home">Development Standards for Structural Design</h1>
      <p1 className="phome">
        As a a developer it's not only my mission to meet client objectives, but a vision to build a relationship that will entrust my services on an ongoing basis. The web development process should be mindful of certain code strategies that will not only enhance Search Engine Optimization, but that will provide access to a range of users via responsive layouts & web-browser compatibility which by default promote larger customer base accessibility. Web testing practices throughout the development phase is pivitol as testing for web-based applications will ensure that the functionality is geared into position for real-time users. 
      </p1><br></br><br></br>
      <h1 className="h1home">UI Standards for Structural Design</h1> 
      <p2 className="phome">
        The user interface (UI) design standards are concepts that are integrated within the development stage of building an engaging user experience. It is important to develop a UI that will be user-friendly which in essence will promote excellent user experience. Think of the UI as being the medium of how a user interacts with your product and/or service and let's get innovative in the stage of creativity to enhance both the usability and beauty of your website.  
    </p2>
    </div>
  </div>
  </div>
  <br></br>
</div>
  );
}

export default HomeMain;