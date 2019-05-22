import React from "react";
import Achievements from "../components/Achievement";

const title = "Achievements";
const subTitle = "研修でつくったもの";

const achievement1 = {
  achieveTitle: "ReactでHP製作",
  imageUrl: "https://react.semantic-ui.com/images/wireframe/image.png",
  date: "2019/5/17",
  url: "/achievements/1"
};

const achievement2 = {
  achieveTitle: "Title",
  date: "2019/5/1",
  url: "/achievements/2"
};

const achievements = [achievement1, achievement2];

const props = {
  title,
  subTitle,
  achievements
};

const AchieveContainer: React.FC = () => {
  return <Achievements {...props} />;
};

export default AchieveContainer;
