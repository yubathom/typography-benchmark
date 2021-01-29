import Head from 'next/head'

import "tailwindcss/tailwind.css"
import Layout from 'components/Layout'

function MyApp({ Component, pageProps }): JSX.Element {
  return <>
    <Head>
      <title>Price Shoes | Typography benchmark</title>
      <meta name="description" content="Price Shoes order scheduler service"/>
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
