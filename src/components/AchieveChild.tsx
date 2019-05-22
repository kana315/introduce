import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import styled from "styled-components";

type Props = {
  title: string;
  image?: string;
  description: string;
};

const DefaultImage = () => (
  <Image
    src="https://react.semantic-ui.com/images/wireframe/image.png"
    size="medium"
    disabled
  />
);

const Child: React.FC<Props> = ({ title, description }) => {
  return (
    <Container>
      <Header as="h1" dividing>
        {title}
      </Header>
      <DefaultImage />
      <Segment padded>{description}</Segment>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default Child;
