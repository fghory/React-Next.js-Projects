const proddetail = () => {
  return (
    <div className="mt-10">
      <div className="relative mb-2">
        <h1 className="text-6xl sm:text-8xl font-bold text-gray-100">
          Overview
        </h1>
        <p className="absolute top-6 sm:top-11 left-0 font-bold text-xl sm:text-2xl">
          Product Information
        </p>
      </div>
      <div className="h-[1px] w-full bg-gray-400"></div>
      <div className="flex flex-col sm:flex-row gap-4 text-gray-500 text-sm mt-10">
        <h2 className="font-bold sm:flex-none">PRODUCT DETAILS</h2>
        <p className=" text-justify pl-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia rem
          ratione explicabo soluta neque eos hic iure! Fuga quia doloribus
          architecto ipsam, debitis blanditiis ex cum harum itaque, quam
          incidunt?
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 text-gray-500 text-sm mt-10">
        <h2 className="font-bold sm:flex-none">PRODUCT CARE</h2>
        <ul className="list-disc font-bold pl-12">
          <li className="text-black">Hand wash using cold water</li>
          <li className="text-black">Do not use bleach</li>
          <li className="text-black">Hang to dry</li>
          <li className="text-black">Iron on low temperature</li>
        </ul>
      </div>
    </div>
  );
};

export default proddetail;
