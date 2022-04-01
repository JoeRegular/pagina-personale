import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function MyDocument () {
  return (
    <Html lang="it">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Monoton&family=Space+Mono&display=swap" rel="stylesheet" />
        {/* <Script src="" /> */}
        {/* Qui sopra puoi inserire script esterni */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}