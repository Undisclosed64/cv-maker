import React, { Component } from 'react';
import HandleEducation from './HandleEducation';

class Education extends Component{
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }
  /*
  constructor(){
    super();
  
  this.state = {
    course: '',
    institution:'',
    startDate:'',
    endDate:'',
}

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
}*/
  render(){
    const {values,handleChange} = this.props;

    return(
      <div className="formContainer">
        <div id="educationSection">
     <div className="sectionName">Education</div>
      <form /*onSubmit={this.handleSubmit*/>
      <input name="course"placeholder="Course"className="first"type="text"onChange={handleChange('course')}defaultValue={values.course}></input>

      <input type="text"name='institution'placeholder="Institution"
   onChange={handleChange('institution')}defaultValue={values.institution}></input>

<input type="text"name='State'placeholder="State"
   onChange={handleChange('State')}defaultValue={values.State}></input>

      <input name="skills"placeholder="Skills"onChange={handleChange('skills')}defaultValue={values.skills}></input>

      <input name="graduationYear"placeholder="Graduation year"type="number"onChange={handleChange('graduationYear')}defaultValue={values.graduationYear}></input>

      <div className="btns">
      <button className="prev"onClick={this.back}>Previous</button>
      <button className="next"onClick={this.continue}>Next</button>
      </div>
      </form>

<HandleEducation course={values.course}institution={values.institution}State={values.State}skills={values.skills}graduationYear={values.graduationYear}/>
  
</div>
</div>


    )
  }
}
export default Education;




