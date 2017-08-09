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
    if(this.state.username != "")
      this.validUserName = true;
    if(this.state.password != "")
      this.validPassword = true;
  }

  render(){
    let usernameMissing = "";
    let passwordMissing = "";

    if(this.state.error){
      if(!this.validUserName)
        usernameMissing = "username can't be blank";
      if(!this.validPassword)
        passwordMissing = "password can't be blank";
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} className ="authForm">
          <div>{ usernameMissing }</div>
          <input type="text"
  					value={this.state.username}
  					onChange={this.update("username")}
  					placeholder="Username"
  					/>
  				<br />

          <div>{ passwordMissing }</div>
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
