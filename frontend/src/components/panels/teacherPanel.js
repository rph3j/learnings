import React from "react";
import axios from 'axios';
import "./teacherPanel.css"

class teacherPanel extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            user: props.user,
            studentsList: [],
            studentResults: []
        }
    }
    componentDidMount(){
        this.feachStudent();
    }

    feachStudent = () => {
        axios.get("http://localhost:3001/api/getStudents").then((res) => {
            this.setState({ studentsList: res.data })
        }).catch( (err) => {
            console.log(err);
        })
    }

    getStudentResult = (id) => {
        axios.post("http://localhost:3001/api/getStudnetsResult",{
                userID: id
        }).then( (rows)=>{
            this.setState({ studentResults: rows.data });
        })
    }

    showHeaders = () =>{
        if(this.state.studentResults.length === 0)
            return(<span>Brak wyniów ucznia</span>);
        else{
            return(
                <tr>
                    <th>Treść zadania</th>
                    <th>Prawidłowa odpowiedź</th>
                    <th>Czy udana próba</th>
                    <th>Data próby</th>
                </tr>
            )
        }
    }
    
    formatDate = (string) => {
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }

    render(){
        return(
                <div className="content">
                    <div className="listBar">
                    {this.state.studentsList.map( (student, i) => {
                        return(
                            <div className="student" key={i} onClick={() => this.getStudentResult(student.ID)}>{student.NAME} {student.SURNAME}</div>
                        )
                    })}
                    </div>
                    <div className="mainBar">
                        <table>
                        {this.showHeaders()}   
                        {this.state.studentResults.map( (result, i) => {
                            return(
                                <tr key={i}>
                                    <td>{result.task}</td>
                                    <td>{result.answer}</td>
                                    <td>{result.result}</td>
                                    <td>{this.formatDate(result.date)}</td>
                                </tr>
                            )
                        })}
                        </table>
                    </div>
                    <div className="claer"></div>
                </div>
        )
    }
}

export default teacherPanel;