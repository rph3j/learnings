import React from "react";

class adminPanel extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            user: props.user
        }
    }
    
    render(){
        return(
            <div className="content"></div>
        )
    }
}

export default adminPanel;