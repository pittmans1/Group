import React from "react"
import Meme from "./Meme.js"
import MemeForm from "./MemeForm.js"

class MemeCreator extends React.Component {
    constructor() {
        super()
        this.state= {
            topLine: "",
            memeImage: "",
            bottomLine: "",
            imgs : [],
            memeList: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data;
            this.setState({
                imgs : memes
            })
            
            
        })
    };
    /*Think we need a componentDidMount here with another fetch
    to load a meme image when the site is opened*/
    
    handleClick(){

        const randNum = Math.floor(Math.random() * this.state.imgs.length);
        const randomImg = this.state.imgs[randNum].url;
        this.setState({
            memeImage: randomImg
        })
    }
        
    

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
      e.preventDefault()
      const newMeme = [...this.state.memeList]

      newMeme.push(this.state)
      this.setState({
          memeList: newMeme
      })

      Array.from(document.querySelectorAll("input")).forEach(
        input => (input.value = "")
     );
     this.setState({
        topLine: "",
        bottomLine: ""
     })
    }
    
    
    render() {
        return (
            <div>
                <MemeForm
                    state={this.state}
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />

                <button onClick={this.handleClick}>Click for New Meme</button>

                <img src={this.state.memeImage}/>
                
            </div>
        )
    }
}

export default MemeCreator
