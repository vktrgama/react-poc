import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Event from '../Event';
import { DAY_WITH, MIDDLE_MONTH_DATE, monthNames } from '../constants'
import './timeline.css';

function Timeline(props) {
    let { events } = props;
    let [eventMonths, setEventMonths] = useState([]);

    useEffect( () => {
        calculateMonths();
      }, []);

    const firstEventDate = new Date(events[0].start);
    const startTimelineDate = new Date(firstEventDate.getFullYear(), firstEventDate.getMonth(), 1)

    const calculateMonths = () => {
        const firstEventDate = new Date(events[0].start);
        const lastEventDate = new Date(events[events.length-1].end) ;

        const monthStart = firstEventDate.getMonth();
        const monthEnd = lastEventDate.getMonth();
        const yearStart = firstEventDate.getFullYear();
        const yearEnd = lastEventDate.getFullYear();
        const numberOfmonths = (yearEnd - yearStart) * 12 + (monthEnd - monthStart) + 1;
        
        let months = [];
        for(let i = monthStart; i <= numberOfmonths; i++){
            const firstDayOfMonth = new Date(yearStart, i, 1); // use first year
            const lastDayOfMonth = new Date(yearStart, i+1, 0); // use first year

            let timeDiff  = lastDayOfMonth.getTime() - firstDayOfMonth.getTime();
            const monthWidth = Math.trunc(timeDiff / (1000 * 3600 * 24) * DAY_WITH) + DAY_WITH;
            
            timeDiff = firstDayOfMonth.getTime() - startTimelineDate.getTime();
            const leftPosition = Math.trunc(timeDiff / (1000 * 3600 * 24) * DAY_WITH);

            months.push({ name: monthNames[i],
                start: firstDayOfMonth.getDate(), 
                end: lastDayOfMonth.getDate(), 
                width: monthWidth,
                left: leftPosition
            });
        }
        setEventMonths(months);
    }

    const eventList = (
        events.map((e, i) => {
            return <Event event={e} startTimelineDate={startTimelineDate} key={e.id} position={i} />
        })
    )

    const monthReference = eventMonths.map(month => (
        <div className="month-block" key={month.name} style={{width: month.width, left: month.left }}>
                <div className="month-title">{month.name}</div>
                <div className="month-dates">
                    <div>{month.start}</div>
                    <div>{MIDDLE_MONTH_DATE}</div>
                    <div>{month.end}</div>
                </div>
            </div>
    ))

    return (
        // TODO: scrolling div for now, implement some scroll arrows
        <div className="timeline-container">
            {monthReference}
            <div className="event-list">
                {eventList}
            </div>
        </div>
        )
}

Timeline.propTypes = {
    events: PropTypes.array.isRequired
  };

export default Timeline;
