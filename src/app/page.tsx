"use client";

import CategoryList from "@/components/CategoryList/CategoryList";
import Hero from "@/components/hero/Hero";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import { WixClientContext } from "@/context/wixContext";
import { useContext, useEffect } from "react";

export default function Home() {
  const wixClient = useContext(WixClientContext);

  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();
      console.log(res);
    };

    getProducts();
  }, [wixClient]);

  return (
    <main>
      <Hero />
      <NewArrivals />
      <CategoryList />
    </main>
  );
}
