import CategoryList from "@/components/CategoryList/CategoryList";
import Hero from "@/components/hero/Hero";
import ProductList from "@/components/ProductList/ProductList";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductList />
      <CategoryList />
    </main>
  );
}
