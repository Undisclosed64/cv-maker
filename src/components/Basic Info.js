
import React, { Component } from 'react';
import CVTheme from './CVTheme';
class BasicInfo extends Component{
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    
  }
 

  /*
handleSubmit = (e) => {
    const { name,email,phoneNo } = this.state;
    e.preventDefault();
    alert(`
    ____Your Details____\n
    Email : ${email}
    Name : ${name}
    Phone No : ${phoneNo}
  `)
}

handleChange = (e) => {
  this.setState({
 [e.target.name]: e.target.value
  })
}
*/


  render(){
   const {values,handleChange} = this.props;

    return(
      <div>
      <div className="formContainer">
     <div className="sectionName">Basic Info</div>
      <form /*onSubmit={this.handleSubmit}*/>
      
      <input placeholder="Your Name"type="text"name='name'className="first" onChange={handleChange('name')}defaultValue={values.name}onClick={this.handleClick}></input>

      <input placeholder="Your Occupation"name="occupation"type="text"onChange={handleChange('occupation')}defaultValue={values.occupation}></input>

      <input placeholder=" Your Email"name="email"type="email"onChange={handleChange('email')}defaultValue={values.email}/*value={email}*/></input>

      <input placeholder="Phone no"name="contactNo"onChange={handleChange('contactNo')}defaultValue={values.contactNo}></input>
      
      <input placeholder="Your City"name="city"type="text"onChange={handleChange('city')}defaultValue={values.city}/*value={email}*/></input>

      <div className="btn">
      <button className="next btn"onClick={this.continue}>Next</button>
      </div>
      </form>

      </div>
      <CVTheme name={values.name}occupation={values.occupation}email={values.email}contactNo={values.contactNo}city={values.city}course={values.course}institution={values.institution}State={values.State}skills={values.skills}graduationYear={values.graduationYear}job={values.job}company={values.company}StartDate={values.StartDate}EndDate={values.EndDate}/>

</div>

    )

  }

}

export default BasicInfo;




