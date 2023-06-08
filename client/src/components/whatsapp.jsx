import React, { useEffect, useState } from "react";


const WhatsAppWidget = () => {
  const [Wdisplay, setDisplay] = useState(false);

  useEffect(() => {
    const url =
      "https://dev2-wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?60100";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = url;

    const widget = document.querySelectorAll("#whatsapp-chat-widget");
    const sendButton = document.getElementsByClassName("wa-widget-send-button")[0];


    // const handleClick = () => {
    //   widget.style.display = "block";
    // }

    // sendButton.onClick = () => {
    //   handleClick();
    // }

    const options = {
      enabled: true,
      chatButtonSetting: {
        backgroundColor: "#50f0ae",
        ctaText: "",
        borderRadius: "50",
        marginLeft: "0",
        marginRight: "15",
        marginBottom: "15",
        ctaIconWATI: false,
        position: "right",
      },
      brandSetting: {
        brandName: "ShreeShakti Tradings",
        brandSubTitle: "undefined",
        brandImg:
          "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
        welcomeText: "Hi there!\nHow can I help you?",
        messageText: "Hello, %0A I have some questions",
        backgroundColor: "#50f0ae",
        ctaText: "Chat now",
        borderRadius: "40",
        phoneNumber: "9040308668",
        autoShow: false,
      },
      displaySetting: {
        display: false
      },
    };

    script.onload = () => {
      window.CreateWhatsappChatWidget(options);
      widget.forEach ((e) => {
        e.style.display = "none";
      })
    };



    document.getElementsByTagName("head")[0].appendChild(script);

    return () => {
      // Clean up the script tag when the component unmounts
      document.getElementsByTagName("head")[0].removeChild(script);
    };
  }, []);

  return null;
};

export default WhatsAppWidget;
