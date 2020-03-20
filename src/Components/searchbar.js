import React, { Component } from 'react';
import axios from 'axios'
import './searchbar.css';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state={
            inputValue:""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    
    handleChange(e){
        const value = e.target.value;
        this.setState({inputValue:value})
      }

    handleSearch(e) {
        e.preventDefault();
        this.props.searchUser(this.state.inputValue)
    }
    render(){
        return(
        <div>
            <input className="inputValue" value={this.state.inputValue} onChange={this.handleChange}></input>
            <button className="searchButton" onClick = {this.handleSearch}> Search </button>
        </div> 
        )
    }



}
export default SearchBar;