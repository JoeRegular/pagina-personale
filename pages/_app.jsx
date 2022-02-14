import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      prima
      <Component {...pageProps} />
      dopo
    </>
  )
}

