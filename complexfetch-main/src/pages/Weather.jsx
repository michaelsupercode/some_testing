import { _, useState } from "react"

const Weather = () => {

    const [city, setCity] = useState('')
    const [weather, setWeather] = useState(null)
    const key = '15e3a811be69f8c3af5550b02ba088d7'
    const limit = 1

    const checkWeather = () => {
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},DE&limit=${limit}&appid=${key}`)
            .then(res => res.json())
            .then(data => {
                const lon = data[0].lon
                const lat = data[0].lat
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`)
                    .then(res => res.json())
                    .then(data => setWeather(data))
            })
    }

    return (
        <main>
            <div>
                <input type={'text'} placeholder='Stadt' onChange={(e) => setCity(e.target.value)} />
                <button onClick={checkWeather}>aktuelle Temperatur</button>
            </div>
            {weather &&
                <h1>{weather.main.temp}</h1>
            }
        </main>
    )
}

export default Weather