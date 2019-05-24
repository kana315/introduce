import React, { useState, useEffect } from "react";
import { match as Match } from "react-router";
import Child, { ReviewChild } from "../components/ReviewChild";
import Client from "../api/client";
import useReactRouter from "use-react-router";

const id = "";
const title = "";
const date = "";
const description = "";
const init: ReviewChild = { id, title, date, description };

const ReviewChildContainer: React.FC = () => {
  const { match }: { match: Match<{ id: string }> } = useReactRouter();
  const [state, setReview] = useState(init);
  useEffect(() => {
    Client<ReviewChild>(match.url).then(res => {
      setReview(res);
    });
  }, [match.url]);
  return <Child {...state} />;
};
export default ReviewChildContainer;
