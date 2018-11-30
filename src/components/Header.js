import React, {
    Component
} from 'react';
import '../App.css';

class Header extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return ( 
        <header className="App-header">
          <h3>
            {this.props.name}
          </h3>
        </header>
        );
    }
}

export default Header;
