import React, { Component } from 'react';
import CVTheme from './CVTheme';
import { FaFileUpload } from "react-icons/fa";



class BasicInfo extends Component{

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render(){
   const {values,handleChange,handleImgChange} = this.props;

    return(
      <div>
      <div className="formContainer">
     <div className="sectionName">Basic Info</div>
     <form>
       <label>Your Name
      <input type="text"name='name'className="first" onChange={handleChange('name')}defaultValue={values.name}onClick={this.handleClick}></input>
      </label>
      <label>Profile Picture
        <div id="imgfile"><FaFileUpload/>  Choose an image</div>
      <input type="file"accept="image/*"onChange={handleImgChange}multiple="false"id="imgFile"/>
</label>
<label>Occupation
      <input name="occupation"type="text"onChange={handleChange('occupation')}defaultValue={values.occupation}></input>
      </label>
<label>E-mail
      <input name="email"type="email"onChange={handleChange('email')}defaultValue={values.email}></input>
      </label>
<label>Phone no
      <input name="contactNo"onChange={handleChange('contactNo')}defaultValue={values.contactNo}id="phonNo"></input>
      </label>
      <label>Your location
      <input name="city"type="text"onChange={handleChange('city')}defaultValue={values.city}></input>
      </label>

      <div className="btn">
      <button className="next btn"onClick={this.continue}>Next</button>
      </div>
</form>

      </div>

      <CVTheme name={values.name}imgSrc={values.file}occupation={values.occupation}email={values.email}contactNo={values.contactNo}city={values.city}course={values.course}institution={values.institution}State={values.State}skills={values.skills}graduationYear={values.graduationYear}job={values.job}company={values.company}StartDate={values.StartDate}EndDate={values.EndDate}/>


</div>


    )

  }

}

export default BasicInfo;
