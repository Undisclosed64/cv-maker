import React, { Component } from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { FaUserGraduate, FaUniversity, FaCalendar } from "react-icons/fa";

class CVTheme extends Component {
  render() {
    const {
      name,
      imgSrc,
      occupation,
      email,
      contactNo,
      city,
      course,
      institution,
      State,
      skills,
      graduationYear,
      job,
      company,
      StartDate,
      EndDate,
    } = this.props;

    return (
      <div
        className="flex justify-center flex-col py-20 px-2 items-center gap-14"
        id="create-resume"
      >
        <h2 className="text-3xl w-3/4 md:w-1/3 text-black font-semibold text-center leading-relaxed">
          Create your best resume now and download in seconds
        </h2>

        <div className="cvWrapper flex w-full sm:w-5/6 px-1 md:w-1/2">
          <div id="intro">
            <img src={imgSrc} alt="" id="pic"></img>
            <h1 id="personName" className="font-bold">
              {name}
            </h1>
            <div id="occupation">{occupation}</div>
          </div>
          <div id="contentWrapper">
            <div className="section One flex flex-col gap-3">
              <h3 className="sectionTitle">Address</h3>
              <div id="mail" className="flex items-baseline">
                <AiOutlineMail className="icon" />
                {email}
              </div>
              <div id="phone" className="flex items-baseline">
                <AiOutlinePhone className="icon" />
                {contactNo}
              </div>
              <div id="location" className="flex items-baseline">
                <MdLocationOn className="icon" />
                {city}
              </div>
            </div>

            <div className="section Two gap-3 flex flex-col">
              <h3 className="sectionTitle">Education</h3>
              <div id="course" className="flex items-baseline">
                <FaUserGraduate className="icons" />
                {course}
              </div>
              <div id="institute" className="flex items-baseline">
                <FaUniversity className="icons" />
                {institution}
              </div>
              <div id="clgLocation" className="flex items-baseline">
                <MdLocationOn className="icons" />
                {State}
              </div>
              <div id="gradYear" className="flex items-baseline">
                <FaCalendar className="icons" />
                Graduation year -- {graduationYear}
              </div>
            </div>

            <div className="section three">
              <h3 className="sectionTitle">Skills</h3>
              <div id="skills">{skills}</div>
            </div>

            <div className="section four">
              <h3 className="sectionTitle">Work Experience</h3>
              <div id="role">
                <span>Worked as -- </span>
                {job}
              </div>
              <div id="company">
                <span>At </span>
                {company}
              </div>

              <div id="startYear">
                <span>From -- </span>
                {StartDate}
              </div>
              <div id="endYear">
                <span>To -- </span>
                {EndDate}
              </div>
            </div>
          </div>
        </div>
        <button
          id="print"
          onClick={() => window.print()}
          className="bg-brightPurple py-2 px-3 text-brightWhite w-48 rounded-sm capitalize"
        >
          Print CV
        </button>
      </div>
    );
  }
}
export default CVTheme;
