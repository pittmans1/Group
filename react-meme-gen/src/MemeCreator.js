import React from "react"
import Meme from "./Meme.js"
import MemeForm from "./MemeForm.js"

class MemeCreator extends React.Component {
    constructor() {
        super()
        this.state= {
            topLine: "",
            imgUrl: "",
            bottomLine: "",
            memeList: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /*Think we need a componentDidMount here with another fetch
    to load a meme image when the site is opened*/

    handleClick(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState ({
                topLine: "",
                imgUrl: data.memes,
                bottomLine:""
            })
        })
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
      event.preventDefault()
      const newMeme = [...this.state.memeList]

      newMeme.push(this.state)
      this.setState({
          memeList: newMeme
      })
    }

    render() {
        let memes = this.state.memeList.map(meme => <Meme info={meme}/>)
        return (
            <div>
                <MemeForm
                    state={this.state}
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />

                <button onClick= {this.handleClick} name="button">Click for Meme</button>

                {memes}
            </div>
        )
    }
}

export default MemeCreator
