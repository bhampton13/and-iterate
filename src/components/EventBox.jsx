import React, { useState, useEffect } from 'react';
import Auth from '../services/AuthService';
import EventCarousel from '../components/EventCarousel';

const TeamBox = () => {
    const [events, setEvents] = useState([]);

    async function fetchData() {
        const res = await Auth.calendarFunction();
        console.log(JSON.stringify(res));
        setEvents(res);
    }

    useEffect(() => {
        fetchData();
        console.log('hey', events);
    }, []);

    return (
        <div>
            <span>
                {' '}
                <EventCarousel events={events} />{' '}
            </span>
        </div>
    );
};

export default TeamBox;
