import React from 'react';

export default function IncommingEvents({ events }) {
    return (
        <div>
            {events.map((event) => {
                return (
                    <div>
                        <div>{event.summary}</div>
                        <div>{event.description}</div>
                        <div>{event.start.dateTime}</div>
                    </div>
                );
            })}
        </div>
    );
}
