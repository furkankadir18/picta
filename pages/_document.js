import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <link rel='stylesheet' href="testo"/>
      </Head>
      <body>
        <Main />
        <NextScript>
          <script src="derdim-buyuk.js"></script>
        </NextScript>
      </body>
    </Html>
  )
}
