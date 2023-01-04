import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAboutContent } from 'lib/api'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default function Index({ aboutContent: { nodes } }) {
    const AboutDocument = ReactHtmlParser(nodes[0]?.content);
    return (
        <>
            <Head>
                <title>Duncan Moore | About</title>
            </Head>
            <div className="justify-center">
                <div className="flex flex-col space-y-4 items-center justify-center" >{AboutDocument}</div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const aboutContent = await getAboutContent()
    return {
        props: { aboutContent },
        revalidate: 10,
    }
}
