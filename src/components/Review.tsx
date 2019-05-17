import React from "react";
import { Card as SemanticCard, Header } from "semantic-ui-react";
import styled from "styled-components";

const Review: React.FC = () => {
  return (
    <>
      <Header as="h1" dividing>
        Book Reviews
      </Header>
      <Wrapper>
        <Card>
          <Card.Content>
            <Card.Header as="h3">Title</Card.Header>
            <Card.Meta>2019/5/17</Card.Meta>
            <Card.Description>Writing...</Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Title2</Card.Header>
            <Card.Meta>2019/5/17</Card.Meta>
            <Card.Description>Writing...</Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Title3</Card.Header>
            <Card.Meta>2019/5/17</Card.Meta>
            <Card.Description>Writing...</Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Title4</Card.Header>
            <Card.Meta>2019/5/17</Card.Meta>
            <Card.Description>Writing...</Card.Description>
          </Card.Content>
        </Card>
      </Wrapper>
    </>
  );
};

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
