import React, { useEffect, useState } from "react";
import Achievements, { Achieve, AchieveChild } from "../components/Achievement";
import Client from "../api/client";
import { match as Match } from "react-router";
import useReactRouter from "use-react-router";

const title = "";
const subTitle = "";

const achievements: AchieveChild[] = [];

const init: Achieve = {
  title,
  subTitle,
  achievements
};

const AchieveContainer: React.FC = () => {
  const { match }: { match: Match } = useReactRouter();
  const [state, setAchieve] = useState(init);
  useEffect(() => {
    Client<Achieve>(`${match.url}`).then(achievement => {
      setAchieve(achievement);
    });
  }, [match.url]);
  return <Achievements {...state} />;
};

export default AchieveContainer;
