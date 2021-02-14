import React from "react"
import Meme from "./Meme.js"
import MemeForm from "./MemeForm.js"

class MemeCreator extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            topLine: "",
            memeImage: "http://i.imgflip.com/1bij.jpg",
            bottomLine: "",
            imgs : [],
            memeList: []
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => { (console.log(response))
            const {memes} = response.data;
            this.setState({
                imgs : memes
            })
        })
    };
    
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

    handleEdit = () => {
       const edit = document.createElement("input");
        edit.type = "text"
        edit.id = "edit"

    }

    handleDelete(index) {
        const list = this.state.memeList
       list.splice(index, 1)
        this.setState({list})
    }
           
       
       
         
        
    
    
    render() {
        let memes = this.state.memeList.map((meme, i) =>
        <Meme
            key={i}
            info={meme}
            onClick={this.handleEdit}
            onDelete={this.handleDelete}
            value = {i}
            id={i}
        />)
        return (
            <div>
                <MemeForm
                    state={this.state}
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />

                <button onClick={this.handleClick}>Click for New Meme</button>

                <br />

                <h1>{this.state.topLine}</h1>
                <img src={this.state.memeImage}/>
                <h1> {this.state.bottomLine} </h1>
                <hr />

                {memes}
                
            </div>
        )
    }
}

export default MemeCreator
