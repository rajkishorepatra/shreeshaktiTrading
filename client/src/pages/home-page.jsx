// import components
import Clients from "../components/clients";
import PageHeader from "../components/header";
import NumbersSection from "../components/numbers";
import Quote from "../components/quote";
import WhySection from "../components/why";
import ServiceSection from "../components/services-section";

export default function HomePage() {
  return (
    <>
      <PageHeader />
      <WhySection />
      <ServiceSection />
      <Quote />
      <Clients />
      <NumbersSection />
    </>
  );
}
