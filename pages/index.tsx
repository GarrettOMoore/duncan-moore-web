import React, { useEffect } from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
import Image from 'next/image'
import { getLandingContent, getBackgroundImage } from 'lib/api'
import snareBg from 'public/snare-bg.png'

export default function Index({ landingContent: { nodes }, bgImg: { mediaItem } }) {
  console.log({ mediaItem })
  return (
    <>
      <Head>
        <title className="">Duncan Moore | Drums</title>
      </Head>
      <div className="container sm:mx-auto md:mx-auto h-screen w-full flex justify-center md:m-3 relative overflow-hidden md:rounded-3x shadow-2xl" >
        <Image src={snareBg} alt={mediaItem.slug} quality={100} fill style={{ objectFit: "cover", filter: "contrast(.35)" }} />
        <p className="tracking-widest absolute text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-quicksand text-slate-50 m-3 mx-18 mt-12 h-full whitespace-normal opacity-80 lg:mt-20 xl:mt-36">Duncan Moore is a San Diego based drummer and percussionist. <br />
          <br />
          He works regularly in Southern California recording studios and performs with jazz, latin, rock and R&B bands.</p>
        {/* <div className="w-full m-3 h-full border-2 relative" >
        </div> */}
        {/* <div className="flex flex-col space-y-4 items-center justify-center m-6" dangerouslySetInnerHTML={{ __html: nodes[0]?.content }} /> */}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const landingContent = await getLandingContent();
  const bgImg = await getBackgroundImage();
  return {
    props: { landingContent, bgImg, preview },
    revalidate: 10,
  }
}