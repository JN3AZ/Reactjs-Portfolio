import React, { Component } from "react";
import PassGenImg from "../../../data/images/Pass-gen.PNG";
import NoteImg from "../../../data/images/Note-taker.PNG";
import BurgerImg from "../../../data/images/BT2.PNG";
import ThfImg from "../../../data/images/THF3.PNG";
import BudgetImg from "../../../data/images/BudgetTracker1.PNG";
import EmpImg from "../../../data/images/Employee-Directory-1.PNG";
import "./style.css";
export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.portfolio = [
      {
        id: 1,
        name: "project1",
        description: "password-generator",
        imgurl: PassGenImg,
        projectlink: "https://github.com/JN3AZ/Password-generator",
        projectlink2: "https://jn3az.github.io/Password-generator",
      },
      {
        id: 2,
        name: "project2",
        description: "Note-Taker-app",
        imgurl: NoteImg,
        projectlink: "https://github.com/JN3AZ/Note-Taker-app",
        projectlink2: "https://lit-waters-54115.herokuapp.com",
      },
      {
        id: 3,
        name: "project3",
        description: "Burger-Logger",
        imgurl: BurgerImg,
        projectlink: "https://github.com/JN3AZ/burger-logger",
        projectlink2: "https://infinite-dawn-34453.herokuapp.com/burgers",
      },
      {
        id: 4,
        name: "project4",
        description: "Fitness-Tracker",
        imgurl: ThfImg,
        projectlink: "https://github.com/JN3AZ/TrackHealthFit",
        projectlink2: "https://ancient-ocean-94823.herokuapp.com",
      },
      {
        id: 5,
        name: "project5",
        description: "Budget-Tracker",
        imgurl: BudgetImg,
        projectlink: "https://github.com/JN3AZ/Progressive-Budget-Tracker",
        projectlink2: "https://flannel-pylon-59780.herokuapp.com",
      },
      {
        id: 6,
        name: "project6",
        description: "React-Employee-Directory",
        imgurl: EmpImg,
        projectlink: "https://github.com/JN3AZ/Employee-Directory-React",
        projectlink2: "https://jn3az.github.io/Employee-Directory-React",
      },
    ];
  }

  render() {
    let siteData = this.props.siteData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>View some of my projects here</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {this.portfolio &&
                this.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item" key={item.id}>
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <img
                            src={`${item.imgurl}`}
                            alt="screenshot of project"
                            className="item-img"
                          />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <h5>{item.projectlink}</h5>
                              <h5>{item.projectlink2}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
