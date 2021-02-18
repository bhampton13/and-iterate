import React, { useState, useEffect } from 'react';
import Auth from '../services/AuthService';
import IncommingEvents from './IncommingEvents';

/* const TeamBox = ({ props, CheckUser }) => {
    
async function getData(){
    let Events = await Auth.calendarFunction();
    console.log(Events)
    let calendarEvents = Events.map(events => <IncommingEvents events={events} />)
    console.log(JSON.stringify(calendarEvents));
}
    

    return (
        <div>
            <button onClick={getData}>Hello</button>
        </div>)
    
}

export default TeamBox; */

const TeamBox = () => {
    const [events, setEvents] = useState([]);

    async function fetchData() {
        const res = await Auth.calendarFunction();
        console.log(JSON.stringify(res));
        setEvents(res);
    }

    useEffect(() => {
        fetchData();
        console.log(events);
    }, []);

    return (
        <div>
            <span>
                {' '}
                <IncommingEvents events={events} />{' '}
            </span>
        </div>
    );
};
export default TeamBox;
