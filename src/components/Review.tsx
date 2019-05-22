import React from "react";
import { Card as SemanticCard, Header, Icon, Image } from "semantic-ui-react";
import styled from "styled-components";
import { Link } from "react-router-dom";

type Review = {
  url: string;
  reviewTitle: string;
  imageUrl?: string;
  date: string;
  description: string;
};

type Props = {
  title: string;
  subTitle: string;
  reviews: Review[];
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

const ReviewCard: React.FC<Review> = ({
  url,
  reviewTitle,
  imageUrl,
  date,
  description
}) => {
  return (
    <Card>
      <ReviewImage imageUrl={imageUrl} />
      <Card.Content>
        <Card.Header>
          <Link to={url}>{reviewTitle}</Link>
        </Card.Header>
        <Card.Meta>{date}</Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
    </Card>
  );
};

const Review: React.FC<Props> = ({ title, subTitle, reviews }) => {
  return (
    <>
      <Title>
        <Header as="h1" icon>
          <Icon name="chess rook" />
          {title}
          <Header.Subheader>---{subTitle}---</Header.Subheader>
        </Header>
      </Title>
      <Wrapper>
        {reviews.map((v, i) => {
          return <ReviewCard key={i} {...v} />;
        })}
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
