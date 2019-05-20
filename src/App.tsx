import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Achievement from "./components/Achievement";
import Review from "./components/Review";
import NoMatch from "./components/Nomatch";
import Menu from "./components/Menu";
import styled from "styled-components";
import AchieveChild from "./components/AchieveChild";
import ReviewChild from "./components/ReviewChild";

const AppRouter: React.FC = () => {
  return (
    <Container>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/achievements" component={Achievement} />
          <Route path="/achievement/:id" component={AchieveChild} />
          <Route path="/reviews/" component={Review} />
          <Route path="/review/:id" component={ReviewChild} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1000px;
  min-height: 1000px;
  margin: auto;
`;

export default AppRouter;
