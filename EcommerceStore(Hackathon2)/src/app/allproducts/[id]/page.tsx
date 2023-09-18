import AddtoCart from "@/components/ui/AddtoCart";
import Quantity from "@/components/ui/Quantity";
import { products } from "@/utils/mock";
import Proddetail from "@/components/ui/proddetail";
import Image from "next/image";

//const prodcategory = (category:string)=>{
//    return products.filter((prod)=> prod.category === category)
//}

export default function Page({ params }: { params: { id: number } }) {
  const result = products.filter((prd) => prd.id == params.id);
  console.log(result);
  const sizes = ["XS", "SM", "MD", "LG", "XL"];

  //const result = prodcategory(params.slug)
  return (
    <section className="px-2 sm:px-24">
      <div className=" flex mt-32 pb-10 gap-x-2 gap-y-8 justify-center">
        {result.map((prod) => {
          return (
            <div
              key={prod.id}
              className="flex flex-col sm:flex-row justify-center gap-8 items-center"
            >
              <div>
                <Image
                  src={prod.image}
                  alt={prod.name}
                  width={250}
                  height={250}
                />
              </div>
              <div>
                <p className=" text-2xl font-Belanosima">{prod.name}</p>
                <p className="text-slate-400 text-sm font-semibold">
                  {prod.tagline}
                </p>
                <p className="text-xs font-semibold pt-8 pb-2">SELECT SIZE</p>
                {/* SIZE */}
                <div className="flex text-[0.65rem] text-gray-500 font-semibold gap-x-4">
                  {sizes.map((item) => {
                    return (
                      <div
                        key={prod.id}
                        className="w-6 h-6 bg-white rounded-full  hover:shadow-gray-400 hover:shadow-lg duration-500 flex justify-center items-center"
                      >
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>
                {/* QUANTITY */}
                <div className="flex mt-12">
                  <h1 className="text-sm font-semibold mr-4">Quantity:</h1>
                  <Quantity />
                </div>
                <div className="flex gap-x-4 mt-6">
                  <AddtoCart />
                  <span className="font-bold text-lg">
                    ${prod.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Proddetail />
    </section>
  );
}
