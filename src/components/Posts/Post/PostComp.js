import React from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card, notification } from "antd";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/action";

const { Meta } = Card;

const PostComp = ({ post, setCurrentID, setChangeState, changeState }) => {
  const dispatch = useDispatch();
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement) => {
    notification.success({
      message: `Post Deleted successfully`,
      description: "Please Press F5 to refresh the page",
      placement,
      duration: 0,
    });
  };

  const handleClick = () => {
    setCurrentID(post._id);
  };

  return (
    <>
      {contextHolder}
      <Card
        style={{
          width: "100%",
        }}
        cover={
          <img
            alt="example"
            src={post.file}
            style={{ width: "100%", height: "105px", padding: "0 20px" }}
          />
        }
        actions={[
          <DeleteOutlined
            key="delete"
            onClick={() => {
              openNotification("top");
              setChangeState(changeState + 1);
              dispatch(deletePost(post._id));
            }}
          />,
          <EditOutlined key="edit" onClick={handleClick} />,
        ]}
      >
        <Meta
          title={post.company_name}
          description={
            post.details.length > 200
              ? post.details.slice(0, 220) + ` Read More...`
              : post.details + ` Read More...`
          }
          style={{
            minHeight: "180px",
          }}
        />

        <a href={post.website} target="_blank" rel="noopener noreferrer">
          <p>visit {post.company_name}</p>
        </a>
      </Card>
    </>
  );
};
export default PostComp;
