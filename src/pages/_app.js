import Layout from '../components/Layout'
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../styles/globalStyles';
import theme from '../styles/theme';
import { Provider } from "react-redux";
import store from "../store";
import firebase from 'firebase/app';

// import 'firebase/analytics';
import 'firebase/firestore';
export default function App({ Component, pageProps }) {

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
