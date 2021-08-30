import React, { Component } from 'react';

class HandleEducation extends Component{


    render(){
      return(
  <div>
          <h1>{this.props.course}</h1>
          <h3>{this.props.institution}</h3>
          <h3>{this.props.startDate}</h3>
          <h3>{this.props.endDate}</h3>

          </div>
      )
    }
  
  }
  export default HandleEducation;
