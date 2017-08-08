import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LogInForm extends React.Component {

  constructor(props){
    super(props);
    this.state = { username: "", password: "" };
  }

  update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}

  render(){
    return (
      <div>
        <input type="text"
					value={this.state.username}
					onChange={this.update("username")}
					placeholder="Username"
					/>
				<br />

				<input type="password"
					value={this.state.password}
					onChange={this.update("password")}
					placeholder="Password"
					/>
				<br/>

      </div>
    );
  }
}

export default withRouter(LogInForm);
