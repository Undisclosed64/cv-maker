import React, { Component } from 'react'
import BasicInfo from './Basic Info';
import Education from './Education';
import WorkExp from './WorkExp';
import CVTheme from './CVTheme';
export class UserForm extends Component {
    state = {
        step:1,
        name:'Sara David',
        occupation:'Web Developer',
        email:'undisclosed64@gmail.com',
        phone:'+3987652103',
        city:'New York,US',
        course:'Bachelor of Humanities',
        institution:'Stanford University',
        State:'United States',
        skills:'HTML,CSS,JS,REACT',
        graduationYear:'2022',
        job:'Web Developer',
        company:'Facebook',
        StartDate:'12/02/2018',
        EndDate:'01/05/2021',


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
const {name,occupation,email,phone,city,course,institution,State,skills,graduationYear,job,company,StartDate,EndDate} = this.state;
const values = {name,occupation,email,phone,city,course,institution,State,skills,graduationYear,job,company,StartDate,EndDate};

switch(step){
    case 1:
        return(
            
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
