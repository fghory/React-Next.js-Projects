import { products } from "@/utils/mock";
import Prod1 from "@/components/ui/prod1";

const allproducts = () => {
  const imageWidth = 200;
  const imageHeight = 200;
  return (
    <div className="mt-32 pb-10 grid grid-cols-none justify-center sm:grid-cols-3 lg:grid-cols-4 gap-x-2 sm:gap-x-4 gap-y-24">
      {products.map((prod) => (
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
    </div>
  );
};

export default allproducts;
