import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './Components/searchbar.js';
import UserInformation from './Components/userinformation.js';
import UserRepos from './Components/userrepositories.js';

import './App.css';


class App extends Component {

  constructor (props) {
      super(props);
      this.state = {
          userRepos:{data:[]},
          userFollow:""
      };
      this.arr = [];
      this.searchUser = this.searchUser.bind(this);
      this.loopList = this.loopList.bind(this);
  }
  
  
  searchUser(str){
    //let str = this.state.inputValue;
    //console.log(str);
    let urlFollow = "https://api.github.com/users/"+str;
    axios.get(urlFollow).then(res => {
        console.log(res.data);
        this.setState({userFollow:res.data},()=>{
        });
    });
    let urlRepo = "https://api.github.com/users/"+str+"/repos";
    axios.get(urlRepo).then(res => {
        console.log("res",res);
        this.setState({userRepos:res});
        });
  }
  loopList(){
    return this.state.userRepos.data.map((num) => {
        return <UserRepos key={num.id} repoInfo={num}/>
    })
  }

render() {
  return (
    <div className="App">
        <div className="gitTitle">Github Explorer</div>
        <div className="searchBarContainer"><SearchBar searchUser={this.searchUser}/></div>
        <div className="userInfoContainer"><UserInformation userInfo={this.state.userFollow}/></div>
        <div className="reposTitle">Repositories</div>
        <div className="repoListContainer">{this.loopList()
        }</div>
    </div>
  );
}
}
export default App;
