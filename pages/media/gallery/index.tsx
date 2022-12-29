import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAllImages } from 'lib/api'
import Image from 'next/image'
import MediaNav from 'src/components/MediaNav'
import EmblaCarousel from 'src/components/EmblaCarousel'
export default function Index({ allImages: { nodes } }) {
    return (
        <>
            <Head>
                <title>Duncan Moore | Gallery</title>
            </Head>
            <div className="container mx-auto h-screen w-full">
                <MediaNav />
                <section className="sandbox__carousel">
                    <EmblaCarousel slides={nodes} options={{}} />
                </section>

            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    console.log("fetching events...")
    const allImages = await getAllImages()

    return {
        props: { allImages, preview },
        revalidate: 10,
    }
}
