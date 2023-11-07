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
            task: "",
            answer: "",
            user: props.user,
            taskType: "add",
            isOpen: false,
            taskNymber: 0,
            answerValue: 0
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
    }

    openModal = (i,task,answer) =>{
        this.setState({ isOpen: true});
        this.setState({ taskNymber: i });
        this.setState({ task });
        this.setState({ answer })
    }

    closeModal = () => {
        this.setState({ isOpen: false});
    }

    changeHandler = (event) => {
        this.setState({answerValue: event.target.value});
    }

    handlerSubmit = (event) =>{
        let tID = this.state.taskNymber + 1;
        if(this.state.answerValue === this.state.answer)
        {
            axios.post("http://localhost:3001/api/postAnswer",{
                userID: this.state.user.id,
                taskID: tID,
                answer: true
             })
        }else{
            axios.post("http://localhost:3001/api/postAnswer",{
                userID: this.state.user.id,
                taskID: tID,
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
            <h1>Podaj poprawny wynik: </h1>
            <p>{this.state.task}</p>
            <form onSubmit={(e) => this.handlerSubmit(e)}>
                <input type="number" value={this.state.answerValue} onChange={(e) => this.changeHandler(e)}></input>
                <input type="submit"></input>
            </form>
        </Modal>)
    }
    renderTasks = () => {
        let iterator = 0;
        return(
            this.state.tasks.map( (task,i) => {
                if(task.type === this.state.taskType){
                    iterator++
                    return(
                        <div className="task" key={i} onClick={ () =>this.openModal(i,task.task, task.answer) }>zadanie {iterator}</div>
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