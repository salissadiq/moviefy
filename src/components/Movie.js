import React, {
    Component
} from 'react';
import '../App.css';

class Movie extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return ( 
            < div >
               <h3>{this.props.title}</h3>
               < img className="movie-img" src ={this.props.img}  / >
               <p>({this.props.year})</p>
               <p>
             Season 1
               </p>
            </div>
        );
    }
}

export default Movie;
