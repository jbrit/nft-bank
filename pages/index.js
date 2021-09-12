import { Button, Row, Col, PageHeader, Upload, message } from "antd";
import Head from "next/head";
import NftTab from "../components/NftTab";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Home() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
  function beforeUpload(file) {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  }
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl) => {
        setImageUrl(imageUrl);
        setLoading(false);
      });
    }
  };
  function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  return (
    <div>
      <Head>
        <title>NFT Bank</title>
        <meta name="description" content="NFT BAnk dApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader
        backIcon={false}
        className="site-page-header"
        title="NFT Bank"
        subTitle="Upload and Mint Images"
        extra={[
          <Button key="1" type="primary">
            Connect
          </Button>,
        ]}
      />
      <Row justify="center">
        <Col
          style={{
            paddingTop: "1rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action={(file)=>{ 
              console.log(file);
              return file.name;
            }}
            beforeUpload={beforeUpload}
            onChange={handleChange}
            style={{ width: "100%" }}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
          <Button style={{ width: "100%" }} type="primary">
            {" "}
            Mint{" "}
          </Button>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={20}>
          <NftTab />
        </Col>
      </Row>
    </div>
  );
}
