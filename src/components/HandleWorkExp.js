import React, { Component } from 'react';

class HandleWorkExp extends Component{


    render(){
      return(
  <div>
          <h1>{this.props.job}</h1>
          <h3>{this.props.company}</h3>
          <h3>{this.props.startDate}</h3>
          <h3>{this.props.endDate}</h3>

          </div>
      )
    }
  
  }
  export default HandleWorkExp;
