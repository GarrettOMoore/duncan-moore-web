import Head from 'next/head'
import { GetStaticProps } from 'next'


export default function Index() {
    return (
        <>
            <Head>
                <title>Duncan Moore | Calendar</title>
            </Head>
            <main>
                Events here...
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    console.log("fetching events...")
    // const allImages = await getAllImages()

    return {
        props: { allEvents: [], preview },
        revalidate: 10,
    }
}
