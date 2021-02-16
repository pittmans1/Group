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
            memeList: [],
            isEditing: false
            
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleSave=this.handleSave.bind(this)
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
        const {name, value} = e.target
        this.setState((prevState) => {
            return {...prevState, [name]: value }
        })
    }

    handleSubmit(e) {
      e.preventDefault()
      this.setState((prevState) => {
          return { memeList: [...prevState.memeList, {topLine: prevState.topLine, bottomLine: prevState.bottomLine, memeImage: prevState.memeImage}]}
      })
      this.handleClick()
    }

    handleEdit(index) {
        let memeList = this.state.memeList
        let meme = memeList[index]

        this.setState({
            memeIndex: index,
            isEditing: !this.state.isEditing,
            topLine: meme.topLine,
            bottomLine: meme.bottomLine,
            memeImage: meme.memeImage
        })

        
    }
     handleSave(e){
         e.preventDefault()
        let newMeme = {topLine:this.state.topLine, bottomLine:this.state.bottomLine, memeImage:this.state.memeImage}
        

        this.setState((prevState) => {
            let newMemeList = prevState.memeList
            newMemeList.splice(prevState.memeIndex,1, newMeme)
            return { isEditing: false, memeList: [...newMemeList],topLine: "", bottomLine: ""}
            
        })
        
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
         
        
            return( 
        
            <div>
                <MemeForm
                    state={this.state}
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleSave={this.handleSave}
                    
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
