import React from "react";
import Home from "../components/Home";

const title = "Taguchi Kana";
const subTitle = "自己紹介";
const name = "田口 かな";
const joiningYear = "2019年新卒";
const lang = "使用言語：Ruby、JavaScript、TypeScript";
const description = `プログラミングスクールではRuby on
      Rails、社内研修ではJavaScript、TypeScript、Reactを使ったフロントエンド開発を中心に学びました。
      Web開発に興味があり、独学からプログラミングを始めました。未経験ではありますが、積極的に勉強し、開発に関わっていきたいと思っております。`;

const HomeContainer: React.FC = () => {
  return (
    <Home
      title={title}
      subTitle={subTitle}
      name={name}
      joiningYear={joiningYear}
      lang={lang}
      description={description}
    />
  );
};

export default HomeContainer;
