import React from "react";

export const Home = () => {
  return (
    <section className="flex justify-center bg-lightGray py-24 px-2 flex-col items-center gap-5 pb-28">
      <h1 className="text-4xl text-center w-5/6 md:w-3/5 lg:w-1/2 text-black leading-normal font-semibold">
        Create a job winning <span>resume</span> in seconds. Get hired fast!
      </h1>
      <p className="text-center text-lg w-5/6 md:w-3/5 text-darkGray">
        Use our prebuilt template to create a resume in seconds.
      </p>
    </section>
  );
};
