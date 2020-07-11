import React, { Component } from "react";
import "./style.css";
export default class About extends Component {
  render() {
    let siteData = this.props.siteData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="./images/profile-picture.jpg" alt="profile" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{siteData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{siteData.name}</span>
                  <br></br>
                  <span>{siteData.address}</span>
                  <br></br>
                  <span>{siteData.website}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
