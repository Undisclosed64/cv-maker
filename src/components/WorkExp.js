import React, { Component } from 'react';

class WorkExp extends Component{
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
 /* constructor(){
    super();
  
  this.state = {
    job: '',
    company:'',
    startDate:'',
    endDate:'',
}

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
}*/
  render(){
    const {values,handleChange} = this.props;


    return(
      <div className="formContainer">
        <div id="workExp">
     <div className="sectionName">Work Experience</div>
      <form /*onSubmit={this.handleSubmit}*/>

      <input name="job"placeholder="Your Role"className="first"type="text"onChange={handleChange('job')}defaultValue={values.job}></input>

      <input type="text"name='company'placeholder="Company" 
onChange={handleChange('company')}defaultValue={values.company}></input>

      <input name="StartDate"type="date"onChange={handleChange('StartDate')}defaultValue={values.StartDate}></input>

      <input name="EndDate"type="date"onChange={handleChange('EndDate')}defaultValue={values.EndDate}></input>

      <div className="btns">
      <button className="prev"onClick={this.back}>Previous</button>
      <button className="next"type="submit"onClick={this.continue}>Submit</button>
      </div>

      </form>

    

</div>
</div>


    )
  }
}
export default WorkExp;




