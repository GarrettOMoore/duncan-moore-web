import Head from 'next/head'
import { GetStaticProps } from 'next'
import MediaNav from 'src/components/MediaNav'
import { getVideoContent } from 'lib/api'
import ReactHtmlParser, { convertNodeToElement } from 'react-html-parser';

export default function Index({ videoContent: { nodes } }) {
    const VideoDocument = ReactHtmlParser(nodes[0]?.content, {
        transform: (node, index) => {
            const { name, type } = node;
            // TODO update this at CMS lvl, this is just parsing out unwanted text from page content
            if (type === 'text') return null;
            // Applies responsive Tailwind classes to iframes
            if (name === 'iframe') {
                node.attribs.class = "w-full aspect-video mx-auto p-3"
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
            <MediaNav />
            <div className="justify-center">
                {/* HTML string from CMS */}
                <div className="flex flex-col space-y-4 items-center justify-center">{VideoDocument}</div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const videoContent = await getVideoContent()
    return {
        props: { videoContent },
        revalidate: 10,
    }
}
