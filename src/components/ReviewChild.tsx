import React from "react";
import { Header, Segment } from "semantic-ui-react";
import styled from "styled-components";

const Child: React.FC<{ match: any }> = ({ match }) => {
  return (
    <>
      <Container>
        <Header as="h1" dividing>
          オブジェクト思考でなぜつくるのかオブジェクト思考でなぜつくるのかオブジェクト思考でなぜつくるのか
        </Header>

        <Segment padded>
          改訂第2版では、すべての文章を細かく見直して修正して、追加のトピックを記述したことに加えて、
          多くの技術者の注目を集めている関数型言語の基本的な仕組みと思想を解説する改訂第2版では、すべての文章を細かく見直して修正して、追加のトピックを記述したことに加えて、
          多くの技術者の注目を集めている関数型言語の基本的な仕組みと思想を解説する
          改訂第2版では、すべての文章を細かく見直して修正して、追加のトピックを記述したことに加えて、
          多くの技術者の注目を集めている関数型言語の基本的な仕組みと思想を解説する
          改訂第2版では、すべての文章を細かく見直して修正して、追加のトピックを記述したことに加えて、
          多くの技術者の注目を集めている関数型言語の基本的な仕組みと思想を解説する
        </Segment>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default Child;
