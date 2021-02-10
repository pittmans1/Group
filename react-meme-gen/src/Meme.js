import React from "react"

function Meme(props) {
    return (
        // Img not being rendered. Wrong src?
        <div>
            <h1>Top Line {props.info.topLine}</h1>

            <img
                src={props.info.Url}
                style={{width: 600, height: 600}}
            />

            <h1>Bottom Line {props.info.bottomLine}</h1>
        </div> 
    )
}

export default Meme
