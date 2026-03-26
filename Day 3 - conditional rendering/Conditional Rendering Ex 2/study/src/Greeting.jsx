

export default function Greeting({timeOfDay}){
    function getTimeOfDay(timeOfDay){
        return timeOfDay == "morning" ? "Good morning" : "Good afternoon";
    }
    return(
        <div>
            <h3>{getTimeOfDay(timeOfDay)}</h3>
        </div>
    )
}