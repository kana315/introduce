import React from "react";
import { Card as SemanticCard, Header, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DefaultImage = () => (
  <Image
    src="https://react.semantic-ui.com/images/wireframe/image.png"
    size="medium"
    disabled
  />
);

const Review: React.FC = () => {
  return (
    <>
      <Title>
        <Header as="h1" icon>
          <Icon name="chess rook" />
          Book Reviews
          <Header.Subheader>---今まで読んだ本の感想---</Header.Subheader>
        </Header>
      </Title>
      <Wrapper>
        <Card>
          <DefaultImage />
          <Card.Content>
            <Card.Header>
              <Link to="/review/1">
                オブジェクト思考でなぜつくるのかオブジェクト思考でなぜつくるのかオブジェクト思考でなぜつくるのか
              </Link>
            </Card.Header>
            <Card.Meta>2019/5/7</Card.Meta>
            <Card.Description>
              改訂第2版では、すべての文章を細かく見直して修正して、追加のトピックを記述したことに加えて、
              多くの技術者の注目を集めている関数型言語の基本的な仕組みと思想を解説する
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <DefaultImage />
          <Card.Content>
            <Card.Header>
              <Link to="/review/2">あああ</Link>
            </Card.Header>
            <Card.Meta>2019/5/17</Card.Meta>
            <Card.Description>Writing...</Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <DefaultImage />
          <Card.Content>
            <Card.Header>
              <Link to="/review/3">Title3</Link>
            </Card.Header>
            <Card.Meta>2019/5/17</Card.Meta>
            <Card.Description>Writing...</Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <DefaultImage />
          <Card.Content>
            <Card.Header>
              <Link to="/review/4">Title4</Link>
            </Card.Header>
            <Card.Meta>2019/5/17</Card.Meta>
            <Card.Description>Writing...</Card.Description>
          </Card.Content>
        </Card>
      </Wrapper>
    </>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Card: any = styled(SemanticCard)`
  margin: 0 !important;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 290px 290px 290px;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: repeat(auto-fill, 290px);
  justify-content: center;
`;

export default Review;
