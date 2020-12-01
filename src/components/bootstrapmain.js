import React from "react";



function HelloBootstrapMain() {
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
      </nav>
      <div className="jumbotron">
      
        <h1>~Welcome to my Portfolio~</h1>
        <p>
          Enim adipisicing enim reprehenderit ex ullamco consectetur Lorem laboris magna
          exercitation. Aliquip reprehenderit magna elit cillum adipisicing dolore aliquip velit.
          Ipsum ullamco nostrud tempor eu deserunt ipsum incididunt fugiat esse ipsum. Exercitation
          nostrud exercitation sit ex nostrud aliqua officia magna nostrud deserunt et esse eu
          deserunt. Non dolor consequat qui ea culpa tempor magna nulla consectetur est occaecat.
        </p>
      </div>
      <div className="card">
    </div>
    </div>
  </div>
  );
}

export default HelloBootstrapMain;