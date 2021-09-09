import { Button, PageHeader } from 'antd'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NFT BAnk</title>
        <meta name="description" content="NFT BAnk dApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageHeader
      backIcon={false}
      title="NFT Bank"
      subTitle="Upload and Mint Images"
      extra={[
        <Button key="1" type="primary">
          Connect
        </Button>,
      ]}
    />
      </div>
  )
}
