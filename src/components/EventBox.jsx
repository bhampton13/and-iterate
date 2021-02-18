import React from 'react';
import Events from '../../resources/data/events.json';
import IncommingEvents from './IncommingEvents';

export default function TeamBox() {
    const calendarEvents = Events.items.map(events => <IncommingEvents events={events} />)
    return (
        <div>
            {calendarEvents}
        </div>)
}
