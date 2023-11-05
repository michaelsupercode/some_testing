export default function ContactItem({ guest }) {
    return (
        <div >
            <p><span style={{fontWeight: "bold"}}>{guest.vorname + " "}</span><a href={`mailto:${guest.email}`}>{guest.email+ " "}</a>schreibt:</p>
            <p>{guest.nachricht}</p>
        </div>
    )
}