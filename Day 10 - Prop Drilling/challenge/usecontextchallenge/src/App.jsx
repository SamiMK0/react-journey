import UpdateUser from "./UpdateUser";
import { UserProvider } from "./UserContext";
import UserProfile from "./UserProfile";


export default function App(){
  return(
    <UserProvider>
      <UserProfile />
      <UpdateUser/>
    </UserProvider>
  )
}