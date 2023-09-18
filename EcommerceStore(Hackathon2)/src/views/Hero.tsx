import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import Image from "next/image";
import heroImage from "public/heroImg.webp";
import herologo1 from "public/herologo1.webp";
import herologo2 from "public/herologo2.webp";
import herologo3 from "public/herologo3.webp";
import herologo4 from "public/herologo4.webp";

const Hero = () => {
  return (
    // <section className="mt-16 py-4 flex flex-col md:flex-row gap-y-16 md:gap-x-32 justify-center md:justify-evenly items-center">
    <section className="mt-32 py-4 flex flex-col md:flex-row gap-y-16 md:gap-x-8 justify-center md:justify-between items-center">
      <div className="md:w-1/2 text-center md:text-start">
        <Badge
          className="bg-mygrey text-blue-600 font-bold 
        rounded-md py-2 px-4 mb-4"
        >
          Sale 70%
        </Badge>
        {/* <h1 className="scroll-m-20 text-4xl font-bold lg:text-5xl 2xl:text-7xl"> */}
        <h1 className="scroll-m-20 clamp-h1 font-bold">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-2 lg:text-lg 2xl:text-2xl">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <div className="md:max-lg:flex md:max-lg:justify-between">
          <Button
            className="mt-8 py-6 lg:py-8 bg-gradient-to-br
         from-black to-gray-500 leading-[14px] lg:text-xl"
          >
            <ShoppingCart className="mr-4 h-4 w-4 lg:h-6 lg:w-6" /> Start
            Shopping
          </Button>
          <div
            className="hidden md:max-lg:flex bg-gradient-to-br
         from-black to-gray-500 h-12 mt-8 border-2 border-black rounded-md"
          >
            <input
              className="hidden md:max-lg:block w-28 text-xs md:py-2 pl-2 border-1 border-black rounded-l-md"
              placeholder="Search Product "
            ></input>
            <Search className=" px-2 w-10 my-3 text-white" />
          </div>
        </div>
        <div className=" grid grid-cols-2 sm:flex sm:flex-nowrap justify-items-center sm:max-md:justify-center mt-8 sm:gap-x-6 gap-y-4 w-full">
          <Image src={herologo1} alt="herologo1" width={80} />
          <Image src={herologo2} alt="herologo2" width={80} />
          <Image src={herologo3} alt="herologo3" width={80} />
          <Image src={herologo4} alt="herologo4" width={80} />
        </div>
      </div>

      {/* <div className="w-80 h-80 md:w-[410px] md:h-[410px] 2xl:w-[550px] 2xl:h-[550px] rounded-full bg-orange-100"> */}
      <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] 2xl:w-[550px] 2xl:h-[550px] rounded-full bg-orange-100">
        <div className="flex items-center justify-center h-full w-full relative">
          {/* <div className="absolute inset-0 -left-2  w-[350px] md:w-[450px] 2xl:w-[600px]"> */}
          <div className="absolute inset-0 -left-2 -top-4 w-72 sm:w-80 md:w-[350px] lg:w-[430px] 2xl:w-[600px]">
            {/* flex in line above is causing the image to stretch */}
            <Image src={heroImage} alt="heroImage" width={500} />
          </div>
        </div>
      </div>

      {/* <div className="relative flex justify-center md:justify-normal md:flex-none">
  <div className="md:w-[410px] md:h-[410px] w-80 h-80 rounded-full bg-orange-100">
    <div className="flex items-center justify-center h-full">
      <div className="md:w-[420px] md:h-[420px] w-96 h-96 relative">
        <div className="absolute inset-0 left-10 flex items-center justify-center">
          <Image src={heroImage} alt="heroImage" width={550} />
        </div>
      </div>
    </div>
  </div>
</div> */}

      {/* <div className="relative flex justify-center md:justify-normal md:flex-none">
  <div className="md:w-[410px] md:h-[410px] w-80 h-80 rounded-full bg-orange-100">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="md:w-[410px] md:h-[410px] w-80 h-80 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src={heroImage} alt="heroImage" width={500} />
        </div>
      </div>
    </div>
  </div>
</div> */}
    </section>
  );
};

export default Hero;
