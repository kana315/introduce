import React from "react";
import { Header, Image, Segment } from "semantic-ui-react";
import styled from "styled-components";

const DefaultImage = () => (
  <Image
    src="https://react.semantic-ui.com/images/wireframe/image.png"
    size="medium"
    disabled
  />
);

const Child: React.FC<{ match: any }> = ({ match }) => {
  return (
    <Container>
      <Header as="h1" dividing>
        Reactタイトルタイトルタイトルタイトルタイトルタイトル
      </Header>
      <DefaultImage />
      <Segment padded>
        React では JavaScript オブジェクトで DOM
        と同じ構造のノードツリーを再現しておき、一連の処理結果の最終的な差分だけを元の
        DOM
        に書き戻すようにしたことで、フロントエンド開発者が何も考えなくてもそれらのオーバーヘッドを最小限に抑えてくれるようになった。
        React では JavaScript オブジェクトで
        ノードツリーを再現しておき、一連の処理結果の最終的な差分だけを元の DOM
        に書き戻すようにしたことで、フロントエンド開発者が何も考えなくてもそれらのオーバーヘッドを最小限に抑えてくれるようになった。
        に書き戻すようにしたことで、フロントエンド開発者が何も考えなくてもそれらのオーバーヘッドを最小限に抑えてくれるようになった。
      </Segment>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

export default Child;
