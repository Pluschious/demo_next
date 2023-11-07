import {useState, useEffect } from "react"
import "./CountButton.css"

export default function CountButton{props} {
    let [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1 * props.mult)
    }
    function rollOverCount() {
        if (count > 10) {
            setCount(0)
        }
    }
    const buttonStyle = {
        backgroundColor: "grey",
        color: "magenta",
        padding: "1rem",
        borderRadius: "10px"
    }
    useEffect(rollOverCount, [count])
    return (
        <div>
            <button onclick={handleClick}>{props.name}</button>
            <div>{count}</div>
        </div>
    )
}