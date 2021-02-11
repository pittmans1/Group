import React from "react"

function Meme(props) {
    return (
        <div>
            <h1 className="names">{props.info.topLine}</h1>

            <img
                className="imgs"
                src={props.info.memeImage}
            />

            <h1>{props.info.bottomLine}</h1>

            <button>Edit Meme</button>
            <button>Delete Meme</button>

            <hr />
        </div> 
    )
}

export default Meme
