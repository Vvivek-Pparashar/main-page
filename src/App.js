import React, { useEffect, useState } from "react";
import { Col, Row, Layout } from "antd";
import HeaderComp from "./components/Header/HeaderComp";
import FormComp from "./components/Forms/FormComp";
import PostsComp from "./components/Posts/PostsComp";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./actions/action";
import "./App.css";

const { Content } = Layout;


const App = () => {

  const [currentID, setCurrentID] = useState(null);
  const [changeState, setChangeState] = useState(0);
  const dispatch = useDispatch();

  console.log(changeState);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentID, dispatch, changeState]);

  return (
    <Layout>
      <HeaderComp />
      <Content className="content">
        <Row style={{ width: "98.5vw", position: "relative" }}>
          <Col
            span={14}
            style={{ height: "100%", minHeight: "100vh", padding: "40px 0" }}
          >
            <PostsComp
              setCurrentID={setCurrentID}
              setChangeState={setChangeState}
              changeState={changeState}
            />
          </Col>
          <Col
            span={7}
            offset={2}
            style={{ height: "30vw", position: "sticky", top: "90px" }}
          >
            <FormComp
              currentID={currentID}
              setCurrentID={setCurrentID}
              setChangeState={setChangeState}
              changeState={changeState}
            />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default App;
