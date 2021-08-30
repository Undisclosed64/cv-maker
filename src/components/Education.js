import React, { Component } from 'react';
import HandleEducation from './HandleEducation';

class Education extends Component{
  constructor(){
    super();
  
  this.state = {
    course: 'MBA',
    institution:'Stanford University',
    startDate:'2018',
    endDate:'2021',
}
/*
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this)*/
}
handleSubmit = (e) => {
    const { course,insitution,startDate,endDate} = this.state;
    e.preventDefault();
    alert(`
    ____Your Details____\n
    Course: ${course}
    Institute : ${insitution}
    Start Date : ${startDate}
    End Date : ${endDate}
  `)
}

handleChange = (e) => {
  this.setState({
 [e.target.name]: e.target.value
  })
}
  render(){

    return(
      <div>
     <div>Education</div>
      <form onSubmit={this.handleSubmit}>

      <label htmlFor="Course Name">Course Name
      <input name="course"type="text"onChange={this.handleChange}value={this.state.course}></input>
      </label>

      <label htmlFor="Institution">Institution Name
      <input type="text"name='institution' 
onChange={this.handleChange}value={this.state.institution}></input>
      </label>

     <label htmlFor="Start Date">Start Date
      <input name="startDate"type="date"onChange={this.handleChange}value={this.state.startDate}></input>
      </label>

      <label htmlFor="End Date">End Date
      <input name="endDate"type="date"onChange={this.handleChange}value={this.state.endDate}></input>
      </label>

      <button type="submit">Done</button>
      </form>

<HandleEducation course={this.state.course}institution={this.state.institution}startDate={this.state.startDate}endDate={this.state.endDate}/>
  

</div>


    )
  }
}
export default Education;




