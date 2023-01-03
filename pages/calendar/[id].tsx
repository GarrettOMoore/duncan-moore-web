import React from 'react';
import Moment from 'react-moment'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react';
import Event from 'src/components/Event'
import { stat } from 'fs';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
};

export default function Index({ event, coords }) {
    const { start_date, end_date, slug, id, title, website = "", venue: venueMain } = event;
    const { venue, address, city, date, stateprovince } = venueMain;
    const center = coords[0].geometry.location;
    return (
        <>
            <Head>
                <title>{`Duncan Moore | ${title}`}</title>
            </Head>
            <div className="container mx-auto h-screen w-full my-3 flex flex-col items-center space-y-4">
                <p className="text-center text-3xl"> {title} </p>
                <span className="text-1xl md:text-2xl">{React.createElement("div", { dangerouslySetInnerHTML: { __html: venue } })}</span>
                <div className="flex flex-row md:space-x-2">
                    <Moment format="LT" date={start_date} />
                    <p>-</p>
                    <Moment format="LT" date={end_date} />
                </div>
                <p>{address}</p>
                <p>{`${city}, ${stateprovince}`}</p>
                <LoadScript
                    googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={13}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetch("https://duncanmoore.net/wp-json/tribe/events/v1/events/", { method: 'GET' });
    const { events } = await res.json()
    const paths = events.map(({ id }) => ({
        params: { id: id.toString() },
    }))

    return { paths, fallback: false }
}


export async function getStaticProps({ params }) {
    const res = await fetch(`https://duncanmoore.net/wp-json/tribe/events/v1/events/${params.id}`, { method: 'GET' })
    const event = await res.json();
    let coords;
    if (event.venue) {
        const { address, city, stateprovince } = event.venue;

        const coordRes = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address.replace(" ", "+")}+${city.replace(" ", "+")}+${stateprovince}&key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}`, { method: 'GET' });
        coords = await coordRes.json();
    }

    return { props: { event, coords: coords.results } }
}
