import React from "react"



function Meme(props) {
    return (
        // Img not being rendered. Wrong src?
        <div>
            <h1 className="names">Top Line {props.name}</h1>

            <img
                className="imgs"
                src={props.url}
                style={{width: 600, height: 600}}
            />

            <h1>Bottom Line {props.bottomLine}</h1>
        </div> 
    )
}

export default Meme
