import React, { Component } from 'react';

class HandleWorkExp extends Component{


    render(){
      return(
  <div>
          <h1>{this.props.job}</h1>
          <h3>{this.props.company}</h3>
          <h3>{this.props.city}</h3>
          <h3>{this.props.StartDate}</h3>
          <h3>{this.props.EndDate}</h3>

          </div>
      )
    }
  
  }
  export default HandleWorkExp;
