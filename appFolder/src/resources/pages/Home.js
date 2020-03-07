import React from 'react';
import { Jumbotron, Button, Row, Col, Container } from 'reactstrap';
import {Link} from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <Jumbotron className="my-0">
        <Container>
          <Row>
            <Col>
              <h1>The Right Tool for the Right Job</h1>
              <p> View the full Project Catalog </p>
              <Link to="/Portfolio/">
                <Button
                    tag="a"
                    color="success"
                    size="large"
                    href="../../index.html"
                    target="_blank"
                >
                    Project Catalog >>
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <div className="ml-auto">
                <h1>Technologies</h1>
                <p> Test </p>
                <Link to="/Portfolio/">
                  <Button
                      tag="a"
                      color="success"
                      size="large"
                      href="../../index.html"
                      target="_blank"
                  >
                      Project Catalog >>
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;