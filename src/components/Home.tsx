import React from "react";
import { Header, Segment, Icon, Container } from "semantic-ui-react";
import styled from "styled-components";

const IntroduceImage = () => (
  <Icon circular color="teal" size="huge" name="paw" />
);

const Home: React.FC = () => {
  return (
    <Container>
      <Title>
        <Header as="h1" icon>
          <Icon name="chess pawn" />
          Taguchi Kana
          <Header.Subheader>---自己紹介---</Header.Subheader>
        </Header>
      </Title>
      <Segment>
        <Header as="h2">
          <IntroduceImage />
          田口 かな
        </Header>
        <p>2019年新卒</p>
        <p>使用言語：Ruby、JavaScript、TypeScript</p>
        <p>
          プログラミングスクールではRuby on
          Rails、社内研修ではJavaScript、TypeScript、Reactを使ったフロントエンド開発を中心に学びました。
          Web開発に興味があり、独学からプログラミングを始めました。未経験ではありますが、積極的に勉強し、開発に関わっていきたいと思っております。{" "}
        </p>
      </Segment>
    </Container>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export default Home;
