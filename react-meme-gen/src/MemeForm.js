import React from "react"

function MemeForm(props) {
    return(
        <div>
                
                <form onSubmit={props.state.isEditing ? props.handleSave : props.handleSubmit}>
                    <input
                    type="text"
                    name="topLine"
                    value={props.state.topLine}
                    onChange={props.handleChange}
                    placeholder="Top Text"
                    />

                    <br />
                    
                    <input
                        type="text"
                        name="bottomLine"
                        value={props.state.bottomLine}
                        onChange={props.handleChange}
                        placeholder="Bottom Text"
                    />

                    <br />

                    <button>{props.state.isEditing ? "Save Meme" : "Submit Meme"}</button>
                </form>

            </div>
    )
}

export default MemeForm
