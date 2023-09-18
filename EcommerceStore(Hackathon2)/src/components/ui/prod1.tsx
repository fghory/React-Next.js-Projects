import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import AddtoCart from "./AddtoCart";

function prod1(props: {
  title: string;
  price: number;
  image: string|StaticImageData;
  category: string;
  id: number;
  tagline: string;
  customWidth:number;
  customHeight:number;
}) {
  
  return (
    <Link href={`allproducts/${props.id}`}>
      <div>
        {/* md:h-72 md:w-72 h-48 w-56 */}
      
        <Image
          src={props.image}
          alt="Shirt"
          className=" h-56 w-56 object-cover object-top hover:scale-125 transition-all duration-500"
          
        />
      
        <h1 className="font-bold mt-2 md:text-sm text-xs">{props.title}</h1>
        <p className="text-sm mb-2">{props.tagline}</p>
        <p className="text-base font-bold">${props.price}</p>
        <AddtoCart />
      </div>
    </Link>
  );
}

export default prod1;
// github.com/shehza-d
// npx prettier write .
