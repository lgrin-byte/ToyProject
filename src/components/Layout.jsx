import React from 'react'
import Head from 'next/head'
import Footer from './footer/Footer'


export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>무슨노래듣고계세요?</title>
<meta property="og:title" content="기록하는 삶📚" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://jiineeee.tistory.com/" />
<meta property="og:image" content="https://i1.daumcdn.net/thumb/C264x200/?fname=https://tistory2.daumcdn.net/tistory/3454287/skinCover/199033df9674456f9121c367ba463d76" />
            </Head>
            <div>
                {children}
            </div>
                <Footer/>

        </>
    )
}
