import React from "react";
import axios from "axios";
import Modal from "react-modal";
import "./studentPanel.css";
import close from "../../icons/return.png"

class studentPanel extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            tasks: [],
            task: "6+12",
            answer: "",
            user: props.user,
            taskType: "add",
            isOpen: false,
            taskNymber: 0,
            answerValue: 0,
            taskID: 0
        };
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentDidMount(){
        this.feachTasks();
        Modal.setAppElement('body');
    }

    feachTasks = () => {
        axios.post("http://localhost:3001/api/getTasks",{type: this.state.taskType },{headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).then( (res) => {
            this.setState({ tasks: res.data })
        }).catch( (err) => {
            console.log(err);
        })
    }

    handlerRadio = (event) =>{
        this.setState({ taskType: event.target.value });
        switch(event.target.value){
            case "sub":
                this.setState({ task: "22-6" });
            break;
            case "multi":
                this.setState({ task: "4X5" });
            break;
            case "add":
                this.setState({ task: "6+12" });
            break;
        }
    }

    openModal = (i,task,answer,id) =>{
        this.setState({ isOpen: true});
        this.setState({ taskNymber: i });
        this.setState({ task });
        this.setState({ answer })
        this.setState({ taskID: id })
    }

    closeModal = () => {
        this.setState({ isOpen: false});
    }

    changeHandler = (event) => {
        this.setState({answerValue: event.target.value});
    }

    handlerSubmit = (event) =>{
        if(this.state.answerValue === this.state.answer)
        {
            axios.post("http://localhost:3001/api/postAnswer",{
                userID: this.state.user.id,
                taskID: this.state.taskID,
                answer: true
             })
        }else{
            axios.post("http://localhost:3001/api/postAnswer",{
                userID: this.state.user.id,
                taskID: this.state.taskID,
                answer: false
             })
        }
        this.closeModal();
        event.preventDefault();
    }

    renderModal = () => {
        const isOpen = this.state.isOpen;
        const taskNr = this.state.taskNymber;

        return(
        <Modal className="openTask" isOpen={isOpen}>
            <div className="close" onClick={ () => this.closeModal() }>
                <img src={close} alt="close icon"></img>
            </div>
            <div className="topMargin"></div>
            <div className="taskContent">
                <h1>Podaj poprawny wynik: </h1>
                <div className="taskPng">
                    <img src={require("../../tasksPictures/"+this.state.taskType+"/"+this.state.task+".png")} alt="task picture" />
                </div>
                <p>{this.state.task}</p>
                <form onSubmit={(e) => this.handlerSubmit(e)}>
                    <input type="number" value={this.state.answerValue} onChange={(e) => this.changeHandler(e)}></input>
                    <input type="submit" value={"Prześlij"} />
                </form>
            </div>
        </Modal>)
    }
    renderTasks = () => {
        let iterator = 0;
        return(
            this.state.tasks.map( (task,i) => {
                if(task.type === this.state.taskType){
                    iterator++
                    return(
                        <div className="task" key={i} onClick={ () =>this.openModal(i,task.task, task.answer, task.id) }>zadanie {iterator}</div>
                    )
                }else{
                    return(<span></span>);
                }
            })
        )
    }
    render(){
        return(
                <div className="content" >
                    <div className="sideBar">
                        <div className="radioBT">
                            <input type="radio" value="add" name="subject"
                                defaultChecked 
                                onChange={this.handlerRadio}
                            />Dodawanie<br/>

                            <input type="radio" value="sub" name="subject"
                                onChange={this.handlerRadio}
                            />Odejmowanie<br/>

                            <input type="radio" value="multi" name="subject"
                                onChange={this.handlerRadio}
                            />Mnożenie<br/>
                        </div>
                    </div>
                    <div className="tasks" >
                        {this.renderTasks()}
                    </div>
                    {this.renderModal()}
                    <div className="clear"></div>
                </div>
        )
    }
}

export default studentPanel;