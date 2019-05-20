import React from "react";
import {
  Card as SemanticCard,
  Header,
  Image,
  Icon,
  Button
} from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <Title>
        <Header as="h1" icon>
          <Icon name="chess knight" />
          Achievements
          <Header.Subheader>---研修でつくってきたもの---</Header.Subheader>
        </Header>
      </Title>
      <Container>
        <Wrapper>
          <Card>
            <DefaultImage />
            <Card.Content>
              <Card.Header>ReactでHP製作</Card.Header>
              <Card.Meta>2019/5/17</Card.Meta>
              <Card.Description>
                <Button>
                  <Link to="/achievement/1">詳細</Link>
                </Button>
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <DefaultImage />
            <Card.Content>
              <Card.Header>Title2</Card.Header>
              <Card.Meta>2019/5/17</Card.Meta>
              <Card.Description>
                <Button>
                  <Link to="/achievement/2">詳細</Link>
                </Button>
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <DefaultImage />
            <Card.Content>
              <Card.Header>Title3</Card.Header>
              <Card.Meta>2019/5/17</Card.Meta>
              <Card.Description>
                <Button>
                  <Link to="/achievement/3">詳細</Link>
                </Button>
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <DefaultImage />
            <Card.Content>
              <Card.Header>Title4</Card.Header>
              <Card.Meta>2019/5/17</Card.Meta>
              <Card.Description>
                <Button>
                  <Link to="/achievement/4">詳細</Link>
                </Button>
              </Card.Description>
            </Card.Content>
          </Card>
        </Wrapper>
      </Container>
    </>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

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
