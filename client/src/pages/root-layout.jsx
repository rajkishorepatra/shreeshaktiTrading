// import components
import Navbar from "../components/navbar";
import PageFooter from "../components/footer";

// import outlet
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <PageFooter />
    </>
  );
}
