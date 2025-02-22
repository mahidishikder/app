import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div
      id="home"
      className="bg-cover  bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/lilac-acrylic-texture-background-wallpaper_53876-104015.jpg?t=st=1740202514~exp=1740206114~hmac=6cf7699c2949083ff099e53ff79f17741326f332aeab8a2eeeae8488d2ddbbd0&w=1060')",
      }}
    >
      <div className="flex flex-col md:flex-row gap-20 max-w-7xl py-16 lg:py-32 mx-auto items-center lg:justify-between  px-4">
        {/* Text Content */}
        <div className="max-w-4xl text-center md:text-left md:mr-12">
          <h1 className="lg:text-5xl text-4xl  font-bold md:font-extrabold mb-6  leading-tight">
            CODE NEXUS
            <br />
           <span className="text-[#422AD5]">
           <Typewriter 
              words={["FOR CODE NEXUS FOR"]}
              loop={0} // ইনফিনিট লুপ চলবে
              cursor
              cursorStyle="_"
              typeSpeed={100} // টাইপিং স্পিড
              deleteSpeed={100} // ডিলিট স্পিড
              delaySpeed={2000} // প্রতিটা টেক্সটের মাঝে দেরি
            />
           </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 text-gray-500">
            ম্যাচ 3 গেমটি এই আশ্চর্যজনক গেমটি খেলে আপনার মোবাইল ফোন <br /> থেকে অর্থ উপার্জন করার জন্য। এখনই ডাউনলোড করুন!
          </p>
          <button className="btn btn-primary px-20 py-5 rounded-full">
            DOWNLOAD APK <GoArrowUpRight className="text-2xl" />
          </button>
        </div>

        {/* Image */}
        <div className="mt-10 md:mt-0">
          <img
            src="https://demo-2.busymart24.shop/frontend/images/header-phone.png"
            alt="Phone"
            className="max-w-full h-auto md:w-[30rem] animate-float"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
