import React from "react"

class MemeCreator extends React.Component {
    constructor() {
        super()
        this.state= {
            topLine: "",
            bottomLine: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
      
    }

    render() {

        return (
            <div>

                <form>
                    <input
                    type="text"
                    name="topLine"
                    onChange={this.handleChange}
                    placeholder="Top Text"
                    />

                    <br />
                    
                    <input
                        type="text"
                        name="bottomLine"
                        onChange={this.handleChange}
                        placeholder="Bottom Text"
                    />

                    <br />

                    <button
                        onSubmit={this.handleSubmit}>
                        Submit Meme
                    </button>
                </form>

                <h1> {this.state.topLine} </h1>

                <h1> {this.state.bottomLine} </h1>

            </div>
        )
    }
}

export default MemeCreator
