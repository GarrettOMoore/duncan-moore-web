import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAboutContent } from 'lib/api'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default function Index({ aboutContent: { nodes }, preview }) {
    const AboutDocument = ReactHtmlParser(nodes[0]?.content, {
        transform: (node) => {
            console.log({ node })
        }
    });
    return (
        <>
            <Head>
                <title>Duncan Moore | About</title>
            </Head>
            <main className="container mx-auto h-screen p-5">
                <div className="justify-center">
                    <div className="flex flex-col space-y-4 items-center justify-center" >{AboutDocument}</div>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const aboutContent = await getAboutContent()
    return {
        props: { aboutContent, preview },
        revalidate: 10,
    }
}
