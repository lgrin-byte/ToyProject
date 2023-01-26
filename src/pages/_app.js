import Layout from '../components/Layout'
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../styles/globalStyles';
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {

    console.log(theme, "?");
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    )
}     
