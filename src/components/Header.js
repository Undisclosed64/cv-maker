import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiFillBuild } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <header className="flex justify-between px-1 py-4 md:px-10 items-center">
        <div className="font-bold text-2xl md:text-3xl flex items-center gap-2">
          <AiFillBuild />
          <div> ResumeForge</div>
        </div>
        <div className="btn-wrapper rounded-full text-brightWhite bg-brightPurple px-4 py-3 flex items-center gap-2 font-medium">
          <a className="" href="#create-resume">
            Create Resume
          </a>
          <AiOutlineArrowRight />
        </div>
      </header>
    </div>
  );
};
export default Header;
