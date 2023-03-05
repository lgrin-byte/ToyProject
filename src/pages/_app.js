import Layout from '../components/Layout'
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../styles/globalStyles';
import theme from '../styles/theme';
import { Provider } from "react-redux";
import store from "../store";
import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
// import * as gtag from '../../../.env'

export default function App({ Component, pageProps }) {

    return (
      <>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <GlobalStyle/>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ThemeProvider>
            </Provider>
        </>
    )
}     
