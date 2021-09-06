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
 
  render(){
    const {values,handleChange} = this.props;

    return(
      <div className="formContainer">
        <div id="workExp">
     <div className="sectionName">Work Experience</div>

<form>
<label>Your Role
      <input name="job"className="first"type="text"onChange={handleChange('job')}defaultValue={values.job}></input>
</label>
<label>Company
      <input type="text"name='company'
onChange={handleChange('company')}defaultValue={values.company}></input>
</label>
<label>Start date
      <input name="StartDate"type="date"onChange={handleChange('StartDate')}defaultValue={values.StartDate}></input>
</label>
<label>End date
      <input name="EndDate"type="date"onChange={handleChange('EndDate')}defaultValue={values.EndDate}></input>
</label>
      <div className="btns">
      <button className="prev"onClick={this.back}>Previous</button>
      <button className="next"onClick={this.continue}>Submit</button>
      </div>
</form>
</div>
</div>

    )
  }
}
export default WorkExp;




