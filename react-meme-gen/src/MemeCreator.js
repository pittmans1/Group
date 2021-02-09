import React from "react"

class MemeCreator extends React.Component {
    constructor() {
        super()
        this.state= {

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit() {
        
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Top Text"/>
                <input type="text" placeholder="Bottom Text"/>
                <button onSubmit={this.handleSubmit}>Submit Meme</button>
            </div>
        )
    }
}

export default MemeCreator
