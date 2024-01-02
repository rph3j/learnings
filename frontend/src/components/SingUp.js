import React from 'react';
import axios from 'axios';
import './singUp.css';
import emailIcon from "../icons/email.png"
import passwordIcon from "../icons/password.png"
import loginIcon from "../icons/login.png"

class SingUp extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            errorLogIn: '',
            email: '',
            password: '',
            user: []
        }
    }

    emailChangeHendler = (event) => { this.setState({ email: event.target.value }); }
    passwordChangeHendler = (event) => { this.setState({ password: event.target.value }); }

    
    hendlerSubmit = (event) => {
        if(this.state.email === "" && this.state.password === ""){
            this.setState({ errorLogIn: "Proszę wypełnić pola fromularza!" })
        }else if(this.state.email === "")
        {
            this.setState({ errorLogIn: "Nie podano email'u!" })
        }else if(this.state.password === ""){
            this.setState({ errorLogIn: "Nie podano hasła!" })
        }else{
            axios.post("http://localhost:3001/api/LogIn",{
                email: this.state.email,
                password: this.state.password
             }).then( (responce)=>{
                if(responce.data.password_valid){
                    this.props.onLogin(this.state.email);
                }else{
                    this.setState({ errorLogIn: "Błędny email lub hasło!" })
                 }
            })
        }
        event.preventDefault();
    }


    render(){
        return(
            <div className='container'>
                <div className='forms'>
                    <form onSubmit={this.hendlerSubmit}>
                        <label>Logowanie</label>
                        <div className='input'>
                            <img src={emailIcon} alt='email icon'/>
                            <input type='email' placeholder='email' onChange={this.emailChangeHendler} />
                        </div>
                        <div className='input'>
                            <img src={passwordIcon} alt='email icon'/>
                            <input type="password" placeholder='hasło' onChange={this.passwordChangeHendler}/>
                        </div>
                        <div className='input'>
                            <img src={loginIcon} alt='submitIcon'/>
                            <input type='submit' value={"Zaloguj"}/>
                        </div>
                    </form>
                    <label className='loginError'>{this.state.errorLogIn}</label>
                </div>
            </div>
        )
    }
}

export default SingUp;