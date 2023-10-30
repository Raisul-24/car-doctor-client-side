/* eslint-disable react/no-unescaped-entities */
// import React from 'react';
import person from "/images/about_us/person.jpg"
import parts from "/images/about_us/parts.jpg"


const AboutUs = () => {
   return (
      <div className="hero min-h-screen mb-10">
         <div className="hero-content flex-col lg:flex-row mb-10 md:mb-0 ">
            <div className="lg:w-1/2 relative mr-10">
            <img src={person} className="w-4/5 rounded-lg shadow-2xl h-[460px]" />
            <img src={parts} className="w-3/5 rounded-lg shadow-2xl absolute top-1/2 right-2 h-[320px] border-8 border-white" />
            </div>
            <div className="lg:w-[450px] ">
               <h1 className="text-3xl text-red-600 font-extrabold py-6">About Us</h1>
               <h1 className="text-5xl font-extrabold">We are qualified <br /> & of experience <br /> in this field</h1>
               <p className="py-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
               <p className="pb-8">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
               <button className="btn btn-primary bg-red-500 border-0">Get More Info</button>
            </div>
         </div>
      </div>
   );
};

export default AboutUs;