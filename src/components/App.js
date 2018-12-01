import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from './Search';
import spinner from './loading.gif';
/*
  ------- STATE -------
  What is state in a React app? You can think of it as a single JavaScript object which represents all the data in your app.
  State can be defined on any component,
  but if you want to share state between components then it's better to define it on the top-level component.
  State can then be passed down to child components and accessed as required.

  NOTE: For now state can be created like the example below:

  constructor(){
    super();
    this.state = {};
  }
*/

const MOVIE_API_URL = '';
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
        loading: true,
        search: 'man'

    };
  }

  componentDidMount(){
      this.searchMovie()
  }
  searchMovie(){
      fetch(`http://www.omdbapi.com/?s=${this.state.search}&apikey=4a3b711b`)
          .then(res=> res.json())
          .then(jsonres=>
          {
              // console.log(jsonres);
              this.setState(
                  {
                      movies: jsonres.Search || [],
                      loading: false
                  })
          })
          .catch(error => {console.log(error)})
  }
  submitSearch = (value)=>{
      this.setState({search: value, loading:true},()=>{
          this.searchMovie()
      });
  };
  render() {
    return (
      <div className="App">
        <Header text="MOVIEFY" />
        <p className="App-intro">Sharing a few of our favourite movies</p>
          <Search submit={this.submitSearch}/>
        <div className="movies">
          {this.state.loading ? (<img src={spinner} className="spin" width="100" height="100" />) : this.state.movies.map((movie, index) => (
              <Movie key={index} meta={movie} />
              ))}
        </div>
      </div>
    );
  }
}

export default App;
