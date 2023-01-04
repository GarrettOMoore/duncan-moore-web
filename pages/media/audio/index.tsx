import Head from 'next/head'
import { GetStaticProps } from 'next'
import MediaNav from 'src/components/MediaNav'

export default function Index() {
    return (
        <>
            <Head>
                <title>Duncan Moore | Audio</title>
            </Head>
            <MediaNav />
            <div className="flex flex-col items-center justify-center space-y-3">
                <p>Featured recordings on Apple music:</p>
                <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" height="450" style={{ width: "100%", maxWidth: "660px", overflow: "hidden", background: "transparent" }} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/playlist/website/pl.u-Wa5zGsypVax"></iframe>
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
