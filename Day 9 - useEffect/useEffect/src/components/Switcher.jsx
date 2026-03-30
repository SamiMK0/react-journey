import { useState } from "react";


const Switcher = () => {
    const [switcher,setSwitcher] = useState(false);

    return(
        <div>
            {
                switcher ? (
                    <span>Dark</span>
                )
                :
                (
                    <span>Light</span>
                )
            }
            <br />

            <input type="text" key={switcher?'dark':'light'}/>
            <button onClick={()=>setSwitcher((switcher)=>!switcher)}>Switch</button>

        </div>
    )
}
export default Switcher;