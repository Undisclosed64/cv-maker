import React, { Component } from 'react';

class HandleBasicInfo extends Component{


    render(){
      return(
  <div>


          <h1>{this.props.name}</h1>
          <div>{this.props.email}</div>
          <div>{this.props.phoneNo}</div>
          </div>
      )
    }
  
  }
  export default HandleBasicInfo;
