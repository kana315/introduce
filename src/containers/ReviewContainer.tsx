import React from "react";
import Review from "../components/Review";

const title = "Book Reviews";
const subTitle = "今まで読んだ本の感想";
const review1 = {
  reviewTitle:
    "オブジェクト思考でなぜつくるのかオブジェクト思考でなぜつくるのかオブジェクト思考でなぜつくるのか",
  url: "/reviews/1",
  imageUrl: "https://react.semantic-ui.com/images/wireframe/image.png",
  date: "2019/5/7",
  description: `改訂第2版では、すべての文章を細かく見直して修正して、追加のトピックを記述したことに加えて、多くの技術者の注目を集めている関数型言語の基本的な仕組みと思想を解説する`
};
const review2 = {
  reviewTitle:
    "オブジェクト思考でなぜつくるのかオブジェクト思考でなぜつくるのかオブジェクト思考でなぜつくるのか",
  url: "/reviews/2",
  date: "2019/5/7",
  description: `改訂第2版では、すべての文章を細かく見直して修正して、追加のトピックを記述したことに加えて、多くの技術者の注目を集めている関数型言語の基本的な仕組みと思想を解説する`
};
const reviews = [review1, review2];
const props = { title, subTitle, reviews };

const ReviewContainer: React.FC = () => {
  return <Review {...props} />;
};

export default ReviewContainer;
