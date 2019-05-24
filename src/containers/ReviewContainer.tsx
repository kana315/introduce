import React, { useEffect, useState } from "react";
import Review, { ReviewPage, ReviewChild } from "../components/Review";
import Client from "../api/client";
import { match as Match } from "react-router";
import useReactRouter from "use-react-router";

const title = "";
const subTitle = "";
const reviews: ReviewChild[] = [];
const init: ReviewPage = { title, subTitle, reviews };

const ReviewContainer: React.FC = () => {
  const { match }: { match: Match } = useReactRouter();
  const [state, setReview] = useState(init);
  useEffect(() => {
    Client<ReviewPage>(`${match.url}`).then(review => {
      setReview(review);
    });
  }, [match.url]);
  return <Review {...state} />;
};

export default ReviewContainer;
