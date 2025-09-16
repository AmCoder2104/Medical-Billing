import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <main
      className="mt-[53px] md:mt-[63px] lg:mt-[73px] bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden bg-[linear-gradient(90deg,_#F6F3FF,_#DEF0F0)] flex flex-col items-center justify-center "
      style={{ minHeight: "calc(100vh - 73px)" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: "url('/bg.jpg')" }} // Replace with your actual image path
      ></div>
      {/* Full black overlay with smooth fade */}
      <div className="absolute inset-0 bg-black opacity-70 transition-opacity duration-1000"></div>
      {/* <div className="absolute bottom-32 right-32 text-gray-300">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L14.5 9.5H22L16 14.5L18 22L12 17.5L6 22L8 14.5L2 9.5H9.5L12 2Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div> */}

      {/* <div className="absolute right-12 top-1/2 text-gray-300">
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L14.5 9.5H22L16 14.5L18 22L12 17.5L6 22L8 14.5L2 9.5H9.5L12 2Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div> */}

      <section className="mx-auto px-5 lg:px-10 2xl:px-14 py-0 relative pb-10 lg:pb-14 z-10 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 pb-5">
            {/* News badge */}
            <div className="inline-flex items-center  bg-blue-100 text-sm md:text-base lg:text-lg pl-2 pr-3 py-2 rounded-full shadow-sm">
              <span className="bg-white text-gray-800 font-semibold px-3 py-1 rounded-full mr-2">
                News!
              </span>
              <span className="text-blue-hover font-medium px-2">
                Find Your Solution 🔥
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Medical Billing Services
            </h1>

            {/* Description */}
            <p className="text-white max-w-xl text-sm md:text-base">
              We offer comprehensive medical billing solutions designed to help
              healthcare practices establish patient-centered, cost-effective
              operations There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some form,
              by injected humour, or randomised words which dont look even
              slightly believable. If you are going to use a passage.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              <Link
                href="/contact"
                className="coolBeans flex items-center bg-blue hover:bg-blue-hover text-white px-6 py-2.5 rounded-full font-medium"
              >
                Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="coolBeanss flex items-center border border-gray-300 hover:border-white hover:bg-black  hover:text-white-hover text-white px-6 py-2.5 rounded-full font-medium duration-500"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center flex-wrap gap-y-4 sapce-x-4 md:space-x-8 pt-4">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <Image
                    src="/Pak.png"
                    alt="Customer"
                    width={120}
                    height={120}
                    className="rounded-full w-[90px] md:w-[120px] "
                  />
                  {/* <Image
                    src="/side.png"
                    alt="Customer"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  />
                  <Image
                    src="/side.png"
                    alt="Customer"
                    width={40}
                    height={40}
                    className="rounded-full border-2 border-white"
                  /> */}
                </div>
                <div className="ml-4">
                  <div className="font-bold text-white">29+</div>
                  <div className="text-sm text-white">Happy Customers</div>
                </div>
              </div>

              <div className="hidden md:block w-px h-12 bg-gray-300"></div>

              <div>
                <div className="font-bold text-white">4.8/5</div>
                <div className="flex text-yellow-400">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span className="ml-1 text-sm text-white">Rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image with gradient behind */}
          <div className="relative">
            {/* Gradient circle - positioned behind the image */}
            {/* <div className="absolute w-[500px] h-[480px] rounded-full bg-[#b4e7ff] -top-20 -right-20 z-0 mt-55"></div> */}

            {/* Image - positioned in front with higher z-index */}
            {/* <div className="relative z-10 ">
              <Image
                src="/side.png"
                alt="Mobile App"
                width={400}
                height={600}
                className="mx-auto h-[300px] md:h-[600px] w-[900px] mr-[-120px] object-contain object-bottom"
              />
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
