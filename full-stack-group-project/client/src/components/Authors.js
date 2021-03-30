import React, { useState, useEffect } from "react"
import axios from "axios"

export default function Authors() {
    const [ authors, setAuthors ] = useState([])

    // Get all
    function getAuthors() {
        axios.get("/author")
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }

    // Get One
    function getComic(comicId) {
        axios.get(`/author/${comicId}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAuthors()
    }, [])

    return (
        <div>
            <h1 className="page-title">Authors!</h1>
            {/* {authors.map(author => 
                key={author.name}
            )} */}
        </div>
    )
}