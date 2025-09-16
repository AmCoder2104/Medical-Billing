// components/FeaturesSection.jsx
"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import SmallHeading from "./layout/SmallHeading";
import Link from "next/link";

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full px-4 py-3  bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="md:pl-10">
          <SmallHeading text="Our Features" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-4">
            Our Features Will Help To Improve Business
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly.
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
              <span className="text-gray-700">Incerase Revenue</span>
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
              <span className="text-gray-700">Reduce Cost</span>
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
              <span className="text-gray-700">Save time and money</span>
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
              <span className="text-gray-700">Seamless patient experience</span>
            </div>
          </div>
         <Link href="/contact" >
         <button className="coolBeans bg-blue text-white font-semibold py-3 px-6 rounded-full inline-flex items-center hover:bg-blue-hover transition">
            Start Collaborator <FaArrowRight className="ml-2" />
          </button>
         </Link>
        </div>

        {/* Right Cards */}
        <div className="mt-0 md:mt-24 relative h-[450px] md:h-[500px]">
          {/* Card 1 */}
{/* Card 1 */}
<div className="absolute top-0 right-1 md:right-10 w-full max-w-sm bg-white rounded-xl shadow-md border border-gray-200 p-5 z-30">
  <h3 className="font-semibold text-lg text-gray-900 mb-1">
    Claims Management
  </h3>
  <p className="text-sm text-gray-500">Efficient claim processing and follow-ups</p>
  <hr className="my-3 text-gray-200" />
  <div className="flex justify-between items-center text-sm text-gray-500">
    <span>Medify</span>
    <div className="flex -space-x-2">
      <Image
        src="/avatar1.jpg"
        alt="avatar1"
        width={28}
        height={28}
        className="rounded-full border-2 border-white"
      />
      <Image
        src="/avatar2.jpg"
        alt="avatar2"
        width={28}
        height={28}
        className="rounded-full border-2 border-white"
      />
    </div>
  </div>
</div>

{/* Card 2 */}
<div className="absolute top-40 md:top-32 left-1 md:left-20 w-full max-w-sm bg-white rounded-xl shadow-md border border-gray-200 p-5 z-20">
  <h3 className="font-semibold text-lg text-gray-900 mb-1">
    Revenue Cycle Analysis
  </h3>
  <p className="text-sm text-gray-500">Optimize your billing and collections</p>
  <hr className="my-3 text-gray-200" />
  <div className="flex justify-between items-center text-sm text-gray-500">
    <span>Medify</span>
    <div className="flex -space-x-2">
      <Image
        src="/avatar1.jpg"
        alt="avatar1"
        width={28}
        height={28}
        className="rounded-full border-2 border-white"
      />
      <Image
        src="/avatar2.jpg"
        alt="avatar2"
        width={28}
        height={28}
        className="rounded-full border-2 border-white"
      />
    </div>
  </div>
</div>

{/* Card 3 */}
<div className="absolute top-80 md:top-64 left-1 w-full max-w-sm bg-white rounded-xl shadow-md border border-gray-200 p-5 z-10">
  <h3 className="font-semibold text-lg text-gray-900 mb-1">
    Dedicated Billing Support
  </h3>
  <p className="text-sm text-gray-500">Personalized assistance for your practice</p>
  <hr className="my-3 text-gray-200" />
  <div className="flex justify-between items-center text-sm text-gray-500">
    <span>Medify</span>
    <div className="flex -space-x-2">
      <Image
        src="/avatar1.jpg"
        alt="avatar1"
        width={28}
        height={28}
        className="rounded-full border-2 border-white"
      />
      <Image
        src="/avatar2.jpg"
        alt="avatar2"
        width={28}
        height={28}
        className="rounded-full border-2 border-white"
      />
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
}
