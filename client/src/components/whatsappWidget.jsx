import React from 'react';
import { WhatsApp } from '@mui/icons-material'; // Import your CSS file for styling

import { css } from "@emotion/react";

const WhatsAppChatWidget = ({ phoneNumber }) => {

    const styles = {
        whatsappChat : css `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        cursor: pointer;
        background-color: #25D366;
        border-radius: 50%;
        padding: 12px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease-in-out; 
        `,

        appImg: css`
        width: 32px;
        height: 32px;
        border-radius: 50%;
        `


    };


  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(whatsappUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="whatsapp-chat" onClick={handleWhatsAppClick} style={styles.whatsappChat}>
      <img src={WhatsApp} alt="WhatsApp Chat" style={styles.appImg} />
    </div>
  );
};

export default WhatsAppChatWidget;
