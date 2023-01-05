import Head from 'next/head'
import Event from 'src/components/Event'

export default function Index({ events }) {
    console.log({ events })
    return (
        <>
            <Head>
                <title>Duncan Moore | Calendar</title>
            </Head>
            <p className="text-center text-3xl m-3">Upcoming</p>
            <div className="flex flex-col space-y-6 m-6">

                {events.map((e) => (
                    <Event event={e} />
                ))}
            </div>
        </>
    )
}

export async function getStaticProps({ params }) {
    const res = await fetch("https://duncanmoore.net/wp-json/tribe/events/v1/events/", { method: 'GET' });
    const { events } = await res.json()

    return { props: { events }, revalidate: 10 }
}
