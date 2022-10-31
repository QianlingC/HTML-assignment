import React, { Component } from "react";
import "./Home.css";
import bggradient from "./assets/images/gradient-layer-2.png";
import bgimage from "./assets/images/image-3.jpg";
import bluecurl from "./assets/images/shape-17.png";
import boy_study from "./assets/images/content-image-6.png";
import Navbar from "./components/Navbar";

class Home extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${bggradient}), url(${bgimage})`,
      height: "80vh",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      opacity: "99%",
    };

    return (
      <>
        <div style={myStyle}>
          <Navbar />
          <div className="leftimage">
            <img className="bluecurl" src={bluecurl} alt="blue-curls" />
            <img className="study" src={boy_study} alt="boy-studying" />
          </div>
          <div className="righttext">
            <p className="text-give">Give Education</p>
            <h1 className="text-child">Give a child the gift of education</h1>
            <h5 className="text-help">
              Each donation is an essential help for everyone's life
            </h5>
            <button className="donate">DONATION NOW</button>
          </div>
        </div>

        <div className="home-center"></div>
      </>
    );
  }
}
export default Home;
