// components/TestimonialSection.jsx

"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { FaQuoteRight, FaStar } from "react-icons/fa";
import SmallHeading from "./layout/SmallHeading";

const testimonials = [
  {
    name: "Sarah Thompson,",
    role: " Family Medicine, Dr.",
    image:
      "https://snapynow.com/wp-content/uploads/indian-girl-photos_71.webp",
    rating: 5,
    text: "The finest choice we made was to contract with their team to handle our billing. We no longer have to worry about billing problems or claim denials, and our collections have greatly improved.",
  },
  {
    name: "James M.",
    role: " Clinic Administrator",
    image:
      "https://ex-coders.com/html/niotech/assets/images/testimoial/testimonialProfileThumb1_1.jpg",
    rating: 5,
    text: "They are excellent! They helped reduce our administrative costs and streamline revenue cycles, allowing us to focus more on patient care while they handle billing.",
  },
  {
    name: "Naveed Ali",
    role: "Internal Medicine Dr",
    image:
      "https://ex-coders.com/html/niotech/assets/images/testimoial/testimonialProfileThumb1_3.jpg",
    rating: 5,
    text: "We have a clear idea of our financial health thanks to the billing audit they conducted. Their staff is always aware of payer requirements, responsive, and transparent.",
  },
  {
    name: "Emily Rogers",
    role: "Paediatrician",
    image:
      "https://ex-coders.com/html/niotech/assets/images/testimoial/testimonialProfileThumb1_2.jpg",
    rating: 5,
    text: "There are many variations of passages of Lorem Ipsum available,a but chiropractor like majority have a suffered alteration in some form, by injected humour,",
  },
  // {
  //   name: "Adam Jones",
  //   role: "Team Leader",
  //   image:
  //     "https://ex-coders.com/html/niotech/assets/images/testimoial/testimonialProfileThumb1_1.jpg",
  //   rating: 5,
  //   text: "There are many variations of passages of Lorem Ipsum available,a but chiropractor like majority have a suffered alteration in some form, by injected humour,",
  // },
  // {
  //   name: "Jacob Jones",
  //   role: "Team Leader",
  //   image:
  //     "https://ex-coders.com/html/niotech/assets/images/testimoial/testimonialProfileThumb1_3.jpg",
  //   rating: 5,
  //   text: "There are many variations of passages of Lorem Ipsum available,a but chiropractor like majority have a suffered alteration in some form, by injected humour,",
  // },
];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default function TestimonialSection() {
  return (
    <div id="testimonials" className="bg-gradient-to-r from-[#d5f2ff] to-blue-100 py-16  rounded-3xl px-4 md:px-10">
      <div className="text-center mb-10">
        <SmallHeading text="Testimonial" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
          What Our Clients Say?
        </h2>
      </div>

      <Slider {...settings}>
        {testimonials.map((item, idx) => (
          <div key={idx} className="p-5">
            <div className="bg-white p-6 rounded-xl shadow-md h-[300px] lg:h-[270px] flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <div className="flex items-center text-yellow-400 mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {item.text}
              </p>
              <div className="text-right text-blue text-xl">
                <FaQuoteRight />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
