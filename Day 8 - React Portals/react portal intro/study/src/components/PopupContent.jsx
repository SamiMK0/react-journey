import { createPortal } from "react-dom";


export default function PopupContent({copied}){
    

    return createPortal(
        <section>
            {
                copied && (
                    <div style={{
                        position:"absolute",bottom:"3rem"
                    }}>
                        Copied to Clipboard
                    </div>
                )
            }
        </section>,
        document.querySelector("#pop-content")
    )
}