import React from "react"
import style from "./style.css"
import MemeCreator from "./MemeCreator"
import Header from "./Header"
import Meme from "./Meme"



function App() {
    return(
        <div>
            <Header />
            <Meme />
            
            <MemeCreator />
        </div>
    )
}

export default App
