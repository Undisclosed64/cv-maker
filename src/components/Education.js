import React, { Component } from 'react';

class Education extends Component{
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
        <div>
     <div className="sectionName">Education</div>
<form>
<label>Degree
      <input name="course"className="first"type="text"onChange={handleChange('course')}defaultValue={values.course}></input>
      </label>
      <label>Institution
      <input type="text"name='institution'
   onChange={handleChange('institution')}defaultValue={values.institution}></input>
</label>
<label>State
  <input type="text"name='State'onChange={handleChange('State')}defaultValue={values.State}></input>
  </label>
  <label>Skills
      <input name="skills"onChange={handleChange('skills')}defaultValue={values.skills}></input>
</label>
<label>Graduation year
      <input name="graduationYear"type="number"onChange={handleChange('graduationYear')}defaultValue={values.graduationYear}></input>
</label>
      <div className="btns">
      <button className="prev"onClick={this.back}>Previous</button>
      <button className="next"onClick={this.continue}>Next</button>
      </div>
</form>
</div>
</div>
    )
  }
}
export default Education;




