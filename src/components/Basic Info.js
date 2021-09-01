
import React, { Component } from 'react';
import HandleBasicInfo from './HandleBasicInfo';
import CVTheme from './CVTheme';

class BasicInfo extends Component{
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    
  }
  /*
  handleClick = (e) => {
    console.log('hi');
    this.setState({
      [e.target.name]: e.target.value

    })
     
   }*/
 /*
  constructor(){
    super();
  }

  this.state = {
    name: '',
    email:'',
    phoneNo:''
};

}
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
      
      <input placeholder="Your Name"type="text"name='name'/*value={name}*/className="first" onChange={handleChange('name')}defaultValue={values.name}onClick={this.handleClick}></input>

      <input placeholder="Your Occupation"name="occupation"type="text"onChange={handleChange('occupation')}defaultValue={values.occupation}/*value={email}*/></input>

      <input placeholder=" Your Email"name="email"type="email"onChange={handleChange('email')}defaultValue={values.email}/*value={email}*/></input>
      
      <input placeholder="Your City"name="city"type="text"onChange={handleChange('city')}defaultValue={values.city}/*value={email}*/></input>

      <input placeholder="Phn No"name="phone"type="number"onChange={handleChange('phone')}defaultValue={values.phone}/*value={phoneNo}*/></input>

      <div className="btn">
      <button className="next btn"onClick={this.continue}>Next</button>
      </div>
      </form>

      </div>
      <CVTheme name={values.name}occupation={values.occupation}email={values.email}phone={values.phone}city={values.city}course={values.course}institution={values.institution}State={values.State}skills={values.skills}graduationYear={values.graduationYear}job={values.job}company={values.company}StartDate={values.StartDate}EndDate={values.EndDate}/>

</div>

    )

  }

}

export default BasicInfo;




