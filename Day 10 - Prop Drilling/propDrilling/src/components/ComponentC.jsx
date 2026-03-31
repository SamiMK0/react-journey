import { useContext } from "react"
import { Name, Age} from "../Context"
export default function ComponentC(){
    // return(
    //     <Name.Consumer>
    //         {
    //             (name) => (
    //                     <Age.Consumer>
    //                         {
    //                             (age) => (
    //                                 <h1>My name is {name} and I am {age} years old</h1>
    //                             )
    //                         }
    //                     </Age.Consumer>
    //             )
    //         }
    //     </Name.Consumer>
    // )

    // Another cleaner way:
    const name = useContext(Name);
    const age = useContext(Age);
    return(
        <div>
            <h1>My name is {name} and I am {age} years old</h1>
        </div>
    )
}