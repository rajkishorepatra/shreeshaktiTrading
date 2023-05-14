import "./App.css";
import Navbar from "./components/navbar";
import Quote from "./components/quote";
import Why from "./components/why";
import Services from "./components/services";

// import components
import PageFooter from "./components/footer";
import Clients from "./components/clients";
import PageHeader from "./components/header";
import NumbersSection from "./components/numbers";

export default function App() {
  return (
    <>
      <Navbar />
      <PageHeader />
      {/* <Services /> */}

      <Why />
      <Quote />

      <Clients />
      <NumbersSection />
      <PageFooter />
    </>
  );
}
