import React from 'react';

class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            value: ''
        };
    }
    setValue = event =>{
        // console.log(event)
        this.setState({value: event.target.value});
    };
    submitForm = event=>{
        this.props.submit(this.state.value);
        event.preventDefault()
    };
    render(){
        return(
            <div>
                <form onSubmit={this.submitForm}>
                    <input value={this.state.value} onChange={this.setValue} className="search-input" placeholder="Enter Keyword to search"/>
                    <button className="search-btn">Search</button>
                </form>
            </div>
        )
    }
}
export default Search