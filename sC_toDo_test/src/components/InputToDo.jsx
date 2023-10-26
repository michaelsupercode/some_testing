import { useState } from "react"

const InputToDo = (props) => {
    const [inputToDo, setInputToDo] = useState('')

    const add = () => {
        props.settodo((prev) => [inputToDo,...prev ])
        setInputToDo('')
    }

    return (
        <section className="inputToDo">
            <input type="text" placeholder="..new entry.." value={inputToDo} onChange={(e) => { setInputToDo(e.target.value) }} />
            <button onClick={add}>+</button>
        </section>
    )
}

export default InputToDo