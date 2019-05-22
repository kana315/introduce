import React from "react";
import AchieveChild from "../components/AchieveChild";
import useReactRouter from "use-react-router";

const title = "Reactタイトルタイトルタイトルタイトルタイトルタイトル";
const description = "Reactタイトルタイトルタイトルタイトルタイトルタイトル";

const AchieveChildContainer: React.FC = () => {
  const { match }: { match: any } = useReactRouter();
  console.log(match.params.id);
  return <AchieveChild title={title} description={description} />;
};

export default AchieveChildContainer;
