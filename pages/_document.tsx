import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>

      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin='true'/>
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:wght@500;600;700;800;900&family=Roboto+Slab:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
       />

      <body>
        <Main />
        <NextScript />
      </body>
      <script
        src="https://cdn.socket.io/4.4.0/socket.io.min.js"
        integrity="sha384-1fOn6VtTq3PWwfsOrk45LnYcGosJwzMHv+Xh/Jx5303FVOXzEnw0EpLv30mtjmlj"
        crossOrigin="anonymous"
      />
      <script src="https://api.kato.studio/k-an/pub/kato-analytics.js" />
    </Html>
  )
}
