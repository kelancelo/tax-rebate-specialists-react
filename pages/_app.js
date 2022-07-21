import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'
import '../public/wp-content/themes/tax-rebate-specialists/assets/css/normalize.css'
import '../public/wp-content/themes/tax-rebate-specialists/assets/css/webflow.css'
import '../public/wp-content/themes/tax-rebate-specialists/assets/css/tax-rebate-specialists.webflow.css'
import '../public/wp-includes/css/dist/block-library/style.css'
import '../public/wp-content/plugins/affiliates/css/affiliates.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="robots" content="max-image-preview:large" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
