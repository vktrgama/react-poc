import './timeline.scss';
import timelineEvents from './timeline.json';


const TimeLine = () => {
    const events = timelineEvents.data.event;

    const eventItems = events.reverse().map((e, i) => {
        const directionClass = i % 2 ? 'direction-r' : 'direction-l';
        const period = e.end ? `${e.start}-${e.end}` : e.start;
        return (
            <li>
                <div className={directionClass}>
                    <div className="flag-wrapper">
                        <span className="hexa"></span>
                        <span className="flag">{e.title}</span>
                        <span className="time-wrapper"><span className="time">{period}</span></span>
                    </div>
                    <div className="desc">{e.text}</div>
                </div>
            </li>
        )
    });

 return (
    <ul class="timeline">
        {eventItems}
    </ul>
 )
}

export default TimeLine;