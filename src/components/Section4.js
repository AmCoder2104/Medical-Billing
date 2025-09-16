import React from "react";
import Image from "next/image";
import SmallHeading from "./layout/SmallHeading";
import Link from "next/link";
const Section4 = () => {
  return (
    <div id="services" className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="md:w-1/2 px-4 md:px-0 mb-8 md:mb-0">
        <div className="mb-6 flex items-center gap-2">
          <SmallHeading text="Our Services" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Your Trusted Partner in Medical Billing & Revenue Cycle Management
        </h2>
        <p className="text-gray-600 mb-8">
          As your trusted medical billing solutions partner, we understand that
          a well-managed revenue cycle is essential to the success of any
          healthcare practice. With years of experience in Revenue Cycle
          Management, our experts deliver tailored, high-quality services that
          reduce overhead costs, improve collections, and allow you to focus on
          patient care.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full p-1 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-700">End-to-End Billing Support</span>
          </div>
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full p-1 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-700">Customized CRM Solutions</span>
          </div>
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full p-1 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-700">Technology-Driven Efficiency</span>
          </div>
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full p-1 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-700">Complete Claims Management</span>
          </div>
        </div>
       <Link href="/contact">
       <button className="coolBeans">Contact Now →</button>
       </Link>
      </div>

      {/* Right Content - App Screenshots */}
      <div className="md:w-1/2 flex justify-center relative">
        <div className="relative w-90 md:w-104 h-110 md:h-124 px-4 ">
          {/* Replace with your actual image paths when you have them */}
          <div className="absolute left-0 top-0 transform -rotate-6 z-10">
            <Image
              src="/advantageThumb1_1-removebg-preview.png"
              alt="App Screenshot 1"
              width={250}
              height={500}
              className="rounded-3xl"
            />
          </div>
          <div className="absolute right-0 top-8 transform rotate-6 z-20">
            <Image
              src="/advantageThumb1_2-removebg-preview.png"
              alt="App Screenshot 2"
              width={250}
              height={500}
              className="rounded-3xl"
            />
          </div>
          {/* Purple circle background */}
          <div className="absolute w-94 h-94 bg-[#d5f2ff] rounded-full -right-5 top-16 z-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
