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
            <h1 className="page-title">Manga!</h1>

            <h2 className="page-summary">
                Here is our complete list of all the manga we have!
            </h2>

            <ul>
                {
                    manga.map(manga =>
                        <div
                            key={manga.title}
                            className="manga"
                        >
                            <img src={manga.imgUrl}/>
                            <h2>Title: {manga.title}</h2>
                            <h2>Description: {manga.description}</h2>
                            <h2>Price: {manga.price}</h2>
                        </div>)
                }
            </ul>
            
        </div>
    )
}