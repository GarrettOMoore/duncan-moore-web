import Head from 'next/head'
import { GetStaticProps } from 'next'
import { getAllImages, getGalleryContent } from 'lib/api'
import Image from 'next/image'
import MediaNav from 'src/components/MediaNav'
import EmblaCarousel from 'src/components/EmblaCarousel'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default function Index({ allImages: { nodes }, galleryContent: { nodes: galleryNodes } }) {
    const sources = [];
    const GalleryDocument = ReactHtmlParser(galleryNodes[0]?.content, {
        transform: ({ type, name, attribs }) => {
            const { src, title } = attribs
            if (type === 'tag' && name === 'img') {
                sources.push({
                    sourceUrl: src, title
                })
            }
        }
    })

    console.log({ sources })
    return (
        <>
            <Head>
                <title>Duncan Moore | Gallery</title>
            </Head>
            <div className="container mx-auto h-screen w-full">
                <MediaNav />
                <section className="sandbox__carousel">
                    <EmblaCarousel slides={sources} options={{}} />
                </section>

            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    console.log("fetching events...")
    const allImages = await getAllImages()
    const galleryContent = await getGalleryContent();
    return {
        props: { allImages, galleryContent, preview },
        revalidate: 10,
    }
}
