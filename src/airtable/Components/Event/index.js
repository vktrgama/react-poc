import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { DAY_WITH, INPUT_RELATIVE_WIDTH, SYMMETRIC_PADDING} from '../constants'
import './event.css'

function Event(props) {
    let {event, startTimelineDate, position} = props;
    let [eventWidth, setEventWidth] = useState(DAY_WITH);
    let [eventPosition, setEventPosition] = useState(0);
    let [eventName, setEventName] = useState(event.name);
    let [showInput, setShowInput] = useState(false);

    useEffect( () => {
        setEventWidth(calcEventWidth(event))
        setEventPosition(calcEventPosition(event))
      }, []);

    const calcEventWidth = (eventData) => {
        if (!eventData.start || !eventData.start) return 0;
        const start = new Date(eventData.start);
        const end = new Date(eventData.end);
        const eventWidth = Math.trunc(end.getTime() - start.getTime()) / (1000 * 3600 * 24) * DAY_WITH
        return (eventWidth < DAY_WITH) ? DAY_WITH : eventWidth;
    }

    const calcEventPosition = (eventData) => {
        let leftPosition = DAY_WITH;
        if (startTimelineDate && eventData.start) {
            const timeDiff = Math.trunc(new Date(eventData.start).getTime() - startTimelineDate.getTime());
            leftPosition = timeDiff / (1000 * 3600 * 24) * DAY_WITH
        }
        return leftPosition;
    }

    const updateEventName = (e) => {
        setEventName(e.target.value);
    }

    const toggleInput = () => {
        if (eventName) {
            setShowInput(!showInput)
        } else {
            setEventName("Can't leave blank");
        }
    }

    const inputWidth = (eventName.length * INPUT_RELATIVE_WIDTH);
    // If event width is smaller than event's name, resize to text and componesate style padding.
    const eventFinalWidth = eventWidth < inputWidth ? inputWidth + SYMMETRIC_PADDING : eventWidth;

    const nameInput = (
        <div className='event-input'>
            <input type="text" className='event-input-name' style={{width: inputWidth}} 
                value={eventName} 
                onClick={(e => e.preventDefault)} 
                onChange={updateEventName} 
                onKeyPress={e => {e.key === 'Enter' ? toggleInput() : null}}/>
            <button className='event-input-close' onClick={toggleInput}>close</button>
        </div>
    )

    // overlap events over 3 layers
    const itemClass = position % 3 === 0 ? 'event-item-top' 
        : position % 3 === 1 ? 'event-item-mid'
        : 'event-item-bottom';

    return (
        <div className={cx('event-item', itemClass)} style={{width: eventFinalWidth, left: eventPosition }}>
            <div className='event-text'>
                <div className='event-name' onClick={toggleInput}>{eventName}</div>
                <div className='event-details'>{event.start} - {event.end}</div>
                {showInput && nameInput}
            </div>
        </div>)
}

Event.propTypes = {
    event: PropTypes.object,
    startTimelineDate: PropTypes.object,
    position: PropTypes.number
  };

export default Event;
