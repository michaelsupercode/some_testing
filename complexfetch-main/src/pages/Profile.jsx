import { useParams } from "react-router-dom"

const Profile = () => {
    const { dragonball } = useParams()

    return (
        <main>
            <h3>Hallo {dragonball} ❤️</h3>
        </main>
    )
}

export default Profile