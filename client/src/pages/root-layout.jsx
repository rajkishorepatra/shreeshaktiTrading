// import components
import Navbar from "../components/navbar";
import PageFooter from "../components/footer";

// import outlet
import { Outlet } from "react-router-dom";
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

export default function RootLayout() {
  return (
    <>
      <WhatsAppWidget
        phoneNumber="7846996759"
        companyName="Shreeshakti Tradings"
        replyTimeText="online"
        message={"Hello!\nLeave a messege for us"}
      />
      <Navbar />
      <Outlet />
      <PageFooter />
    </>
  );
}
