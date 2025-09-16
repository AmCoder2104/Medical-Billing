"use client"; // Only if using Next.js App Router

import Swal from "sweetalert2";
import { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    Swal.fire({
      title: 'Sending...',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_FORMSPREE}`, {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          });
          

      const result = await response.json();

      if (response.ok) {
        Swal.fire("Success!", "Message has been sent successfully.", "success");
        form.reset();
      } else {
        Swal.fire("Error!", "Error sending message. Please try again.", "error");
      }
    } catch (error) {
      Swal.fire("Error!", "Something went wrong!", "error");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Map Section */}
        <div className="w-full h-[400px] md:h-[640px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.9509197414723!2d73.1116342!3d31.4154783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226940221cbeb9%3A0x87aed33b83a332bd!2sEdify%20College%20of%20IT!5e0!3m2!1sen!2s!4v1746438720018!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl w-full h-full"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Form Section */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight mb-4">
            Ready To Get Started?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
          Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut blandit felis odio in turpis. Quisque rhoncus,
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Your Name*</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="Name"
                  required
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Your Email*</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="Email"
                  required
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue"
                />
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Your Contact Number*</label>
              <input
                rows="6"
                placeholder="Write Contact Number"
                name="Number"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">Write Message*</label>
              <textarea
                rows="6"
                placeholder="Write Message"
                name="Message"
                required
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="coolBeans bg-blue hover:bg-blue-hover text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              {loading ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
