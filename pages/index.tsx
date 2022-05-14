import { NextPage } from 'next'
import Head from 'next/head'
import Home from '../page_contents/home'

const homePage: NextPage = () => {
  return <div>
    <Head>
      <title>Thodore Zurek-Dunne</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="description" content="Thodore Zurek-Dunne"/>
      <meta name="keywords" content=''/>
      {/* Social Embed */}
      <meta property="og:title" content='Thodore Zurek-Dunne'/>
      <meta property="og:description" content='Thodore Zurek-Dunne'/>
      <meta property="og:type" content="website" />
      <meta property="og:image" content='/kato_studio_preview_image.jpg' />
      <meta property="og:url" content='https://kato.studio/'/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="og:site_name" content="Thodore Zurek-Dunne"/>
    </Head>
    <Home />
  </div>
}

export default homePage
