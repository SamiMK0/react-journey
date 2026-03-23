


const Weather = ({temprature}) => {
    function getTemp(temprature){
        if (temprature<=15){
            return <h3>It is too cold</h3>
        }
        else if(temprature>15 && temprature<25){
            return <h3>It is nice outside</h3>
        }
        else{
            return <h3>It is hot outside</h3>
        }
    }
    
    return(
        <div>
            {getTemp(temprature)}
        </div>
    )
}

export default Weather;