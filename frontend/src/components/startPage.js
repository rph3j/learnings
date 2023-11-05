import React from "react";
import axios from "axios";
import StudentPanel from "./panels/studentPanel.js"
import TeacherPanel from "./panels/teacherPanel.js"
import AdminPanel from "./panels/adminPanel.js"
import "./startPage.css"
import "./general.css"
import teacher from "../icons/teacher.png"
import admin from "../icons/admin.png"
import student from "../icons/students.png"
/*==============================================================================
Kalasa ktora renderuje główny panel wyboru podstorn                          ===
Powyrzej zasały zaimportowane scierki do podstoron oraz potrzxebne biblioteki===
===============================================================================*/
class startPage extends React.Component{
/* Kostruktor z deklaracją statusu */
    constructor(props){
        super(props);

        this.state = {
            rows: [],
            email: props.user,
            isTeachr: false,
            isStudents: false,
            isAdministrator: false,
            isPanelSelected: true,
            option: 0
        }
    }
/* funkcja która się wywołuje po wczytaniu widoku */
    componentDidMount(){
        this.feachData();
    }
/* funkcja która zaczytuje dane z bazy i układa je w odpowidznich polach statusu (state) */
    feachData = () => {
        axios.post("http://localhost:3001/api/getFullData",{ email: this.state.email },{headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}).then( (res) => {
        /* baza jest tak zbudowan że w przypadku większej ilości uprawniań zwracanuhc jest więcje niż jeden rekod więć przechodze po nich pętlą */   
            res.data.forEach(element => {
                switch( element.TYPE ){
                    case "S":
                        this.setState({ isStudents: true });
                    break;
                    case "T":
                        this.setState({ isTeachr: true });
                    break;
                    case "A":
                        this.setState({ isAdministrator: true });
                    break;
                    default:
                        console.log("brak dostępów");
                }
            });
            /* jednroazowe zczytanie danych o urzytkoniku oraz zapisanie ich do state */
            let rows = {
                userName:  res.data[0].NAME,
                surname: res.data[0].SURNAME,
                email: res.data[0].EMAIL
            }
            this.setState({ rows });
        }).catch( (err) => {
            console.log(err);
        })
    }
/* funkcja generująca przycisk powrotu do panelu głównego */
    generateExitButton = () =>{
        if(!this.state.isPanelSelected){
            return(<button onClick={ () => { this.setState({ isPanelSelected: true }) } }>X</button>)
        }else{
            return;
        }
    }
/* funkcja kasująca zalogowanego urzytkonika ze stanu i odswierzjaća stronę */
    logOutHandler = () => {
        localStorage.clear();
        window.location.reload(false);
    }
/* funkcja obsłógująca wybur panelu */
    onClickHandler = (option) => {
        this.setState({ option });
        this.setState({ isPanelSelected: false});
    }
/* funkcja renderująca główny panel wyboru podstorn */
    selectPanelHandler = () => {
        return(
            <div className="content">
                <div className="spacing"></div>
                <div className="option" onClick={ () => this.onClickHandler(1) }>
                    <div className="img">
                        <img src={student} alt="student icon" />
                    </div>
                    <span>Uczeń</span>
                </div>
                <div className="option" onClick={ () => this.onClickHandler(2) }>
                    <div className="img">
                        <img src={teacher} alt="teacher icon" />
                    </div>
                    <span>Nauczyciel</span>
                </div>
                <div className="option" onClick={ () => this.onClickHandler(3) }> 
                    <div className="img">
                        <img src={admin} alt="admin icon" />
                    </div>
                    <span>Administrator</span>
                </div>
                <div className="spacing"></div>
            </div>
        )
    }
/* funkcja pokazująca odpowiednią podstorne po wyborze  */
    showPanl = () => {
        if(this.state.option === 1 && this.state.isStudents){
            return(<div> <StudentPanel user={this.state.rows} exit={this.onExit}/> </div>)
        }else if(this.state.option === 2 && this.state.isTeachr){
            return(<div> <TeacherPanel user={this.state.rows} exit={this.onExit}/> </div>)
        }else if(this.state.option === 3 && this.state.isAdministrator){
            return(<div> <AdminPanel user={this.state.rows} exit={this.onExit}/> </div>)
        }else{
            this.setState({isPanelSelected: true})
            alert("Nie masz dostępu do tego panelu!")
        }
    }
/* Główna funkcja renderująca */
    render(){
        return(
            <div className="container">
                <div className="controlBar">
                    Urzytkonik: {this.state.rows.userName} {this.state.rows.surname}.
                    {this.generateExitButton()}
                    <button onClick={ () => this.logOutHandler() }>LOG OUT</button>
                </div>
                {this.state.isPanelSelected ? this.selectPanelHandler() : this.showPanl()}
                <div className="footer"></div>
            </div>
        )
    }
}

export default startPage;