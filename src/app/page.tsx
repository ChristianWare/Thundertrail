import CategoryList from "@/components/CategoryList/CategoryList";
import Hero from "@/components/hero/Hero";
import NewArrivals from "@/components/NewArrivals/NewArrivals";

export default async function Home() {
  return (
    <main>
      <Hero />
      <NewArrivals />
      <CategoryList />
    </main>
  );
}
