import React from 'react';
import JokeItem from './joke_item';

class JokesIndex extends React.Component {
  constructor(props){
    super(props);

    this.resultFor = '';
    this.state = {
      search: '',
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
    this.props.queryJokes(this.state.search)
    .then((res) => {
      if(res.jokes.total === 0){
        this.resultFor = 'Search result not found...';
        this.setState({
          search: ''
        });
      }
    });

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
    let jokesArr = [];

    if(!this.props.categories) return null;

    if(this.props.jokes.result) {
      jokesArr = this.generateJokes();
    }

    if(jokesArr.length >= 1){
      this.resultFor = "Result for " + this.state.search;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit} className ="mainForm">
          <div className = "search-field">
            <label className='label' htmlFor="search" >Search</label>
            <input type="text"
              id="search"
              value={this.state.search}
              onChange={this.update("search")}
              />
          </div>
          <br />

          <div className='cat-div'>
            <label className='label' htmlFor="category" >Category</label>
            <div className='dropDown'>
              <select
                name=""
                id="category"
                onChange={this.update('category')}
                value={this.state.category}
                >
                <option value="">--none--</option>
                {
                  this.props.categories.map(category => (
                    <option
                      key={category} value={category} className='opt'>{category}
                    </option>
                  ))
                }
              </select>
            </div>

          </div>
          <br/>

          <div className='btn-div'>
            <input
              type="submit" value='GO!' className='go-btn'
              />
          </div>
        </form>
        <ul>
          <div className='label2'>{this.resultFor}</div>
          {jokesArr}
        </ul>

      </div>
    );
  }
}

export default JokesIndex;
