import React, { Suspense } from "react";
import LoadingCards from "@/components/card/LoadingCards";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { AccordionComponent } from "@/components/landing/Accordion ";
import { CarouselHome } from "@/components/landing/Carousel";
import { Pricing } from "@/components/home/Pricing";
import ContactButton from "@/components/ContactButton";



function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  return (
    <section className="relative">
      <CarouselHome />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer category={searchParams.category} search={searchParams.search} />
      </Suspense>
      <AccordionComponent />
      <Pricing />
      
      
      {/* Thêm nút Contact Us vào cuối trang */}
      <ContactButton/>
    </section>
  );
}

export default HomePage;
