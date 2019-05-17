import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Achievement from "./components/Achievement";
import Review from "./components/Review";
import NoMatch from "./components/Nomatch";
import Menu from "./components/Menu";
import styled from "styled-components";

function AppRouter() {
  return (
    <Container>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/achievements" component={Achievement} />
          <Route path="/reviews/" component={Review} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1000px;
  min-height: 1000px;
  margin: auto;
`;

export default AppRouter;
