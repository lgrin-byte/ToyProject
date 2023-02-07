import Layout from '../components/Layout'
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../styles/globalStyles';
import theme from '../styles/theme';
import { Provider } from "react-redux";
import store from "../store";

export default function App({ Component, pageProps }) {

    console.log(theme, "?");
    return (
        <>
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
