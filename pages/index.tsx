import React, { useEffect } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { getLandingContent } from 'lib/api'
import snareBg from 'public/snare-bg.png'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default function Index({ landingContent: { nodes } }) {
  console.log({ nodes })

  const AboutDocumentText = ReactHtmlParser(nodes[0]?.content, {
    transform: (node, index) => {
      const { type, name } = node;
      if (type === 'tag' && name === 'p' && node.children[0].data) {
        return convertNodeToElement(node.children[0], index)
      }
    }
  });
  // TODO - find a cleaner way to parse the text out of this. Possibly update source content to remove unneeded text.
  const aboutText = AboutDocumentText[1];

  return (
    <>
      <Head>
        <title className="">Duncan Moore | Drums</title>
      </Head>
      <div className="container h-screen w-full flex justify-center relative overflow-hidden shadow-2xl sm:mx-auto md:mx-auto md:m-3 md:rounded-3x" >
        <Image src={snareBg} alt="Snare drum photo by Lasse Moller" quality={100} fill style={{ objectFit: "cover", filter: "contrast(.35)" }} />
        <p className="tracking-widest absolute translate-y-1/2 short:transform-none text-2xl h-auto mx-18 mt-4 whitespace-normal opacity-80 font-quicksand text-slate-50 m-3 sm:text-1xl md:text-2xl md:mt-4 lg:text-5xl lg:mt-12 xl:mt-28 xl:text-7xl">{aboutText}</p>
      </div>
      <p className="text-sm text-center m-2">Photo by <a href="https://unsplash.com/@lalasse">Lasse Møller</a></p>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const landingContent = await getLandingContent();
  return {
    props: { landingContent, preview },
    revalidate: 10,
  }
}