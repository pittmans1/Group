import React from "react"
import style from "./style.css"
import MemeCreator from "./MemeCreator"
import Header from "./Header"

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            meme: []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
       
            fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
             .then(data => {
               this.setState({
                meme: data
                })
            })
        
    }
    
    render(){
        return(
            <div>
                <Header />
                <div>{this.state.meme.map(item => <h1 >{item.name}</h1>)}</div>
                <div>{this.state.meme.map(img => <img src={img.url} style={{width: 1200, height: 1200}}/>)}</div>
                <button onClick= {this.handleClick} name="button">Click for Meme</button>
            
                <MemeCreator />
            </div>
        )
    }
    
}

export default App
