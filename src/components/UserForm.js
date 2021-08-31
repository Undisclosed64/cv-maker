import React, { Component } from 'react'
import BasicInfo from './Basic Info';
import Education from './Education';
import WorkExp from './WorkExp';
export class UserForm extends Component {
    state = {
        step:1,
        name:'',
        email:'',
        phone:'',
        course:'',
        institution:'',
        skills:'',
        graduationYear:'',
        job:'',
        company:'',
        city:'',
        StartDate:'',
        EndDate:'',


    }
    //proceed to next step
    nextStep = () => {
      const {step}  = this.state;
      this.setState({
          step: step + 1
      }) 
    }
    prevStep = () => {
        const {step}  = this.state;
        this.setState({
            step: step - 1
        }) 
      }

      handleChange = input => e => {
          this.setState({[input]:e.target.value})
      }

    render() {
        const {step}  = this.state;
const {name,email,phone,course,institution,State,skills,graduationYear,job,company,city,StartDate,EndDate} = this.state;
const values = {name,email,phone,course,institution,State,skills,graduationYear,job,company,city,StartDate,EndDate};
        
switch(step){
    case 1:
        return(
            
            /*{we are passing prop here cos we need to access next step in this one}
            1)FormUserDetails
            2)*/
            <BasicInfo nextStep = {this.nextStep}handleChange={this.handleChange}values={values}
            />
        );
case 2:
    return(
    <Education nextStep = {this.nextStep}prevStep={this.prevStep}handleChange={this.handleChange}values={values}
    />
);    
case 3:
    return(
        <WorkExp nextStep = {this.nextStep}prevStep={this.prevStep}handleChange={this.handleChange}values={values}
        />
    );    
        case 4:
            return <div>Success</div>
            default:
                return <div>hii</div>
        }



};

};

export default UserForm;
