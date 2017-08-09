import React from 'react';
import JokeItem from './joke_item';

class JokesIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      search: "",
      category: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchCategories();
  }

  update(field) {
    if(field === 'category'){
      return e => this.setState({
        [field]: e.currentTarget.value,
        search: e.currentTarget.value
      });
    } else {
      return e => this.setState({
        [field]: e.currentTarget.value,
        category: ''
      });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.queryJokes(this.state.search);
  }

  generateJokes(){
    return(
      this.props.jokes.result.map(
        (joke) => {
          return(
          <JokeItem
            key={joke.id}
            avatar={joke.icon_url}
            link={joke.url}
            value={joke.value}
          />
        );
      })
    );
  }


  render(){
    if(!this.props.categories) return null;
    let jokesArr = [];

    if(this.props.jokes.result) {
      jokesArr = this.generateJokes();
    }


    return (
      <div>
        <form onSubmit={this.handleSubmit} className ="authForm">
          <input type="text"
            value={this.state.search}
            onChange={this.update("search")}
          />
        <br />
          <select
            name=""
            onChange={this.update('category')}
            value={this.state.category}
          >
          <option value="x" disabled="true">-none-</option>
            {
              this.props.categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))
            }
          </select>
          <br/>

          <input type="submit"
            value='SEARCH'
          />
        </form>

        <ul>
          {jokesArr}
        </ul>

      </div>
    );
  }
}

export default JokesIndex;
