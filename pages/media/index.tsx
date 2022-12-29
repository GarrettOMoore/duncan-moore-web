import Head from 'next/head'
import { GetStaticProps } from 'next'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
import { getAllImages } from 'lib/api'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MediaNav from 'src/components/MediaNav'

export default function Index({ allImages: { nodes }, preview }) {
    const { pathname } = useRouter();



    return (
        <>
            <Head>
                <title>Duncan Moore | Media</title>
            </Head>
            <div className="h-screen w-full">
                <MediaNav />
                {/* {nodes.map(({ sourceUrl, slug }) => {
                    if (sourceUrl) {
                        return (
                            <div className="min-2">
                                <Image src={sourceUrl} width={500} height={500} alt={slug} />
                            </div>
                        )
                    }
                }
                )} */}
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allImages = await getAllImages()

    return {
        props: { allImages, preview },
        revalidate: 10,
    }
}
