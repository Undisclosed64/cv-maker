
import React, { Component } from 'react';
import CVTheme from './CVTheme';
import img from './girl.jpg'; 


class BasicInfo extends Component{
  constructor(props){
    super(props)
    this.state = {
      file: img, 
    }
    this.handleImgChange = this.handleImgChange.bind(this)
  }
  handleImgChange(event){
    this.setState({
      file: URL.createObjectURL(event.target.files[0])

    })
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    
  }


  render(){
   const {values,handleChange} = this.props;

    return(
      <div>
      <div className="formContainer">
     <div className="sectionName">Basic Info</div>
      <form>
      <input placeholder="Your Name"type="text"name='name'className="first" onChange={handleChange('name')}defaultValue={values.name}onClick={this.handleClick}></input>

      <input type="file"accept="image/*"onChange={this.handleImgChange}multiple="false"/>

      <input placeholder="Your Occupation"name="occupation"type="text"onChange={handleChange('occupation')}defaultValue={values.occupation}></input>

      <input placeholder=" Your Email"name="email"type="email"onChange={handleChange('email')}defaultValue={values.email}></input>

      <input placeholder="Phone no"name="contactNo"onChange={handleChange('contactNo')}defaultValue={values.contactNo}id="phonNo"></input>
      
      <input placeholder="Your City"name="city"type="text"onChange={handleChange('city')}defaultValue={values.city}></input>

      <div className="btn">
      <button className="next btn"onClick={this.continue}>Next</button>
      </div>
      </form>
      </div>
      <CVTheme name={values.name}imgSrc={this.state.file}occupation={values.occupation}email={values.email}contactNo={values.contactNo}city={values.city}course={values.course}institution={values.institution}State={values.State}skills={values.skills}graduationYear={values.graduationYear}job={values.job}company={values.company}StartDate={values.StartDate}EndDate={values.EndDate}/>

</div>

    )

  }

}

export default BasicInfo;




