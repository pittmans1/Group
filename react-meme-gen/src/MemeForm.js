import React from "react"

function MemeForm(props) {
    return(
        <div>

                <form onSubmit={props.handleSubmit}>
                    <input
                    type="text"
                    name="topLine"
                    value={props.topLine}
                    onChange={props.handleChange}
                    placeholder="Top Text"
                    />

                    <br />
                    
                    <input
                        type="text"
                        name="bottomLine"
                        value={props.bottomLine}
                        onChange={props.handleChange}
                        placeholder="Bottom Text"
                    />

                    <br />

                    <button>Submit Meme</button>
                </form>

            </div>
    )
}

export default MemeForm
