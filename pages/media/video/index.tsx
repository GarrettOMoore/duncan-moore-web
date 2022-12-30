import Head from 'next/head'
import { GetStaticProps } from 'next'
import MediaNav from 'src/components/MediaNav'
import { getVideoContent } from 'lib/api'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default function Index({ videoContent: { nodes }, preview }) {
    const VideoDocument = ReactHtmlParser(nodes[0]?.content, {
        //TODO update this at CMS lvl, this is just parsing out unwanted text from page content
        transform: (node, index) => {
            const { name, type } = node;
            if (type === 'text') return null;
            console.log({ node })
            if (name === 'iframe') {
                if (node.attribs) {
                    node.attribs.class = "w-full aspect-video mx-auto p-3"
                }
                return (

                    <div className="w-auto">
                        {convertNodeToElement(node, index)}
                    </div>
                )
            }
        }
    });
    return (
        <>
            <Head>
                <title>Duncan Moore | Video</title>
            </Head>
            <div className="container mx-auto h-screen w-full">
                <MediaNav />

                <div className="justify-center">
                    {/* HTML string from CMS */}
                    <div className="flex flex-col space-y-4 items-center justify-center">{VideoDocument}</div>
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    console.log("fetching videos...")
    const videoContent = await getVideoContent()
    return {
        props: { videoContent, preview },
        revalidate: 10,
    }
}
