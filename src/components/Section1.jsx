'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const clients = [
  { src: 'https://ex-coders.com/html/niotech/assets/images/logo/brandLogo1_3.png', alt: 'Airtable' },
  { src: 'https://ex-coders.com/html/niotech/assets/images/logo/brandLogo1_5.png', alt: 'Razorpay' },
  { src: 'https://ex-coders.com/html/niotech/assets/images/logo/brandLogo1_3.png', alt: 'Dropbox' },
  { src: 'https://ex-coders.com/html/niotech/assets/images/logo/brandLogo1_1.png', alt: 'Contentful' },
  { src: 'https://ex-coders.com/html/niotech/assets/images/logo/brandLogo1_2.png', alt: 'Slack' },
  { src: 'https://ex-coders.com/html/niotech/assets/images/logo/brandLogo1_3.png', alt: 'Shopify' },
];

const ClientCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div  className="pt-10 py-7 bg-white text-center">
      <h2 className="text-2xl md:text-2xl font-semibold mb-8">
        Millions Of Clients Trust Us.
      </h2>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="px-4">
              <img
                src={client.src}
                alt={client.alt}
                width={200}
                height={80}
                className="mx-auto object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientCarousel;
