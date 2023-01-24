import React from 'react'
import Head from 'next/head'

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>무슨노래듣고계세요?</title>
                <meta  />
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}
