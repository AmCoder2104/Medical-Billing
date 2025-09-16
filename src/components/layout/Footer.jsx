import {
  FaApple,
  FaAndroid,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#f9f9fb] overflow-hidden pt-16 pb-10 px-6 md:px-12 mt-7">
      {/* Background Circles */}
      <div className="absolute -bottom-20 -left-32 w-[500px] h-[500px] bg-[#d5f2ff] rounded-full opacity-50 z-0"></div>
      <div className="absolute -top-24 -right-32 w-[700px] h-[700px] bg-[#d5f2ff] rounded-full opacity-50 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo 1.png" alt="logo" width={120} height={100} />
            {/* <h2 className="text-xl font-semibold text-gray-900">Medify</h2> */}
          </div>
          <p className="text-sm mb-6">
          We offer comprehensive medical billing solutions designed to help healthcare practices establish patient-centered, cost-effective operations and much more.
          </p>
          {/* <div className="flex items-center gap-4 flex-wrap">
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm">
              <FaApple />
              App Store
            </button>
            <button className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-full text-sm">
              <FaAndroid />
              Play Store
            </button>
          </div> */}
        </div>

        {/* Pages */}
        <div className="md:ml-26">
          <h4 className=" text-lg font-semibold text-gray-900 mb-4 relative">
            Pages
            <span className="absolute left-0 bottom-[-6px] w-10 h-[2px] bg-blue block"></span>
          </h4>
          <ul className="mt-7 space-y-5 text-sm">
            <Link href="/"  >
            <li className="my-5 transition-all duration-200 hover:text-blue hover:translate-x-1 cursor-pointer">
              Home
            </li>
            </Link>
           <Link href="/about">
           <li className="my-5 transition-all duration-200 hover:text-blue hover:translate-x-1 cursor-pointer">
              About Us
            </li>
           </Link>
           <Link href="#services">
           <li className=" my-5 transition-all duration-200 hover:text-blue hover:translate-x-1 cursor-pointer">
              Services
            </li>
           </Link>
           <Link href="#faqs">
        
          <li className="my-5 transition-all duration-200 hover:text-blue hover:translate-x-1 cursor-pointer">
              FAQs
            </li>
     
           </Link>
           <Link href="#testimonials">
           <li className="my-5 transition-all duration-200 hover:text-blue hover:translate-x-1 cursor-pointer">
              Testimonials
            </li>
           </Link>
           <Link href="/contact">
           <li className="my-5 transition-all duration-200 hover:text-blue hover:translate-x-1 cursor-pointer">
              Contact Us
            </li>
           </Link>
          </ul>
        </div>

        {/* Utility Pages */}
        <div className="md:ml-20">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 relative">
            Utility Pages
            <span className="absolute left-0 bottom-[-6px] w-10 h-[2px] bg-blue block"></span>
          </h4>
          <ul className="mt-7 space-y-5 text-sm">
            <Link href="#why-choose">
            <li className="my-5 transition-all duration-200 hover:text-blue hover:translate-x-1 cursor-pointer">
              Why Choose
            </li>
            </Link>
           {/* <Link href="#app">
           <li className="my-5 transition-all duration-200 hover:text-blue hover:translate-x-1 cursor-pointer">
              Our App
            </li>
           </Link> */}
          
           {/* <Link href="#features">
           <li className="my-5 transition-all duration-200 hover:text-blue hover:translate-x-1 cursor-pointer">
              Features
            </li>
           </Link> */}
           <Link href="/contact">
           <li className="my-5 transition-all duration-200 hover:text-blue hover:translate-x-1 cursor-pointer">
              help
            </li>
           </Link>
           <Link href="/contact">
           <li className="my-5 transition-all duration-200 hover:text-blue hover:translate-x-1 cursor-pointer">
              feedback
            </li>
           </Link>
           <Link href="#service">
            <li className="my-5 transition-all duration-200 hover:text-blue hover:translate-x-1 cursor-pointer">
              Services
            </li>
            </Link>
          </ul>
        </div>

        {/* Contact Box Enlarged */}
        <div className="bg-white shadow-lg rounded-2xl p-8 text-sm text-gray-600 md:col-span-1 w-full">
          <p className="text-xs text-blue font-semibold mb-1">Address</p>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
  Albany, New York, USA
</h4>

          <div className="space-y-2">

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue" />
              <span>info@medify.com</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhone className="text-blue" />
              <span>+001 6520 698 00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-200 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-4 text-sm text-gray-500">
        <p>Copyright © Medify All Rights Reserved</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
  <a href="#">
    <FaFacebookF style={{ color: '#1877F2' }} className="hover:opacity-80 cursor-pointer" />
  </a>
  <a href="#">
    <FaTwitter style={{ color: '#1DA1F2' }} className="hover:opacity-80 cursor-pointer" />
  </a>
  <a href="#">
    <FaLinkedinIn style={{ color: '#0077B5' }} className="hover:opacity-80 cursor-pointer" />
  </a>
  <a href="#">
    <FaInstagram style={{ color: '#E1306C' }} className="hover:opacity-80 cursor-pointer" />
  </a>
</div>

      </div>
    </footer>
  );
}
