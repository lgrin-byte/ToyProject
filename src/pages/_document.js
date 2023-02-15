import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document'
import App from "./_app";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
        <Html>
            <Head />
            <body>
                <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
                <div id="modal" />
                <Main />
                <NextScript/>
            
            </body>
        </Html>
        );
    }
}
