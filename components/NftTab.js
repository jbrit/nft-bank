import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const NftTab = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="All NFTs" key="1">
        All NFTs Content
      </TabPane>
      <TabPane tab="My NFTs" key="2">
        My NFTs Content
      </TabPane>
    </Tabs>
  );
};

export default NftTab;