import React from 'react'
import Head from 'next/head'
import Footer from './footer/Footer'


export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>무슨노래듣고계세요?</title>
                <meta name="og:site_name" content="무슨노래듣고계세요?" />
                <meta name="og:title" content="무슨노래듣고계세요?" />
                <meta name="og:type" content="website" />
                <meta name="og:description" content="웹 페이지 상세 설명 (ex. SWYG에서 다양한 메타 콘텐츠와 개발자를 만나보세요.)"/>
                {/* <meta name="og:url" content="" /> */}
                {/* <meta name="og:image" content="" /> */}
            </Head>
            <div>
                {children}
            </div>
                <Footer/>

        </>
    )
}
