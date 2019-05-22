import React from "react";
import ReviewChild from "../components/ReviewChild";

const title =
  "オブジェクト思考でなぜつくるのかオブジェクト思考でなぜつくるのかオブジェクト思考でなぜつくるのか";
const date = "2019/5/17";
const review = `改訂第2版では、すべての文章を細かく見直して修正して、追加のトピックを記述したことに加えて、
多くの技術者の注目を集めている関数型言語の基本的な仕組みと思想を解説する改訂第2版では、すべての文章を細かく見直して修正して、追加のトピックを記述したことに加えて、
多くの技術者の注目を集めている関数型言語の基本的な仕組みと思想を解説する
改訂第2版では、すべての文章を細かく見直して修正して、追加のトピックを記述したことに加えて、
多くの技術者の注目を集めている関数型言語の基本的な仕組みと思想を解説する
改訂第2版では、すべての文章を細かく見直して修正して、追加のトピックを記述したことに加えて、
多くの技術者の注目を集めている関数型言語の基本的な仕組みと思想を解説する`;

const props = { title, date, review };

const ReviewChildContainer: React.FC = () => {
  return <ReviewChild {...props} />;
};

export default ReviewChildContainer;
