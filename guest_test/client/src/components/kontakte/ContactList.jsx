import { useEffect, useState } from "react"
import ContactItem from "./ContactItem"
import ContactForm from "./ContactForm"

export default function ContactList() {
    const [guests, setGuests] = useState([])
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetch('http://localhost:8888/api/guests')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(data => setGuests(data))
            .catch(err => console.log(err))
    }, [refresh])
    return (
        <>
            <h1>Meine Gäste</h1>
            <ContactForm refresh={setRefresh} />
            {guests.map((item, key) => <ContactItem guest={item} key={key} />)}
        </>


    )
} 