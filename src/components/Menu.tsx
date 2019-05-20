import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";

const TopMenu: React.FC = () => {
  return (
    <>
      <Menu inverted>
        <Menu.Item as="a">
          <Link to="/">
            <Icon name="home" />
            Home
          </Link>
        </Menu.Item>
        <Menu.Item as="a">
          <Link to="/achievements">
            <Icon name="folder outline" />
            Achievements
          </Link>
        </Menu.Item>
        <Menu.Item as="a">
          <Link to="/reviews">
            <Icon name="book" />
            Reviews
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default TopMenu;
