// import components
import PageFooter from "./components/footer";
import Clients from "./components/clients";
import PageHeader from "./components/header";
import NumbersSection from "./components/numbers";
import Navbar from "./components/navbar";
import Quote from "./components/quote";
import Why from "./components/why";

export default function App() {
  return (
    <>
      <Navbar />
      <PageHeader />
      
      <Why />
      <Quote />

      <Clients />
      <NumbersSection />
      <PageFooter />
    </>
  );
}
