import Image from "next/image";
import Hero from "@/views/Hero";
import ProdList from "@/views/prodlist";
import Position from "@/views/Position";
import Newsletter from "@/views/Newsletter";
import Promotions from "@/views/Promotions";

export default function Home() {
  return (
    <div>
      <Hero />
      <Promotions />
      <ProdList />
      <Position />
      <Newsletter />
    </div>
  );
}
