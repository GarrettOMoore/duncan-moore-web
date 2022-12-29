import React, { useEffect } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
import Image from 'next/image'
import { getAboutContent } from 'lib/api'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default function Index({ aboutContent: { nodes }, preview }) {
    const AboutDocument = ReactHtmlParser(nodes[0]?.content, {
        transform: (node) => {
            console.log({ node })
        }
    });
    console.log({ AboutDocument })
    return (
        <>
            <Head>
                <title>Duncan Moore | About</title>
            </Head>
            <main className="container mx-auto h-screen p-5">
                <p className="p-3 text-5xl m-3 uppercase opacity-20 text-center lg:text-left">About</p>
                <div className="justify-center">
                    {/* HTML string from CMS */}
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
