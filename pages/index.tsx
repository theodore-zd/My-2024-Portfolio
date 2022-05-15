import { NextPage } from 'next'
import Head from 'next/head'
import Home from '../page_contents/home'

const homePage: NextPage = () => {
  return <div>
    <Head>
      <title>Theodore Zurek-Dunne</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content="I believe in creating awesome accessible, human-centered experiences and writing clean and concise code. I love a good challenge and learning new technologies."/>
      <meta name="keywords" content='developer, designer, theodore, zurek, zurek-dunne, theodore zurek, theodore zd'/>
      {/* Social Embed */}
      <meta property="og:title" content='Theodore Zurek-Dunne'/>
      <meta property="og:description" content='I believe in creating awesome accessible, human-centered experiences and writing clean and concise code. I love a good challenge and learning new technologies.'/>
      <meta property="og:type" content="website" />
      <meta property="og:image" content='/Kato_CMS.jpg' />
      <meta property="og:url" content='https://zurekcreative.com/'/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="og:site_name" content="Theodore Zurek-Dunne"/>
    </Head>
    <Home />
  </div>
}

export default homePage
