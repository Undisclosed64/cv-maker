import React, { Component } from 'react';

class HandleEducation extends Component{


    render(){
      return(
  <div>
          <h1>{this.props.course}</h1>
          <h3>{this.props.institution}</h3>
          <h3>{this.props.city}</h3>
          <h3>{this.props.skills}</h3>
          <h3>{this.props.graduationYear}</h3>

          </div>
      )
    }
  
  }
  export default HandleEducation;
