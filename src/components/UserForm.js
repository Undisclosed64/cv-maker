
import React, { Component } from 'react'
import BasicInfo from './Basic Info';
import Education from './Education';
import WorkExp from './WorkExp';
import CVTheme from './CVTheme';
import img from './girl.jpg'; 
 import { BiArrowBack } from "react-icons/bi";






export class UserForm extends Component {    
    state = {
        step:1,
        name:'Sara David',
        file: img, 
        occupation:'Web Developer',
        email:'saraa@gmail.com',
        contactNo:'+3987652103',
        city:'New York,US',
        course:'Bachelor in Humanities',
        institution:'Stanford University',
        State:'United States',
        skills:'HTML,CSS,JS,REACT',
        graduationYear:'2022',
        job:'Web Developer',
        company:'Facebook',
        StartDate:'12/02/2018',
        EndDate:'01/05/2021',


    }
    handleImgChange = (event) =>{
        this.setState({
          file: URL.createObjectURL(event.target.files[0])
    
        })
      }
    
    //proceed to next step
    nextStep = () => {
      const {step}  = this.state;
      this.setState({
          step: step + 1
      }) 
    }
    //go back 
    prevStep = () => {
        const {step}  = this.state;
        this.setState({
            step: step - 1
        }) 
      }

      handleChange = input => e => {
          this.setState({[input]:e.target.value})
      }
      handleViewCV = (e) =>{
e.preventDefault();
      }

    render() {

        const {step}  = this.state;
const {name,file,occupation,email,contactNo,city,course,institution,State,skills,graduationYear,job,company,StartDate,EndDate} = this.state;
const values = {name,file,occupation,email,contactNo,city,course,institution,State,skills,graduationYear,job,company,StartDate,EndDate};

switch(step){
    case 1:
        return(
            
            <BasicInfo nextStep = {this.nextStep}handleChange={this.handleChange}handleImgChange={this.handleImgChange}values={values}
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
        return <button onClick={this.nextStep}id="viewBtn">View CV</button>
    case 5:
        return(
            <section>
            <a href="/" id="backBtn">
                <BiArrowBack/>
                </a>
            <CVTheme name={values.name}imgSrc={this.state.file}occupation={values.occupation}email={values.email}contactNo={values.contactNo}city={values.city}course={values.course}institution={values.institution}State={values.State}skills={values.skills}graduationYear={values.graduationYear}job={values.job}company={values.company}StartDate={values.StartDate}EndDate={values.EndDate}/>
            </section>
        );

    default:
        //


    }
}
          

}
export default UserForm;