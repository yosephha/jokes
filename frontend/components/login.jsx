import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LogInForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: "",
      password: "",
      error: false
    };

    this.validUserName = false;
    this.validPassword = false;
    this.error = false;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateInput = this.validateInput.bind(this);
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  handleSubmit(e){
    e.preventDefault();
    this.validateInput();
    if(this.validUserName && this.validPassword){
      this.props.login();
      this.props.history.push('/');
    } else {
        this.setState({
          error: true
        });
    }
  }

  validateInput(){
    if(this.state.username != "" &&
      this.state.username.includes("@") &&
      this.state.username.includes("."))
        this.validUserName = true;

    if(this.state.password != "")
      this.validPassword = true;
  }

  render(){
    let usernameMissing = "";
    let passwordMissing = "";

    if(this.state.error){
      if(!this.validUserName)
        usernameMissing = "Please enter a valid email";
      if(!this.validPassword)
        passwordMissing = "password can not be blank";
    }
    return (
      <div>
        <h1 className='wellcome'>
          {'Welcome! please login to continue!'}
        </h1>
        <form onSubmit={this.handleSubmit} className ="loginForm">
          <div className ='invalidInput'>
            { usernameMissing || '\u00A0'}
          </div>
          <input type="text"
  					value={this.state.username}
  					onChange={this.update("username")}
  					placeholder="Username"
  					/>
  				<br />

          <div className ='invalidInput'>
            { passwordMissing || '\u00A0' }
          </div>
  				<input type="password"
  					value={this.state.password}
  					onChange={this.update("password")}
  					placeholder="Password"
  					/>
  				<br/>

          <input type="submit"
            value='LOGIN'
          />
        </form>
      </div>
    );
  }
}

export default LogInForm;
