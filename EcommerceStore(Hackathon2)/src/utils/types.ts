import { StaticImageData } from "next/image"


    type Product = {
    id:number,
    name:string,
    tagline:string;
    price:number,
    category:string,
    image:StaticImageData
};

export default Product