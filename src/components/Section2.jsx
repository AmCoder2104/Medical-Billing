"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import SmallHeading from "./layout/SmallHeading";
import Link from "next/link";

const features = [
  "Cost Reduction & Efficiency",
  "Regulatory Compliance.",
  "Comprehensive Audit Services",
];

const Section2 = () => {
  return (
    <section id="why-choose" className="bg-white md:py-16 lg:mx-[30px]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left: Image Block */}
        <div className="relative">
          <div className=" rounded-3xl overflow-hidden p-4">
            <img
              src="https://ex-coders.com/html/niotech/assets/images/about/aboutThumb1_1.png" // Place the image in public/images/girl.png
              alt="App Preview"
              width={300}
              height={400}
              className="w-full h-auto object-contain"
              style={{ width: "600px", height: "500px" }}
              priority
            />
          </div>
          {/* Bottom overlay image */}
          <img
            src="https://ex-coders.com/html/niotech/assets/images/about/aboutThumb1_2.png" // Place the image in public/images/analytics.png
            alt="Analytics"
            width={220}
            height={220}
            style={{ width: "220px", height: "150px" }}
            className="moving-img absolute -bottom-4 left-4 w-40 rounded-xl shadow-lg bg-white"
          />
        </div>

        {/* Right: Text Block */}
        <div className="mt-5 md:mt-0">
          <SmallHeading text="Why Choose Us" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight mt-4">
            Optimize Your Practice with Our Comprehensive Medical Billing
            Solutions
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We offer comprehensive medical billing solutions designed to help
            healthcare practices establish patient-centered, cost-effective
            operations. By outsourcing your medical billing to us, you can lower
            administrative costs, automate workflows, and improve your revenue
            cycle management. There are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some
            form, by injected humour, or randomised words which dont look even
            slightly believable. If you are going to use
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-green-500 mt-1" />
                <span className="text-base text-gray-800">{item}</span>
              </li>
            ))}
          </ul>

         <Link href="/about">
         <button className="coolBeans bg-[#6c63ff] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#584de0] transition">
            Discover More →
          </button>
         </Link>
        </div>
      </div>
    </section>
  );
};

export default Section2;
