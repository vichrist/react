import React from "react";
import '../css/developmentmain.css'; 
import '../images/Project1.png';
import '../images/project2.png';
import '../images/Project3.png';
import '../images/project4.png';
import '../images/Project5.png';
import '../images/Project6.png';



function DevelopmentMain() {
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

  <div className="jumbotron">
      
      <h1 className='development'>Bill Boards</h1>
      <p>
        Track your budget more conveniently! Create multiple budgets that have default categories listed. Every category will have a budget total and suggested percentage based on your total income. 
      </p>
      <ul>
          <a href="https://sleepy-eyrie-55325.herokuapp.com/" target="_blank" rel="noreferrer"><li>Deployed App</li></a>
          <a href="https://github.com/vichrist/BillBoards" target="_blank" rel="noreferrer"><li>GitHub Repository</li></a>
      </ul>
        <img src= "/images/Project1" alt="project 1" width="1200"/>
    </div><div className="card">
  </div><br></br>


    <div className="jumbotron">
      
        <h1 className='development'>Weather Trips</h1>
        <p>
        Going on a trip? Search cities along the way, see them append to a list of history items and get direction routes to your destination along with accurate and updated weather conditions that will prepare you in advance for your trip. 
      </p>
        <ul>
            <a href="https://mmcginley32.github.io/project1/index.html" target="_blank" rel="noreferrer" ><li>Deployed App</li></a>
            <a href="https://github.com/mmcginley32/project1" target="_blank" rel="noreferrer" ><li>GitHub Repository</li></a>
        </ul>
          <img src= "../images/project2" alt="project 2" width="1200"/>
      </div><div className="card">
    </div><br></br>

    <div className="jumbotron">
      
        <h1 className='development'>Eat-Da-Burger</h1>
        <p>
        Hungry for a burger! Find a list of default burger options to devour. If you change your mind, remove the burger from the devour list--- you can also search a burger of your choice to append to the burger option or devour list. 
      </p>
        <ul>
            <a href="https://stormy-tundra-38579.herokuapp.com/" target="_blank" rel="noreferrer" ><li>Deployed App</li></a>
            <a href="https://github.com/vichrist/Add-Da-Burger-App" target="_blank" rel="noreferrer" ><li>GitHub Repository</li></a>
        </ul>
          <img src= "../images/Project3" alt="project 3" width="1200"/>
      </div><div className="card">
    </div><br></br>

    <div className="jumbotron">
      
        <h1 className='development'>Password Generator</h1>
        <p>
        Generate a random password based on your selected criteria of upper/lower case letters, numbers and symbols. 
      </p>
        <ul>
            <a href="https://vichrist.github.io/Password-Generator-/" target="_blank" rel="noreferrer" ><li>Deployed App</li></a>
            <a href="https://github.com/vichrist/Password-Generator-" target="_blank" rel="noreferrer" ><li>GitHub Repository</li></a>
        </ul>
          <img src= "../images/project4" alt="project 4" width="1200"/>
      </div><div className="card">
    </div><br></br>

    <div className="jumbotron">

        <h1 className='development'>Work Day Planner</h1>
        <p>
        Let's keep track of your daily tasks. Use this app to track your appointments, delete and/or update tasks, whether it be for work or personal use. The list of appointments will remain on your calendar even after refreshing your browser. 
      </p>
        <ul>
            <a href="https://vichrist.github.io/Work-Day-Planner/" target="_blank" rel="noreferrer" ><li>Deployed App</li></a>
            <a href="https://github.com/vichrist/WK-5Homework" target="_blank" rel="noreferrer" ><li>GitHub Repository</li></a>
        </ul>
          <img src= "../images/Project5" alt="project 5" width="1200"/>
      </div><div className="card">
    </div><br></br>

    <div className="jumbotron">
      
        <h1 className='development'>Weather Dashboard</h1>
        <p>
        Choose a city to get updated weather details. See that your recently searched cities will append to a list for tracking.  
      </p>
        <ul>
            <a href="https://vichrist.github.io/vichrist.wk6.github.io/" target="_blank" rel="noreferrer" ><li>Deployed App</li></a>
            <a href="https://github.com/vichrist/WK-6Homework" target="_blank" rel="noreferrer" ><li>GitHub Repository</li></a>
        </ul>
          <img src= "../images/Project6" alt="project 6" width="1200"/>
      </div>
  </div>
  <br></br>
</div>
  );
}

export default DevelopmentMain;