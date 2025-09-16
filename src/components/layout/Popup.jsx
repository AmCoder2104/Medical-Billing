"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const Popup = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBanner(true);
    }, 3000);
  }, []);

  useEffect(() => {
    if (showBanner) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "visible";
    }
  }, [showBanner]);

  return (
    <>
      <div className={showBanner ? "popupModal show" : "popupModal"}>
        <Link
          href={"/contact"}
          className={`${
            showBanner ? "popUpBanner show" : "popUpBanner"
          } relative`}
          onClick={() => setShowBanner(false)}
        >
          <span className="relative w-fit rounded-xl overflow-hidden">
            <IoClose
              onClick={() => setShowBanner(false)}
              className="text-white text-[40px] absolute bg-black/30 top-0 right-0 cursor-pointer"
            />
            <img
              src="/popup.jpg"
              alt=""
              width={600}
              height={600}
              className="w-full mx-auto rounded-xl"
            />
          </span>
        </Link>
      </div>
    </>
  );
};

export default Popup;
