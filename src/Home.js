import React, { Component } from "react";
import "./Home.css";
import bggradient from "./assets/images/gradient-layer-2.png";
import bgimage from "./assets/images/image-3.jpg";
import bluecurl from "./assets/images/shape-17.png";
import boy_study from "./assets/images/content-image-6.png";
import dots from "./assets/images/pattern-1.png";
import lpattern from "./assets/images/pattern-35.png";
import smile from "./assets/images/about-6 (1).png";
import holdhands from "./assets/images/about-9.png";
import pencil from "./assets/images/about-7.png";
import together from "./assets/images/about-8.png";
import money from "./assets/images/about-6.png";
import boxmoney from "./assets/images/feature-1.png";
import giveheart from "./assets/images/feature-2.png";
import givemoney from "./assets/images/feature-3.png";
import hat from "./assets/images/feature-4.png";

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

        <section className="home-center">
          <div className="image-stats">
            <img src={dots} className="dots" alt="dots" />
            <img src={lpattern} className="bigcurve" alt="pattern" />
            <img src={smile} className="smile" alt="people-smile" />
            <div className="circle-text">
              <h3>45K</h3>
              <div className="line"></div>
              <p>Satisfied Donors</p>
            </div>
          </div>
          <div className="about">
            <span style={{ color: "orange" }}>ABOUT AELPA</span>
            <br></br>
            <span className="title-explain">
              Aelpa Make an education charity donation today
            </span>
            <br></br>
            <span>
              Growing up in poverty, children face many challenges: hunger and
              health problems, limited access to education and medical
              services.Growing up in poverty children face many
            </span>
            <hr></hr>
            <img src={pencil} className="pencil-bullet" alt="pencil" />
            <span>20,000 poor children education and empowered</span>
            <br></br>
            <img src={together} className="together-bullet" alt="together" />
            <span>42,000 children lifted from poverty</span>
            <br></br>
            <img src={holdhands} className="hold-bullet" alt="holdhands" />
            <span>9,000 children healthy and nourished</span>
            <hr></hr>
            <img src={money} className="money-bullet" alt="money" />
            <span>
              Make an education charity donation today and give a child the
              opportunity for a brighter future.
            </span>
          </div>
        </section>
        <section>
          <div className="cards-donation">
            <div className="card">
              <img src={boxmoney} />
              <div className="card-content">
                <h4>We Donate</h4>
                <p>Vivamus in magna aclorm tellus fringilla eleifend sit</p>
              </div>
            </div>

            <div className="card">
              <img src={giveheart} />
              <div className="card-content">
                <h4>Monthly Gift</h4>
                <p>Vivamus in magna aclorm tellus fringilla eleifend sit</p>
              </div>
            </div>

            <div className="card">
              <img src={givemoney} />
              <div className="card-content">
                <h4>Gift Catalog</h4>
                <p>Vivamus in magna aclorm tellus fringilla eleifend sit</p>
              </div>
            </div>
            <div className="card">
              <img src={hat} />
              <div className="card-content">
                <h4>We Educate</h4>
                <p>Vivamus in magna aclorm tellus fringilla eleifend sit</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Home;
