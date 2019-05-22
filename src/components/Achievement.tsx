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

type Achievement = {
  achieveTitle: string;
  imageUrl?: string;
  date: string;
  url: string;
};

type Props = {
  title: string;
  subTitle: string;
  achievements: Achievement[];
};

const DefaultImage = () => (
  <Image
    src="https://react.semantic-ui.com/images/wireframe/image.png"
    size="medium"
    disabled
  />
);

const AchieveImage: React.FC<{ imageUrl?: string }> = props => {
  console.log(props);

  return typeof props.imageUrl !== "undefined" ? (
    <Image src={props.imageUrl} size="medium" />
  ) : (
    <DefaultImage />
  );
};

const CardComp: React.FC<Achievement> = ({
  achieveTitle,
  imageUrl,
  date,
  url
}) => {
  return (
    <Card>
      <AchieveImage imageUrl={imageUrl} />
      <Card.Content>
        <Card.Header>{achieveTitle}</Card.Header>
        <Card.Meta>{date}</Card.Meta>
        <Card.Description>
          <Button>
            <Link to={url}>詳細</Link>
          </Button>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

const Achievement: React.FC<Props> = ({ title, subTitle, achievements }) => {
  return (
    <>
      <Title>
        <Header as="h1" icon>
          <Icon name="chess knight" />
          {title}
          <Header.Subheader>---{subTitle}---</Header.Subheader>
        </Header>
      </Title>
      <Container>
        <Wrapper>
          {achievements.map((v, i) => (
            <CardComp key={`card-comp-${i}`} {...v} />
          ))}
          {achievements.map((v, i) => (
            <CardComp key={`card-comp2-${i}`} {...v} />
          ))}
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
