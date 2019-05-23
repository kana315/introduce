import React, { useEffect, useState } from "react";
import Home, { Props as Introduce } from "../components/Home";
import Client from "../api/client";

const init: Introduce = {
  title: "",
  subTitle: "",
  name: "",
  joiningYear: "",
  lang: "",
  description: ""
};

const HomeContainer: React.FC = () => {
  const [state, setIntroduce] = useState<Introduce>(init);
  useEffect(() => {
    Client<Introduce>().then(res => {
      setIntroduce(res);
    });
  }, []);
  return <Home {...state} />;
};

export default HomeContainer;
