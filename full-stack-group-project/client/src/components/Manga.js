import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import axios from "axios"

export default function Manga() {
    const [ manga, setmanga ] = useState([])

    function getmanga() {
        axios.get("/manga")
            .then(res => setmanga(res.data))
            .catch (err => console.log(err))
    }

    useEffect(() => {
        getmanga()
    }, [])

    return (
        <div>
            {/* {manga.map(manga => 
                key={manga.title}
            )} */}
        </div>
    )
}