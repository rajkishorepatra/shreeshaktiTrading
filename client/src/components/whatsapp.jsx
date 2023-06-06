import React, { useEffect } from 'react';

const WhatsAppWidget = () => {
  useEffect(() => {
    const url = 'https://dev2-wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?60100';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;

    const handleClick = () => {
        // Close the WhatsApp widget
        const widget = document.querySelector('.wa-chat-box');
        if (widget) {
          widget.style.display = 'none';
        }
  
        // Add your custom logic here
  
        console.log('Brand Setting Clicked');
      };

    const options = {
      enabled: true,
      chatButtonSetting: {
        backgroundColor: '#50f0ae',
        ctaText: 'Contact Us',
        borderRadius: '25',
        marginLeft: '0',
        marginRight: '20',
        marginBottom: '20',
        ctaIconWATI: false,
        position: 'right',
      },
      brandSetting: {
        brandName: 'ShreeShakti Tradings',
        brandSubTitle: 'undefined',
        brandImg: 'https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg',
        welcomeText: 'Hi there!\nHow can I help you?',
        messageText: 'Hello, %0A I have some questions',
        backgroundColor: '#50f0ae',
        ctaText: 'Contact Us',
        borderRadius: '25',
        autoShow: true,
        phoneNumber: '9040308668',
        onclick: handleClick,
      },
    };

    script.onload = () => {
      window.CreateWhatsappChatWidget(options);
    };

    document.getElementsByTagName('head')[0].appendChild(script);

    return () => {
      // Clean up the script tag when the component unmounts
      document.getElementsByTagName('head')[0].removeChild(script);
    };
  }, []);

  return null;
};

export default WhatsAppWidget;
