export default function ContactItem({ guest }) {
    return (
        <div >
            <p><span style={{fontWeight: "bold"}}>{guest.vorname+ " " +guest.nachname},</span> <a href={`mailto:${guest.email}`}> {guest.email}</a>, postet:</p>
            <p>{guest.nachricht}</p>
        </div>
    )
}