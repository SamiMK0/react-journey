import Person from "./Person";
import Product from "./Product";



export default function App(){
  return(
    <div>
      <Person name = "Sami" age = {22} />
      <Product name = "Labtob" price = {799}/>
    </div>
  )
}