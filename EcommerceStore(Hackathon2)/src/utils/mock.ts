import Product from "./types"
import flexshirt from 'public/flexshirt.png'
import sweater from 'public/sweater.png'
import hoodie from 'public/hoodie.webp'
import flexsweatpants from 'public/flexsweatpants.png'
import cameryn from 'public/camerynsash.png'
import pinkfleece from 'public/pinkfleece.png'
import muscletank from 'public/muscletank.png'
import flexpushbutton from 'public/flexpushbutton.png'
import raglansweatshirt from 'public/raglansweatshirt.jpg'
import kidtshirt from 'public/kidtshirt.png' 

export const products:Product[] = [
    {
        id:1,
        name:"Flex Sweatshirt",
        tagline:"Sweater",
        category: "Female",
        price: 35,
        image: flexshirt
},
{
    id:2,
    name:"Brushed Raglan Sweatshirt",
    tagline:"Sweater",
    category: "Female",
    price: 45,
    image: sweater
},
{
    id:3,
    name:"Imperial Alpaca Hoodie",
    tagline:"Jacket",
    category: "Female",
    price: 40,
    image: hoodie
},
{
    id:4,
    name:"Flex Sweatpants",
    tagline:"Pants",
    category: "Female",
    price: 41,
    image: flexsweatpants
},
{
    id:5,
    name:"Cameryn Sash Tie Dress",
    tagline:"Dress",
    category: "Female",
    price: 55,
    image: cameryn
},
{
    id:6,
    name:"Pink Fleece Sweatpants",
    tagline:"Pants",
    category: "Female",
    price: 25,
    image: pinkfleece
},
{
    id:7,
    name:"Muscle Tank",
    tagline:"T Shirt",
    category: "Female",
    price: 70,
    image: muscletank
},
{
    id:8,
    name:"Flex Push Button Bomber",
    tagline:"Jacket",
    category: "Male",
    price: 85,
    image: flexpushbutton
},
{
    id:9,
    name:"Raglan Sweatshirt",
    tagline:"Sweater",
    category: "Male",
    price: 55,
    image: raglansweatshirt
},
{
    id:10,
    name:"Kids Full Sleeves T-shirt",
    tagline:"T Shirt",
    category: "Kids",
    price: 50,
    image: kidtshirt
},


]
