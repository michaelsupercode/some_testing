import { useRef } from "react"

export default function ContactForm(props) {

    const vornameRef = useRef()
    const nachnameRef = useRef()
    const emailRef = useRef()
    const nachrichtRef = useRef()


    function senden() {
        const newguest = {
            vorname: vornameRef.current.value,
            nachname: nachnameRef.current.value,
            email: emailRef.current.value,
            nachricht: nachrichtRef.current.value,
        }

        fetch('http://localhost:8888/api/guests', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newguest)
        }).then(() => {
            props.refresh(prev => !prev)
            vornameRef.current.value = ""
            nachnameRef.current.value = ""
            emailRef.current.value = ""
            nachrichtRef.current.value = ""
        })

    }
    return (
        <div className="contact-form">
            <input ref={vornameRef} type="text" placeholder="Vorname" />
            <input ref={nachnameRef} type="text" placeholder="Nachname" />
            <input ref={emailRef} type="email" placeholder="E-Mail" />
            <textarea ref={nachrichtRef} name="nachricht" id="" cols="30" rows="5" placeholder="Nachricht"></textarea>
            {/* <input ref={nachrichtRef} type="textarea" placeholder="Nachricht" /> */}
            <button onClick={senden}>Abschicken</button>
        </div>
    )
}