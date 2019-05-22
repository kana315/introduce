import React from "react";
import { Header, Segment } from "semantic-ui-react";
import styled from "styled-components";

type Props = {
  title: string;
  date: string;
  review: string;
};

const Child: React.FC<Props> = ({ title, date, review }) => {
  return (
    <>
      <Container>
        <Header as="h1">
          {title}
          <Header.Subheader>{date}</Header.Subheader>
        </Header>
        <Segment padded>{review}</Segment>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default Child;
