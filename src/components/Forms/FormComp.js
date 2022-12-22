import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../api";
import FileBase64 from "react-file-base64";

const FormComp = ({ currentID, setCurrentID }) => {
  const post = useSelector((state) =>
    currentID ? state.posts.find((p) => p._id === currentID) : null
  );

  const [postData, setPostData] = useState({
    company_name: "",
    email: "",
    website: "",
    details: "",
    file: "",
  });

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const dispatch = useDispatch();

  const clear = () => {
    setCurrentID(null);

    setPostData({
      company_name: "",
      email: "",
      website: "",
      details: "",
      file: "",
    });
  };

  const handleSubmit = () => {
    if (currentID) {
      dispatch(updatePost(currentID, postData));
    } else {
      dispatch(createPost(postData));
    }
  };

  const onfinish = () => {
    setPostData({
      company_name: "",
      email: "",
      website: "",
      details: "",
      file: "",
    });
  };

  return (
    <Form
      onFinish={onfinish}
      style={{
        backgroundColor: "white",
        paddingTop: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        borderRadius: "10px",
      }}
    >
      <h1 style={{ marginTop: 0 }}>
        {currentID ? "Edit data" : "List Your Company"}
      </h1>

      <Input
        name="company_name"
        value={postData.company_name}
        onChange={(e) =>
          setPostData({ ...postData, company_name: e.target.value })
        }
        placeholder="Company Name"
        style={{ width: "90%", margin: "10px 0" }}
        required
      />

      <Input
        name="email"
        value={postData.email}
        onChange={(e) => setPostData({ ...postData, email: e.target.value })}
        placeholder="Email"
        style={{ width: "90%", margin: "10px 0" }}
      />

      <Input
        name="website"
        value={postData.website}
        onChange={(e) => setPostData({ ...postData, website: e.target.value })}
        placeholder="website link"
        style={{ width: "90%", margin: "10px 0" }}
      />

      <Input.TextArea
        name="details"
        value={postData.details}
        onChange={(e) => {
          setPostData({ ...postData, details: e.target.value });
        }}
        showCount
        maxLength={10000}
        style={{
          width: "90%",
          height: 120,
          resize: "none ",
          margin: "15px 0",
        }}
        placeholder="company  discription"
      />

      <div>
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => {
            console.log(base64);
            setPostData({ ...postData, file: base64 });
          }}
        />
      </div>

      <Button
        type="primary"
        htmlType="submit"
        onClick={handleSubmit}
        style={{ width: "90%", margin: "15px 0 10px" }}
      >
        Submit
      </Button>

      <Button
        onClick={clear}
        type="primary"
        htmlType="submit"
        style={{ backgroundColor: "red", width: "90%", margin: "10px 0 30px" }}
      >
        clear
      </Button>
    </Form>
  );
};
export default FormComp;
