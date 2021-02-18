import React from 'react';

export default function IncommingEvents(props) {
    return (
        <div>
            <div>{props.events.summary}</div>
            <div>{props.events.start.dateTime}</div>
            <div>{props.events.description}</div>
        </div>
    )
}
