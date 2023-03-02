import React from 'react'
import Head from 'next/head'
import Footer from './footer/Footer'


export default function Layout({children}) {
    return (
        <>
            <Head>
                <script defer src="https://cdn.swygbro.com/public/widget/swyg-widget.js"></script>
                <title>무슨노래듣고계세요?</title>
                <meta name="og:site_name" content="무슨노래듣고계세요?" />
                <meta name="og:title" content="무슨노래듣고계세요?" />
                <meta name="og:type" content="website" />
                <meta name="og:description" content="시대별로 (1990년대, 2000년대 등) 유행했던 노래의 전주를 들려주면 사용자가 제한 시간안에 노래 가수와 제목을 맞히고 최종적으로 맞힌 개수까지 알려주는 게임입니다.)"/>
                <meta name="og:url" content="https://www.swygbro.com" /> 
                <meta name="og:image" content="/public/image.png" />
            </Head>
            <div>
                {children}
            </div>
                <Footer/>

        </>
    )
}
