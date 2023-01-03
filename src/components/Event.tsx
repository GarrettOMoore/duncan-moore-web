import React from 'react';
import Moment from 'react-moment';
import DateIcon from 'src/components/DateIcon'

const Event = ({ event }) => {
    const { start_date, end_date, slug, id, title, website = "", venue: venueMain } = event;
    const { venue, address, city, date, stateprovince } = venueMain;

    return (
        <div className="flex flex-col items-center md:flex-row space-y-3 md: space-x-3 ">
            <DateIcon date={start_date} />
            <div className="flex flex-col w-full ">
                <a href={`/calendar/${id}`}>
                    <p className="text-1xl md:text-3xl">{title}</p>
                </a>
                {/* TODO find a better way to parse html entities */}
                <a href={website}>
                    <p className="text-1xl md:text-2xl">{React.createElement("div", { dangerouslySetInnerHTML: { __html: venue } })}</p>
                </a>
                <div className="flex flex-row md:space-x-2">
                    <Moment format="LT" date={start_date} />
                    <p>-</p>
                    <Moment format="LT" date={end_date} />
                </div>
                <p>{address}</p>
                <p>{`${city}, ${stateprovince}`}</p>
            </div>
        </div>

    )
}

export default Event