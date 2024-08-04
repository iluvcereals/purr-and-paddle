import { useEffect, useState } from 'react';
import moment from 'moment';

function DateAndTime() {
    const [dateAndTime, setDateAndTime] = useState(moment());
    useEffect(() => {
        const interval = setInterval(() => {
            setDateAndTime(moment());
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="px-4 flex w-64">
            <p className="self-center">{dateAndTime.format('YYYY-MM-DD HH:mm:ss')}</p>
        </div>
    );
}

export default DateAndTime;
