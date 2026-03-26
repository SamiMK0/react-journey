
import Greeting from "./Greeting"
import UserStatus from "./UserStatus"
import Weather from "./Weather"


export default function App(){

  return (
    <div>
      <Weather temprature={40}/>
      <UserStatus LoggedIn={true} isAdmin={true}/>
      <Greeting timeOfDay="afternoon"/>
    </div>
  )
}