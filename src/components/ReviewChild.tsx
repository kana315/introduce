import React from "react";
import { Header, Segment, Image } from "semantic-ui-react";
import styled from "styled-components";

type Props = {
  title: string;
  date: string;
  imageUrl?: string;
  review: string;
};

const DefaultImage = () => (
  <Image
    src="https://react.semantic-ui.com/images/wireframe/image.png"
    size="medium"
    disabled
  />
);

const ReviewImage: React.FC<{ imageUrl?: string }> = ({ imageUrl }) =>
  typeof imageUrl !== "undefined" ? (
    <Image src={imageUrl} size="medium" />
  ) : (
    <DefaultImage />
  );

const Child: React.FC<Props> = ({ title, date, imageUrl, review }) => {
  return (
    <>
      <Container>
        <Header as="h1">
          {title}
          <Header.Subheader>{date}</Header.Subheader>
        </Header>
        <ReviewImage imageUrl={imageUrl} />
        <Segment padded>{review}</Segment>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default Child;
