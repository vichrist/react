import React from "react";
import '../css/aboutmain.css'; 
import '../images/christal1.jpg';


function AboutMain() {
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

      <div className="image">

      <div className="jumbotron">
      <h1 className="h1about">~ABOUT~</h1>
        <p className="p1about">
        I'm a Colorado native raised in the central Denver area. I was 29 when I went back to school. I graduated from the Univerisity of Colorado Denver with a B.A in Economics. During my time in college I decided that I wanted to take an alternative approach for my career and get licensed to sell investment products. I obtained my Series 6 as well as a Colorado Life License but after all was said and done I still wasn't satisfied. Within a year of graduation, I decided to take on Web Development. 
        </p>   
        <p className="p1about">
        It is indeed opportunity that has allowed me to discover my interests and passions. The idea of exerting knowledge to serve as a resource of any sort is always a reward of its own. While I have embarked a few different journeys, I have realized that my interests and passions have led me to very different paths. Finally, for the first time I am experiencing a passion to do something. I look forward to continuing to build my skills and experience in full stack web development!
        </p>
        <p className="quote"><q>Sometimes in the wave of change we find our true direction.</q> <br></br>Author Unknown</p>
   
      </div>
    </div>
  </div>
   <br></br>
  </div>
  );
}

export default AboutMain;