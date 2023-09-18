import Image from "next/image";
import promogirl from "public/promogirl.webp";
import boy1 from "public/boy1.webp";
import boy2 from "public/boy2.webp";

const Promotions = () => {
  return (
    <section className=" mt-32">
      <div className="flex flex-col items-center">
        <div className="text-blue-600 font-bold mb-2">PROMOTIONS</div>
        <div className="text-[28px] font-bold mb-4">Our Promotion Events</div>
      </div>
      <div className="md:flex justify-center gap-x-8">
        <div className="md:flex-1">
          <div className="bg-mygrey w-full h-36 md:h-[45%] flex items-center justify-evenly mb-2 md:mb-8 pl-4 sm:pl-0">
            <div>
              <span className="font-bold text-xl md:text-2xl">GET UP TO </span>
              <br />{" "}
              <span className="font-bold text-2xl md:text-3xl">60% </span>
              <br />
              <span className="text-sm lg:text-lg">For the summer season</span>
            </div>
            <Image src={promogirl} alt="promogirl" width={180} />
          </div>
          <div className="bg-stone-900 w-full h-36 md:h-[45%] mt-2 md:mt-0 mb-2 md:mb-0 flex flex-col justify-center items-center">
            <h1 className="text-white font-bold text-3xl mb-4">GET 30% Off</h1>
            <p className="text-white text-xs lg:text-lg mb-1">USE PROMO CODE</p>
            <h2 className="text-white text-sm lg:text-lg font-bold bg-stone-700 w-fit px-8 py-1 rounded-lg">
              DINE WEEKEND SALE
            </h2>
          </div>
        </div>
        <div className="flex md:flex-1 md:gap-x-8">
          <div className="h-fit md:w-1/2 w-1/2 bg-mybeige">
            <div className="pl-4 pt-4">
              <p className="font-semibold">
                Flex <br /> Sweatshirt
              </p>
              <p>
                <span className="line-through text-sm lg:text-base">
                  $100.00
                </span>
                <br />
                <span className="font-bold"> $75.00</span>
              </p>
            </div>
            <div className="flex justify-center ">
              <Image
                src={boy1}
                alt="boy1"
                width={200}
                height={200}
                className="h-56 xl:h-72"
              />
            </div>
          </div>
          <div className="h-fit md:h-fit md:w-1/2 w-1/2 bg-mygreen ">
            <div className="pl-4 pt-4">
              <p className="font-semibold">
                Flex Push <br /> Button Bomber
              </p>
              <p>
                <span className="line-through text-sm lg:text-base">
                  $225.00
                </span>
                <br />
                <span className="font-bold"> $190.00</span>
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src={boy2}
                alt="boy2"
                width={195}
                height={200}
                className="h-56 xl:h-72"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
