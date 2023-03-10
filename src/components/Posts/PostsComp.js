import React from "react";
import { useSelector } from "react-redux";
import { Spin, Row, Col } from "antd";
import PostComp from "./Post/PostComp";

const PostsComp = ({ setCurrentID, setChangeState, changeState }) => {
  const posts = useSelector((state) => state.posts);

  return !posts.length ? (
    <Spin
      style={{
        marginTop: "50px",
        marginLeft: "50%",
        transform: "translateX(-50%)",
      }}
    />
  ) : (
    <Row gutter={[16, 24]}>
      {posts.map((post) => (
        <Col key={post._id} span={9} offset={2}>
          <PostComp
            post={post}
            setCurrentID={setCurrentID}
            setChangeState={setChangeState}
            changeState={changeState}
          />
        </Col>
      ))}
    </Row>
  );
};

export default PostsComp;
