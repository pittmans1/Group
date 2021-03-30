import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Comics() {
    const [ comics, setComics ] = useState([])

    // Get all
    function getComics() {
        axios.get("/author")
            .then(res => setComics(res.data))
            .catch(err => console.log(err))
    }

    // Get One
    function getComic(comicId) {
        axios.get(`/author/${comicId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getComics()
    }, [])

    return (
        <div>
            <h1 className="page-title">Comics!</h1>

            <h2 className="page-summary">
                Here is our complete list of all the comics we have!
            </h2>

            <ul>
                {
                    comics.map(comic =>
                        <div>
                            <h2
                                key={comic.title}
                                className="comics"
                            >
                                {comic.imgUrl}
                                {comic.title}
                                {comic.description}
                                {comic.price}
                            </h2>
                        </div>)
                }
            </ul>

        </div>
    )
}