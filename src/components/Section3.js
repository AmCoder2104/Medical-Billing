"use client";
import React from "react";
import Image from "next/image";
import SmallHeading from "./layout/SmallHeading";

const Section3 = () => {
  return (
    <section className="h-full w-full py-16 px-4 overflow-hidden relative mt-7 md:mt-0">
      {/* Main Heading */}
      <div className="text-center mb-20 md:mt-0 mt-3">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 max-w-4xl mx-auto">
        Let Us Handle Your Medical Billing, So You Can Focus on Patient Care!
        </h2>
      </div>

      {/* How It Work Badge */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
        <SmallHeading text="How It Work" />
      </div>

      {/* Steps Container with wavy line */}
      <div className="relative max-w-6xl mx-auto mt-20">
        <Image
          className="hidden md:block text-blue-700"
          src="/workProcessShape1_1.png"
          alt="img"
          height={1000}
          width={1300}
        />

        {/* Steps */}
        <div className="flex flex-col md:flex-row justify-between items-start relative z-10 -mt-50">
          {/* Step 1 */}
          <div className="w-full md:w-1/3 text-center px-4 mb-10 mt-50 md:mt-0 md:mb-0">
            <div className="bg-blue-100 text-blue px-4 py-1 rounded-full inline-block mb-4">
            1. The process of pre-billing


            </div>
         
            <p className="text-gray-600 text-[14px]">
   
This covers making appointments, confirming insurance, and registering patients. 

            </p>
          </div>

          {/* Step 2 */}
          <div className="w-full md:w-1/3 text-center px-4 mb-16 md:mb-0  mt-5 md:mt-20">
            <div className="bg-blue-100 text-blue px-4 py-1 rounded-full inline-block mb-4">
            2. Creation and Submission of Claims

            </div>
           
            <p className="text-gray-600">
            Medical coders apply standardised codes to the procedures and diagnosis following the patient visit. 

            </p>
          </div>

          {/* Step 3 */}
          <div className="w-full md:w-1/3 text-center px-4">
            <div className="bg-blue-100 text-blue px-4 py-1 rounded-full inline-block mb-4">
            Follow-up After Billing

            </div>
           
            <p className="text-gray-600">
            Payments are posted and any denials are resolved when claims are processed. In order to guarantee complete reimbursement, the billing team follows upon it.

            </p>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      {/* <div className="absolute bottom-5 right-5">
        <button className="bg-blue text-white p-3 rounded-md shadow-md hover:bg-purple-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div> */}
    </section>
  );
};

export default Section3;
