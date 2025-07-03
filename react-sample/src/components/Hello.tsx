import React from "react"

const Hello = () => {
    const onClick = () => {
        alert("Hello Tiny Tank!")
    }

    const text = "Hello, React!"

    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

export default Hello