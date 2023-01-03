import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react';
import Event from 'src/components/Event'

export default function Index({ events }) {

    return (
        <>
            <Head>
                <title>Duncan Moore | Calendar</title>
            </Head>
            <div className="container mx-auto h-screen w-full">
                {/* <div className="flex flex-col items-center justify-center space-y-3"> */}
                <p className="text-center text-3xl m-3">Upcoming</p>
                <div className="flex flex-col space-y-6 m-6">

                    {events.map((e) => (
                        <Event event={e} />
                    ))}
                </div>
                {/* </div> */}
            </div>
        </>
    )
}

export async function getStaticProps({ params }) {
    const res = await fetch("https://duncanmoore.net/wp-json/tribe/events/v1/events/", { method: 'GET' });
    const { events } = await res.json()

    return { props: { events } }
}
