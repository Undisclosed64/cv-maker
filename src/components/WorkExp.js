import React, { Component } from 'react';
import HandleWorkExp from './HandleWorkExp';
class WorkExp extends Component{
  constructor(){
    super();
  
  this.state = {
    job: 'Software Developer',
    company:'Google',
    startDate:'2019',
    endDate:'2021',
}
/*
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this)*/
}
handleSubmit = (e) => {
    const {job,company,startDate,endDate} = this.state;
    e.preventDefault();
    alert(`
    ____Your Details____\n
    Job: ${job}
    Company : ${company}
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
     <div>Work Experience</div>
      <form onSubmit={this.handleSubmit}>

      <label htmlFor="Job title">Job title
      <input name="job"type="text"onChange={this.handleChange}value={this.state.job}></input>
      </label>

      <label htmlFor="Company name">Company name
      <input type="text"name='company' 
onChange={this.handleChange}value={this.state.company}></input>
      </label>

     <label htmlFor="Start Date">Start Date
      <input name="startDate"type="date"onChange={this.handleChange}value={this.state.startDate}></input>
      </label>

      <label htmlFor="End Date">End Date
      <input name="endDate"type="date"onChange={this.handleChange}value={this.state.endDate}></input>
      </label>

      <button type="submit">Done</button>
      </form>

<HandleWorkExp job={this.state.job}company={this.state.company}startDate={this.state.startDate} endDate={this.state.endDate}/>
    


</div>


    )
  }
}
export default WorkExp;




