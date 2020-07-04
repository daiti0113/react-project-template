
import React from "react"
import ReactDOM from "react-dom"
import {Header} from "./src/components/Header"

const App = () => {
    return (
        <>
            <Header />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector("#app"))