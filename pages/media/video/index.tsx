import Head from 'next/head'
import { GetStaticProps } from 'next'
import MediaNav from 'src/components/MediaNav'

export default function Index() {
    return (
        <>
            <Head>
                <title>Duncan Moore | Video</title>
            </Head>
            <div className="container mx-auto h-screen w-full">
                <MediaNav />
                <p>Video Stuff...</p>

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

// export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
//     console.log("fetching events...")
//     // const allImages = await getAllImages()

//     return {
//         props: { allEvents: [], preview },
//         revalidate: 10,
//     }
// }
