import React, { Component } from 'react';
import './userinformation.css';


class UserInformation extends Component{
    constructor(props){
        super(props)
    }
    

    render(){
        return (
            <div className="userInfo">
                <img className="userInfoImg"src={this.props.userInfo.avatar_url}/>
                <div className="userContent">
                    <div className="userInfoName">{this.props.userInfo.name}</div>
                    <div className="userInfoFollower">Followers:{this.props.userInfo.followers}</div>
                    <div className="userInfofollowing">Following:{this.props.userInfo.following}</div>
                </div>
  
            </div>
  
        );
    }



}
export default UserInformation;