import { useParams } from "react-router-dom"

const Profile = () => {
    const { frosch } = useParams()

    return (
        <main>
            <h3>Hallo {frosch} 😎</h3>
        </main>
    )
}

export default Profile