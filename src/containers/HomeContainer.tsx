import React, { useEffect, useState } from "react";
import Home, { Props as Introduce } from "../components/Home";
import Client from "../api/client";
import { match as Match } from "react-router";
import useReactRouter from "use-react-router";

const init: Introduce = {
  title: "",
  subTitle: "",
  name: "",
  joiningYear: "",
  lang: "",
  description: ""
};

const HomeContainer: React.FC = () => {
  const { match }: { match: Match } = useReactRouter();
  const [state, setIntroduce] = useState<Introduce>(init);
  useEffect(() => {
    Client<Introduce>(`${match.url}`).then(res => {
      setIntroduce(res);
    });
  }, [match.url]);
  return <Home {...state} />;
};

export default HomeContainer;
