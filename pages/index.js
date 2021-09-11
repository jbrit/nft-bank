import { Button, Row, Col, PageHeader, Upload, message } from "antd";
import Head from "next/head";
import NftTab from "../components/NftTab";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import {useState} from "react";

export default function Home() {
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
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
        <Col style={{paddingTop: "1rem", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={()=>{}}
        onChange={()=>{}}
        style={{width: "100%"}}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      <Button style={{width: "100%"}} type="primary"> Mint </Button>
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
