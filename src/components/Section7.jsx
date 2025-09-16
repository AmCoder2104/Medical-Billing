"use client";
import React, { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import SmallHeading from "./layout/SmallHeading";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(2); // Third FAQ is open by default (index 2)

  const faqs = [
    {
      question: "What is medical billing?",
      answer:
        "Medical billing is the process of submitting and following up on claims with health insurance companies to receive payment for services provided by healthcare providers.",
    },
    {
      question: "Why should I outsource my medical billing?",
      answer:
        "Outsourcing medical billing reduces administrative burdens, minimizes billing errors, improves cash flow, and allows your staff to focus more on patient care.",
    },
    {
      question: "How do you ensure accuracy in billing and coding?",
      answer:
        "We employ certified medical coders and experienced billing professionals who stay updated with the latest ICD-10, CPT, and HCPCS codes.",
    },
    {
      question: "Need An Easy Way To Manage Your Projects?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly",
    },
    {
      question: "Seeking A User-Friendly Solution For Your Team?",
      answer:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly",
    },
  ];

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  return (
    <div id="faqs" className="flex flex-col md:flex-row w-full max-w-7xl mx-auto py-12  md:pl-8 gap-8">
      {/* Left section - FAQ content */}
      <div className="w-full mt-16 md:w-1/2 flex flex-col px-4 md:px-0  md:mx-10">
        <div className="mb-8">
          <SmallHeading text="FAQs" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 my-4">
            Frequently Ask Questions
          </h2>
          <p className="text-gray-600">
            There are many variations of medical case studies available, but the
            majority have undergone modifications in some form—whether through
            anecdotal commentary or misinterpreted terminology—which may not
            appear clinically accurate. There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which dont look
            even slightly
          </p>
        </div>

        <div className="space-y-4 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-medium text-gray-800">{faq.question}</h3>
                <div className="text-indigo-600">
                  {openFAQ === index ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </div>
              </div>
              {openFAQ === index && (
                <div className="mt-2 text-gray-600 text-sm">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right section - Banking dashboard images */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[600px] overflow-hidden">
        {/* Main dashboard image */}
        <div className="absolute top-0 right-[-50px] w-full h-[600px] rounded-3xl overflow-hidden bg-white shadow-lg">
          <img
            src="/dashboard2.png" // Place the image in public/images/faq.png
            alt="Dashboard"
            layout="fill"
            // objectFit="cover"
            style={{ objectFit: "cover" }}
            className="rounded-3xl h-full"
          />
        </div>

        {/* Small dashboard image in the foreground */}
        <div className="moving-img absolute bottom-16 left-[-70px] w-1/2 h-full  transform translate-x-1/4 translate-y-1/4">
          <img
            src="https://ex-coders.com/html/niotech/assets/images/faq/faqThumb1_1.png" // Place the image in public/images/faq2.png
            alt="Dashboard"
            layout="fill"
            style={{ objectFit: "cover" }}
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
