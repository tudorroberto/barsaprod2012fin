import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <title>Barsa Prod 2012</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
