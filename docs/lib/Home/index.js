import React from 'react';
import { PrismCode } from 'react-prism';
import { Button, Container, Row, Col, Jumbotron } from 'reactstrap';
import { Link } from 'react-router';
import Example from '../examples/import-basic';

const importBasic = require('!!raw!../examples/import-basic');

export default () => {
  return (
    <div>
      <Jumbotron tag="section" className="jumbotron-header text-xs-center m-b-3">
        <Container fluid>
          <Row>
            <Col>
              <p className="lead">
                <img src="/assets/logo.png" alt="" width="150px" />
              </p>
              <h1 className="jumbotron-heading display-4">video-react</h1>
              <p className="lead">
                The web video player built from the ground up for an HTML5 world using React library.
              </p>
              <p>
                <Button outline color="danger" href="https://github.com/video-react/video-react">View on Github</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container fluid>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h2>Installation</h2>
            <hr />
            <h3>NPM</h3>
            <p>Install video-react and peer dependencies via NPM</p>
            <pre>
              <PrismCode className="language-bash">npm install --save video-react react react-dom</PrismCode>
            </pre>
            <p>ES6 - import the components you need</p>
            <div className="docs-example">
              <Example />
            </div>
            <pre>
              <PrismCode className="language-jsx">
                {importBasic}
              </PrismCode>
            </pre>
            <h2 className="m-t-3">Development</h2>
            <hr />
            <p>Install dependencies:</p>
            <pre>
              <PrismCode className="language-bash">npm install</PrismCode>
            </pre>
            <p>
            Run examples at [http://localhost:9000/](http://localhost:9000/) with webpack dev server:
            </p>
            <pre>
              <PrismCode className="language-bash">npm start</PrismCode>
            </pre>
            <p>
              Run tests & coverage report:
            </p>
            <pre>
              <PrismCode className="language-bash">npm test</PrismCode>
            </pre>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
