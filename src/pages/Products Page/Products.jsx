import "./Products.css";
import Hero from "./components/Hero";
import CTAFeatures from "./components/CTAFeatures";
import ProductList from "./components/ProductList";
import Features from "./components/Features";
import CTA from "./components/CTA";

export default function Products() {
  return (
    <main id="products" className="mt-[80px]  md:mt-[110px] lg:mt-[180px] mb-[-35px] md:mb-[-30px] lg:mb-[-25px]">
      <Hero />
      <CTAFeatures />
      <ProductList />
      <Features />
      <CTA />
    </main>
  );
}
