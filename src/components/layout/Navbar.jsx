"use client";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef(null);

  const isActive = (path) =>
    path === "/portfolio"
      ? pathname.startsWith("/portfolio")
      : pathname === path;

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div>
      <nav className="px-5 lg:px-10 2xl:px-14 w-full py-2 flex items-center justify-between gap-5 absolute left-0 right-0 top-0 z-50">
        <Link href="/" className="bg-transparent">
          <img
            src="/logo 1.png"
            alt="Medify Logo"
            className="h-10 w-[120px] sm:w-[140px] md:w-60 object-left object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-[16px] font-[700]">
          <Link
            href="/"
            className="text-blue hover:text-blue-hover duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-blue hover:text-blue-hover duration-300"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-blue hover:text-blue-hover duration-300"
          >
            Contact Us
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <button className="md:hidden text-blue" onClick={toggleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Get Started Button */}
          <Link
            href="/contact"
            className="coolBeans hidden md:flex items-center duration-300 bg-blue hover:bg-blue-hover active:scale-95 text-white px-4 py-2 rounded-full font-medium"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen p-6 w-[250px] transform transition-transform duration-300 z-[100] bg-gradient-to-b from-purple-50 to-blue-50 bg-[linear-gradient(90deg,_#F6F3FF,_#DEF0F0)] shadow-lg ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="/" className="bg-transparent">
          <img
            src="/logo 1.png"
            alt="Medify Logo"
            className="h-10 w-[120px] sm:w-[140px] md:w-60 object-left object-contain"
          />
        </Link>

        <Link
          href="/"
          className={`block py-1.5 font-semibold mt-5 ${isActive("/") ? "text-blue" : "text-black"}`}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`block py-1.5 font-semibold ${
            isActive("/about") ? "text-blue" : "text-black"
          }`}
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="/contact"
          className={`block py-1.5 font-semibold ${
            isActive("/contact") ? "text-blue" : "text-black"
          }`}
          onClick={() => setIsOpen(false)}
        >
          Contact Us
        </Link>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#00000056] bg-opacity-30 z-[90]"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
