
import React, { Component } from 'react';
import HandleBasicInfo from './HandleBasicInfo';

class BasicInfo extends Component{
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
    
  }
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
      <div className="formContainer">
     <div className="sectionName">Basic Info</div>
      <form /*onSubmit={this.handleSubmit}*/>
      
      <input placeholder="Your Name"type="text"name='name'/*value={name}*/className="first" onChange={handleChange('name')}defaultValue={values.name}></input>
    
      <input placeholder=" Your Email"name="email"type="email"onChange={handleChange('email')}defaultValue={values.email}/*value={email}*/></input>
    
      <input placeholder="Phn No"name="phoneNo"type="number"onChange={handleChange('phone')}defaultValue={values.phone}/*value={phoneNo}*/></input>

      <div className="btn">
      <button className="next btn"onClick={this.continue}>Next</button>
      </div>
      </form>
    <HandleBasicInfo name={values.name}email={values.email}phoneNo={values.phone}/>
      </div>


    )
  }
}

export default BasicInfo;




