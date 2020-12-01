import React from 'react'; 
import '../css/contactmain.css'; 


function ContactMain () {
    return (
<div className="background-image">
    <div className="container">
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
              <a className="nav-link" href="/">
                Home 
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="about">
                About
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="development">
                Development
              </a>
            </li>
          </ul>
        </div>
      </nav><br></br>
      <div className="imageconnect"> 
        <div className="jumbotron">
        <div className ="main-contact"> 
        <h2>Services for Full Stack Web Development</h2>
        <h1 className="h1connect"><b> Let's Connect Today!</b></h1>
        <h3>Visit me on Github or LinkedIn or contact me via phone or email</h3>
        <p className="contact"><b>Email:</b> c.vigil27@gmail.com | <b>Mobile:</b> 720.891.6797</p>


        <div className="links">
            <a href="https://www.linkedin.com/in/christalvigil-lillyrose35" target="blank">LinkedIn</a> <a href="https://github.com/vichrist" target="blank">GitHub</a> <a href="https://drive.google.com/file/d/1zIq9Tvd7B83r3iHX-V-qKUXPh0811grY/view?usp=sharing" target="blank">Resume</a>
 

        </div>
        </div>
      </div>
      </div>
    </div>
    <br></br>
  </div>


      ); 
  };


  
  export default ContactMain; 



