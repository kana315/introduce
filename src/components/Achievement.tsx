import React from "react";
import { Card as SemanticCard, Header, Image } from "semantic-ui-react";
import styled from "styled-components";

const DefaultImage = () => (
  <Image
    src="https://react.semantic-ui.com/images/wireframe/image.png"
    size="medium"
    disabled
  />
);

const Achievement: React.FC = () => {
  return (
    <>
      <Header as="h1" dividing>
        Achievements
      </Header>
      <Container>
        <Wrapper>
          <Card>
            <DefaultImage />
            <Card.Content>
              <Card.Header>Title1</Card.Header>
              <Card.Meta>2019/5/17</Card.Meta>
              <Card.Description>Writing...</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <DefaultImage />
            <Card.Content>
              <Card.Header>Title2</Card.Header>
              <Card.Meta>2019/5/17</Card.Meta>
              <Card.Description>Writing...</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <DefaultImage />
            <Card.Content>
              <Card.Header>Title3</Card.Header>
              <Card.Meta>2019/5/17</Card.Meta>
              <Card.Description>Writing...</Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <DefaultImage />
            <Card.Content>
              <Card.Header>Title4</Card.Header>
              <Card.Meta>2019/5/17</Card.Meta>
              <Card.Description>Writing...</Card.Description>
            </Card.Content>
          </Card>
        </Wrapper>
      </Container>
    </>
  );
};

const Card: any = styled(SemanticCard)`
  margin: 10px !important;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 930px;
`;

export default Achievement;
