import React, { Component } from 'react';

class CVTheme extends Component {

    render() {
        const {name,occupation,email,contactNo,city,course,institution,State,skills,graduationYear,job,company,StartDate,EndDate} = this.props;

        return (
            <div>

            <div className="themeContainer">
         <div className="cvWrapper">
        
    <div id="intro">

    <img src={this.props.imgSrc}alt=""id="pic"></img>
          <h1 id="personName">{name}</h1>
          <div>{occupation}</div>

          </div>
         <div id="contentWrapper">
<div className="section One">
             <h3 className="sectionTitle">Address</h3>
          <div id="mail">{email}</div>
          <div id="phone">{contactNo}</div>       
       <div id="location">{city}</div>
       </div>

       <div className="section Two">
          <h3 className="sectionTitle">Education</h3>
          <div id="course">{course}</div>
          <div id="institute">{institution}</div>
          <div id="clgLocation">{State}</div>
          <div id="gradYear"><span>Graduation year --     </span>{graduationYear}</div>
</div>

<div className="section three">
<h3 className="sectionTitle">Skills</h3>
<div id="skills">{skills}</div>
</div>

<div className="section four">
<h3 className="sectionTitle">Work Experience</h3>
<div id="role"><span>Worked as --  </span>{job}</div>
<div id="company"><span>At  </span>{company}</div>

<div id="startYear"><span>From -- </span>{StartDate}</div>
<div id="endYear"><span>To -- </span>{EndDate}</div>
</div>
</div>

</div>
</div>
<button id="print"onClick={() => window.print()}>Print CV</button>
</div>
        )
    }
}
export default CVTheme;




