import Head from 'next/head'
import { GetStaticProps } from 'next'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
import { getAllImages } from 'lib/api'
import Image from 'next/image'

export default function Index({ allImages: { nodes }, preview }) {
    return (
        <>
            <Head>
                <title>Duncan Moore | Media</title>
            </Head>
            <main>
                {nodes.map(({ sourceUrl, slug }) => {
                    if (sourceUrl) {
                        return (
                            <div className="min-2">
                                <Image src={sourceUrl} width={500} height={500} alt={slug} />
                            </div>
                        )
                    }
                }
                )}
            </main>
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
