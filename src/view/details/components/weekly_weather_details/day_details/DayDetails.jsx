import './DayDetails.css';

function DayDetails(props) {

    const { data} = props;

    if (!data) {
        return null;
    }
    console.log(data);
    return (
        <div className="dayDetails">
            <span className="day-name">
                {data.date}
            </span>
            <img className="dayWeatherIcon" src={data.day.condition.icon} alt="day-weather-condition-icon" />
            <span className="day-weather-status">
                {data.day.condition.text}
            </span>
            <span className="day-highest-lowest">
                <span className="highest">
                    {data.day.condition.maxtemp_c}
                </span>
                <span className="lowest">
                    {data.day.condition.mintemp_c}
                </span>
            </span>
        </div>

    )
}

export default DayDetails;