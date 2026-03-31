import ComponentA from "./components/ComponentA";
import {Name,Age} from "./Context"
export default function App(){
  const name = "sami";
  const age = 22;
  return(
    <div>
      <Name.Provider value={name}>
        <Age.Provider value={age}>
          <ComponentA />
        </Age.Provider>
      </Name.Provider>
    </div>
  )
}