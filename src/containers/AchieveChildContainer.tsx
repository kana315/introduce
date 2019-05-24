import React, { useEffect, useState } from "react";
import { match as Match } from "react-router";
import AchieveChildPage, { AchieveChild } from "../components/AchieveChild";
import useReactRouter from "use-react-router";
import Client from "../api/client";

const id = "";
const title = "";
const date = "";
const description = "";
const init: AchieveChild = { id, title, date, description };

const AchieveChildContainer: React.FC = () => {
  const { match }: { match: Match } = useReactRouter();
  const [achieve, setAchieve] = useState(init);
  useEffect(() => {
    Client<AchieveChild>(`${match.url}`).then(res => {
      setAchieve(res);
    });
  }, [match.url]);
  return <AchieveChildPage {...achieve} />;
};

export default AchieveChildContainer;
