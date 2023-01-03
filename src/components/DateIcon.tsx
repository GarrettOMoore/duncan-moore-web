import Moment from 'react-moment';


const DateIcon = ({ date }) => {

    console.log({ date })
    return (
        <div className="flex items-center justify-between">
            <div className="bg-stone-200 border-2 border-black h-auto md:h-full flex items-center justify-between shadow-md">
                <p className="text-2xl md:text-5xl py-3 px-2">
                    <Moment format="MM/DD" date={date} />
                </p>
            </div>
        </div>

    )
}

export default DateIcon