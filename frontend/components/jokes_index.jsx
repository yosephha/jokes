import React from 'react';

class JokesIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search: ""
    }
  }
  componentDidMount(){
    //request all categories
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render(){
    //render all jokes
    return (
      <div>
        <form onSubmit={this.handleSubmit} className ="authForm">
          <input type="text"
            value={this.state.search}
            onChange={this.update("search")}
          />
        <br />
          <select
            name="expertise"
            onChange={this.update('category')}
            value={this.state.category}
          >
            <option value="x" disabled="true">--Select a category--</option>
            {
              // map over categories and print them 
            }
          </select>
        </form>

        <h1>JOKES!!!</h1>
      </div>
    );
  }
}

export default JokesIndex;
