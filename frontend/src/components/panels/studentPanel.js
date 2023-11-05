import React from "react";
import "./studentPanel.css";

class studentPanel extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            user: props.user
        }
    }

    render(){
        return(
                <div className="content" >
                    <div className="sideBar">
                        <input type="radio" value="math" name="subject"/>Matematyka
                        <input type="radio" value="geo" name="subject"/>Biologia
                        <input type="radio" value="biol" name="subject"/>Geografia
                    </div>
                    <div className="exorcise" ></div>
                </div>
        )
    }
}

export default studentPanel;