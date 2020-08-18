import React, { Component } from "react";
import { Card, CardDeck, Row, Col } from "react-bootstrap";
import PassGenImg from "../../../data/images/Pass-gen.PNG";
import NoteImg from "../../../data/images/Note-taker.PNG";
import BurgerImg from "../../../data/images/BT2.PNG";
import ThfImg from "../../../data/images/THF3.PNG";
import BudgetImg from "../../../data/images/BudgetTracker1.PNG";
import EmpImg from "../../../data/images/Employee-Directory-1.PNG";
import "./style.css";
export default class Portfolio extends Component {
  // constructor(props) {
  //   super(props);
  //   this.portfolio = [
  //     {
  //       id: 1,
  //       name: "project1",
  //       description: "password-generator",
  //       imgurl: PassGenImg,
  //       projectlink: "https://github.com/JN3AZ/Password-generator",
  //       projectlink2: "https://jn3az.github.io/Password-generator",
  //     },
  //     {
  //       id: 2,
  //       name: "project2",
  //       description: "Note-Taker-app",
  //       imgurl: NoteImg,
  //       projectlink: "https://github.com/JN3AZ/Note-Taker-app",
  //       projectlink2: "https://lit-waters-54115.herokuapp.com",
  //     },
  //     {
  //       id: 3,
  //       name: "project3",
  //       description: "Burger-Logger",
  //       imgurl: BurgerImg,
  //       projectlink: "https://github.com/JN3AZ/burger-logger",
  //       projectlink2: "https://infinite-dawn-34453.herokuapp.com/burgers",
  //     },
  //     {
  //       id: 4,
  //       name: "project4",
  //       description: "Fitness-Tracker",
  //       imgurl: ThfImg,
  //       projectlink: "https://github.com/JN3AZ/TrackHealthFit",
  //       projectlink2: "https://ancient-ocean-94823.herokuapp.com",
  //     },
  //     {
  //       id: 5,
  //       name: "project5",
  //       description: "Budget-Tracker",
  //       imgurl: BudgetImg,
  //       projectlink: "https://github.com/JN3AZ/Progressive-Budget-Tracker",
  //       projectlink2: "https://flannel-pylon-59780.herokuapp.com",
  //     },
  //     {
  //       id: 6,
  //       name: "project6",
  //       description: "React-Employee-Directory",
  //       imgurl: EmpImg,
  //       projectlink: "https://github.com/JN3AZ/Employee-Directory-React",
  //       projectlink2: "https://jn3az.github.io/Employee-Directory-React",
  //     },
  //   ];
  //   this.openLink = function(e) {
  //     e.preventDefault();
  //     let url = e.target.dataset.link;
  //     window.open(url, "_blank");
      
  //   };
  // };

  render() {
    return (
      <Row xs={12} className="projects" id="portfolio">
      <h1 className="about-hed">
      View some of<span className="heavy"> my projects</span>
      </h1>
      <CardDeck className="deck">
        <Col md={4} xl={2}>
          <Card>
            <Card.Title>Password Generator</Card.Title>
            <Card.Img variant="top" src={PassGenImg} />
            <Card.Body>
              <Card.Text>
              Project example 1
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/JN3AZ/Password-generator">
                GitHub <br/>
              </Card.Link>

              <Card.Link href="https://jn3az.github.io/Password-generator">
                Deployed
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} xl={2}>
          <Card>
            <Card.Title>Note-Taker App</Card.Title>
            <Card.Img variant="top" src={NoteImg} />
            <Card.Body>
              <Card.Text>
              Project example 2
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/JN3AZ/Note-Taker-app">
                GitHub <br/>
              </Card.Link>
              <Card.Link href="https://lit-waters-54115.herokuapp.com">
                Deployed
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} xl={2}>
          <Card>
            <Card.Title>Burger Logger</Card.Title>
            <Card.Img variant="top" src={BurgerImg} />
            <Card.Body>
              <Card.Text>
               Project example 3
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/JN3AZ/burger-logger">
                GitHub <br/>
              </Card.Link>
              <Card.Link href="https://infinite-dawn-34453.herokuapp.com/burgers">
                Deployed
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} xl={2}>
          <Card>
            <Card.Title>Fitness Tracker</Card.Title>
            <Card.Img variant="top" src={ThfImg} />
            <Card.Body>
              <Card.Text>
              Project example 4
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/JN3AZ/TrackHealthFit">
                GitHub <br/>
              </Card.Link>
              <Card.Link href="https://ancient-ocean-94823.herokuapp.com">
                Deployed
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} xl={2}>
          <Card>
            <Card.Title>Budget Tracker</Card.Title>
            <Card.Img variant="top" src={BudgetImg} />
            <Card.Body>
              <Card.Text>
               Project example 5
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/JN3AZ/Progressive-Budget-Tracker">
                GitHub <br/>
              </Card.Link>
              <Card.Link href="https://flannel-pylon-59780.herokuapp.com">
                Deployed
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
        <Col md={4} xl={2}>
          <Card>
            <Card.Title>React Employee Directory</Card.Title>
            <Card.Img variant="top" src={EmpImg} />
            <Card.Body>
              <Card.Text>
            Project example 6
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Card.Link href="https://github.com/JN3AZ/Employee-Directory-React">
                GitHub <br/>
              </Card.Link>
              <Card.Link href="https://jn3az.github.io/Employee-Directory-React">
                Deployed
              </Card.Link>
            </Card.Footer>
          </Card>
        </Col>
      </CardDeck>
    </Row>
    );
  }
}
