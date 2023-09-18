import Prod1 from "@/components/ui/prod1";
import { products } from "@/utils/mock";

const prodlist = () => {
  const prodchunk = products.slice(0, 3);
  const imageWidth = 200;
  const imageHeight = 300;

  return (
    <section className="mt-32">
      <div className="flex flex-col items-center">
        <div className="text-blue-600 font-bold mb-2">PRODUCTS</div>
        <div className="text-[28px] font-bold mb-8">Check What We Have</div>
      </div>
      <div className=" flex flex-wrap justify-center md:flex md:justify-between lg:justify-center gap-x-2 gap-y-4 md:gap-x-4">
        {prodchunk.map((prod) => (
          <Prod1
            key={prod.id}
            title={prod.name}
            price={prod.price}
            image={prod.image}
            category={prod.category}
            id={prod.id}
            tagline={prod.tagline}
            customWidth={imageWidth}
            customHeight={imageHeight}
          />
        ))}

        {/*<Prod1 title='Sweatshirt' price={100} image={Shirt}/>
        <Prod1 title='Flexshirt' price={40} image={Flexshirt}/>
  <Prod1 title='Sweater' price={55} image={Sweater}/>*/}
      </div>
    </section>
  );
};

export default prodlist;
