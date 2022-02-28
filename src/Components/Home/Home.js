import React from 'react'
import logo from "../../assets/images/logo.png"
import homephoto from "../../assets/images/homephoto.jpeg"
import "./Home.css"
 function Home() {
  return (
    <div className="home-container">
      <div className="center">
        <div className="home-logo">
          <img className="home-logo-img" src={logo} alt="Italian Trulli"/>
          </div>
        <div className="home-photo">
        <img className="home-photo-img" src={homephoto} alt="Italian Trulli"/>
        </div>
      </div>
      <div className="home-texts">
        <div className="home-text one">A </div>
        <div className="home-text two">Great</div>
        <div className="home-text three">Ultimate</div>
        <div className="home-text four">Frisbee</div>
        <div className="home-text five">Team</div>
        <div className="home-text six">Since</div>
        <div className="home-text seven">2010</div>
      </div>



    </div>

  )
}
export default Home;