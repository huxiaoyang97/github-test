import React, { Component } from 'react';
import './userreposities.css';

class UserRepos extends Component{
    constructor(props){
        super(props)
    }

    openRepUlr (){
        window.open(this.props.repoInfo.svn_url);
    }
    render(){
        return (
            <div className="ctnOfCtn">
            <div onClick={this.openRepUlr} className="reposContainer">
                <div className="repoName">{this.props.repoInfo.name}</div>
                <div className="repoDes">{this.props.repoInfo.description}</div>
                <div className="repoForks">forks:{this.props.repoInfo.forks}</div>
                <div className="repoStar">stars:{this.props.repoInfo.stargazers_count}</div>
            </div>
            </div>
        );
    }



}
export default UserRepos;