import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Danwycliff Ndwiga </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I am currently learning more about business and tech in specific; Data Related skills.
            <br />
            I graduated with Bsc Business Information Technology<span className="purple">(BBIT)</span>  From <span className="purple">KABARAK UNIVERSITY</span>.
            <br />
            I have a certification in<span className="purple"> Software Engineering</span>  From <span className="purple">MORINGA SCHOOL</span>.
            <br />
            I have a certification in<span className="purple"> Data Analytics </span>  From <span className="purple"> Google Career Certificates</span>.
            <br />
            I am looking for new opportunities to <span className="purple">Work</span> and <span className="purple"> Learn </span> in order to grow my<span className="purple"> Knowledge </span> and <span className="purple">Skillset</span>.
            <br />
            <br />
            Apart from Business and Tech, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Community service
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Documentaries
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
          </ul>

          <p style={{ color: "orange" }}>
            "Only a life lived for others is a life worthwhile"{" "}
          </p>
          <footer className="blockquote-footer">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
