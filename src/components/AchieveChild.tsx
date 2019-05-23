import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import styled from "styled-components";

type Props = {
  title: string;
  date: string;
  imageUrl?: string;
  description: string;
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

const Child: React.FC<Props> = ({ title, date, imageUrl, description }) => {
  return (
    <Container>
      <Header as="h1">
        {title}
        <Header.Subheader>{date}</Header.Subheader>
      </Header>
      <AchieveImage imageUrl={imageUrl} />
      <Segment padded>{description}</Segment>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default Child;
