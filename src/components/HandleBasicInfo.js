import React, { Component } from 'react';

class HandleBasicInfo extends Component{


    render(){
      return(
  <div>
          <h1>{this.props.name}</h1>
          <h3>{this.props.email}</h3>
          <h3>{this.props.phoneNo}</h3>
          </div>
      )
    }
  
  }
  export default HandleBasicInfo;
