import React from "react"

function Header(){
    return(
        <header className="header">
            <img style={{paddingLeft:25, paddingRight:25}} src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="meme" height="50px" width="50px" />
            <span style={{fontSize: "70px"}}> Meme Generator </span>
        </header>
    )
}

export default Header
