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
      <input name="course"placeholder="Course"className="first"type="text"onChange={handleChange('course')}defaultValue={values.course}></input>

      <input type="text"name='institution'placeholder="Institution"
   onChange={handleChange('institution')}defaultValue={values.institution}></input>

  <input type="text"name='State'placeholder="State"onChange={handleChange('State')}defaultValue={values.State}></input>

      <input name="skills"placeholder="Skills"onChange={handleChange('skills')}defaultValue={values.skills}></input>

      <input name="graduationYear"placeholder="Graduation year"type="number"onChange={handleChange('graduationYear')}defaultValue={values.graduationYear}></input>

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




