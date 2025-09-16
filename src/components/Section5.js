import React from "react";
import Image from "next/image";
import SmallHeading from "./layout/SmallHeading";

const Section5 = () => {
  return (
    <div id="app" className="py-16 px-4 md:px-8 lg:px-16">
      {/* Top Badge */}
      <div className="flex justify-center mb-6">
        <SmallHeading text="Why use our Service" />
      </div>

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 max-w-3xl mx-auto">
        Our Services Are Great for Individuals, Startups, and Enterprises.
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Features */}
        <div className="space-y-8">
          {/* High Usability */}
          <div className="flex">
            <div className="mr-4 p-4 bg-white rounded-lg">
              <div className="w-20 text-blue -mt-5 p-3 border border-blue/30 rounded-xl">
                <Image
                  src="/support.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Front Desk Support
              </h3>
              <p className="text-gray-600 text-sm">
                Front desk support plays a vital role in the smooth operation of
                a medical practice
              </p>
            </div>
          </div>

          {/* Action Reminder */}
          <div className="flex">
            <div className="mr-4 p-4 bg-white rounded-lg">
              <div className="w-20 text-blue -mt-5 p-3 border border-blue/30 rounded-xl">
                <Image
                  src="/medicalcoding.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Medical Coding
              </h3>
              <p className="text-gray-600 text-sm">
                Medical coding is the backbone of the billing process.
              </p>
            </div>
          </div>

          {/* Merge Files */}
          <div className="flex">
            <div className="mr-4 p-4 bg-white rounded-lg">
              <div className="w-20 text-blue -mt-5 p-3 border border-blue/30 rounded-xl">
                <Image
                  src="/MedicalBilling.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Medical Billing
              </h3>
              <p className="text-gray-600 text-sm">
                Our comprehensive medical billing services cover charge entry,
                claim submission.
              </p>
            </div>
          </div>
        </div>

        {/* Center - App Screenshots */}
        <div className="relative flex justify-center items-center">
          <div className="bg-[#d5f2ff] w-64 h-64 rounded-full absolute"></div>
          <div className="relative">
            {/* Two phones overlapping */}
            <div className="absolute left-7 bottom-15 mt-10 transform -translate-x-1/4 -rotate-12 w-100">
              <Image
                src="/wcuThumb1_1.png"
                alt="App Screenshot Dark"
                width={300}
                height={500}
                className="rounded-3xl"
              />
            </div>
            {/* Spacer to provide height */}
            <div className="w-40 h-80"></div>
          </div>
        </div>

        {/* Right Features */}
        <div className="space-y-8">
          {/* Free Live Chat */}
          <div className="flex">
            <div className="mr-4 p-4 bg-white rounded-lg">
              <div className="w-20 text-blue -mt-5 p-3 border border-blue/30 rounded-xl">
                <Image
                  src="/helpdesk.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Patient Help Desk
              </h3>
              <p className="text-gray-600 text-sm">
                We offer reliable, compassionate patient support services,
                assisting patients with billing inquiries.
              </p>
            </div>
          </div>

          {/* Social Share */}
          <div className="flex">
            <div className="mr-4 p-4 bg-white rounded-lg">
              <div className="w-20 text-blue -mt-5 p-3 border border-blue/30 rounded-xl">
                <Image
                  src="/credentialing.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Credentialing
              </h3>
              <p className="text-gray-600 text-sm">
                Credentialing is a critical step for providers to enroll with
                insurance payers and begin receiving reimbursements.
              </p>
            </div>
          </div>

          {/* Custom Shortcuts */}
          <div className="flex">
            <div className="mr-4 p-4 bg-white rounded-lg">
              <div className="w-20 text-blue -mt-5 p-3 border border-blue/30 rounded-xl">
                <Image
                  src="/customShortcuts.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Custom Shortcuts
              </h3>
              <p className="text-gray-600 text-sm">
                There are many variations of passages of Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
