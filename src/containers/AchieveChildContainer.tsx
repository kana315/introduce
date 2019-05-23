import React from "react";
import AchieveChild from "../components/AchieveChild";
import useReactRouter from "use-react-router";

const title = "Reactタイトルタイトルタイトルタイトルタイトルタイトル";
const date = "2019/5/1";
const imageUrl = "https://react.semantic-ui.com/images/wireframe/image.png";
const description = "Reactタイトルタイトルタイトルタイトルタイトルタイトル";

const props = { title, date, imageUrl, description };

const AchieveChildContainer: React.FC = () => {
  const { match }: { match: any } = useReactRouter();
  console.log(match.params.id);
  return <AchieveChild {...props} />;
};

export default AchieveChildContainer;
