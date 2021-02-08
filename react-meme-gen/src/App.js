import React from "react"
import style from "./style.css"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            name: "",
            url: "",
            id:""
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            this.state.map()
        })
    }
    
    render(){
        return(
            <div>
                <img src={this.state.url} style={width=1200, height=1200}/>
                <button onClick= {this.handleClick} name="button">Click for Meme</button>
            </div>
        )
    }
    
}

export default App