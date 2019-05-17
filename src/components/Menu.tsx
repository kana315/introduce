import React from "react";
import { Link } from "react-router-dom";
import { List, Icon } from "semantic-ui-react";

const Menu: React.FC = () => {
  return (
    <List celled horizontal link>
      <List.Item>
        <Link to="/">
          <Icon name="home" />
          Home
        </Link>
      </List.Item>
      <List.Item>
        <Link to="/achievements">
          <Icon name="folder outline" />
          Achievements
        </Link>
      </List.Item>
      <List.Item>
        <Link to="/reviews">
          <Icon name="book" />
          Reviews
        </Link>
      </List.Item>
    </List>
  );
};

export default Menu;
