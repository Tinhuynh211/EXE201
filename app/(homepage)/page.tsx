import LoadingCards from "@/components/card/LoadingCards";
import CategoriesList from "@/components/home/CategoriesList";
import PropertiesContainer from "@/components/home/PropertiesContainer";
import { AccordionComponent } from "@/components/landing/Accordion ";
import { CarouselHome } from "@/components/landing/Carousel";
import { Suspense } from "react";
import { Pricing } from "@/components/home/Pricing";
import FacebookMsg from "@/components/FacebookMsg";
function HomePage({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  return (
    <section>
      <CarouselHome />
      <Suspense fallback={<LoadingCards />}>
        <PropertiesContainer
          category={searchParams.category}
          search={searchParams.search}
        />
      </Suspense>
      <AccordionComponent />
      <Pricing />
      <FacebookMsg />
    </section>
  );
}
export default HomePage;
