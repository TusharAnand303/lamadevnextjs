import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center mt-5">
        <Image
          src="/about2.jpg"
          width={800}
          height={300}
          alt="about image"
          className="object-cover"
        />
        <div className="absolute bg-[#00D487] p-5 rounded-md">
          <h1 className="text-xl font-semibold text-white">
            About <span className="text-black">Blogmania</span>
          </h1>
        </div>
      </div>

      {/* about context  */}
      <div className="flex justify-center items-center p-20 gap-20">
        <div className="flex flex-col justify-start items-start w-[30%] gap-5">
          <h1 className="text-3xl font-bold">Who Are We ?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae doloremque vero ullam facere ut repellat nam deserunt.
            Dignissimos similique tempore impedit tenetur, nostrum dolore dicta
            veniam, accusamus adipisci ipsum iure? Dignissimos similique tempore
            impedit tenetur, nostrum dolore dicta veniam, accusamus adipisci
            ipsum iure?dicta veniam, accusamus adipisci ipsum iure?
          </p>
        </div>
        <div className="flex flex-col justify-start items-start w-[30%] gap-5">
          <h1 className="text-3xl font-bold">What We do !</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae doloremque vero ullam facere ut repellat nam deserunt.
            Dignissimos similique tempore impedit tenetur, nostrum dolore dicta
            veniam, accusamus adipisci ipsum iure?
          </p>
          <Link href="/contact">
            <button className="text-black font-semibold bg-[#00D487] active:bg-[#248d66] px-6 py-2.5 rounded-lg">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
