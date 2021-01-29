import "tailwindcss/tailwind.css"
import Layout from 'components/Layout'

function MyApp({ Component, pageProps }): JSX.Element {
  return <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
