async function CreateWhatsappChatWidget(
    option = {
      brandSetting: {
        autoShow: false,
        backgroundColor: '#0a6114',
        borderRadius: '25',
        brandImg: 'https://cdn.clare.ai/wati/images/WATI_logo_square_2.png',
        brandImgData: null,
        brandName: 'WATI',
        brandSubTitle: '',
        ctaText: 'Chat with us',
        welcomeText: 'I have some questions about Wati, \ncan you help?',
        messageText: 'Iâ€™ve some questions about Wati, can you help?',
        phoneNumber: '85252859384',
      },
      chatButtonSetting: {
        backgroundColor: '#00E785',
        borderRadius: '25',
        ctaText: 'Chat with us',
        ctaIconWATI: true,
        marginLeft: '0',
        marginRight: '20',
        marginBottom: '20',
        position: 'right',
      },
      enabled: false,
    }
  ) {
    if (option.enabled == false) {
      return;
    }
    if (!option.chatButtonSetting.position) {
      option.chatButtonSetting.position = 'right';
      option.chatButtonSetting.marginBottom = '20';
      option.chatButtonSetting.marginLeft = '0';
      option.chatButtonSetting.marginRight = '20';
    }
    var css = document.createElement('STYLE');
    var defaultSvg = option.chatButtonSetting.ctaIconWATI
      ? `<svg id="wa-widget-svg" width="28" height="26" viewBox="0 0 28 26" fill="none" style="pointer-events: none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_152_73)">
                <path d="M8.12905 20.1329H16.3847L21.3186 25.0623V20.1329H23.4264C25.9412 20.1329 27.9979 18.0762 27.9979 15.5615V9.06899C27.9979 6.55426 25.9412 4.49756 23.4264 4.49756H8.12905C5.61432 4.49756 3.55762 6.55426 3.55762 9.06899V15.5615C3.55762 18.0762 5.61432 20.1329 8.12905 20.1329Z" fill="white"/>
                <path d="M18.6548 23.6548L13.3496 18.3541H5.46081C2.45025 18.3541 0 15.9038 0 12.8933V6.39856C0 3.38799 2.45025 0.937744 5.46081 0.937744H20.7582C23.7688 0.937744 26.219 3.38799 26.219 6.39856V12.8911C26.219 15.9016 23.7688 18.3519 20.7582 18.3519H18.6504V16.5731H20.7582C22.7882 16.5731 24.4402 14.9211 24.4402 12.8911V6.39856C24.4402 4.36854 22.7882 2.71651 20.7582 2.71651H5.46081C3.43079 2.71651 1.77877 4.36854 1.77877 6.39856V12.8911C1.77877 14.9211 3.43079 16.5731 5.46081 16.5731H14.0856L18.6704 21.1534L18.6548 23.6526V23.6548Z" fill="#1D1D1B"/>
            </g>
            <defs>
                <clipPath id="clip0_152_73">
                    <rect width="28" height="24.1245" fill="white" transform="translate(0 0.937744)"/>
                </clipPath>
            </defs>
        </svg>`
      : `<svg id="wa-widget-svg" width="24" height="26" viewBox="0 0 24 26" fill="none" style="pointer-events: none"
            xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_175_394)">
                <path d="M20.5032 4.44978C18.454 2.39976 15.7295 1.16437 12.8372 0.973664C9.94491 0.782953 7.08186 1.64992 4.78122 3.41312C2.48057 5.17632 0.899152 7.71557 0.33144 10.558C-0.236273 13.4005 0.248418 16.3524 1.69526 18.864L0 25.0542L6.3348 23.3932C8.08691 24.3473 10.0501 24.8472 12.0452 24.8474H12.0503C14.4134 24.8471 16.7234 24.1464 18.6883 22.8336C20.6532 21.5208 22.1848 19.6549 23.0895 17.4718C23.9941 15.2887 24.2313 12.8865 23.771 10.5686C23.3106 8.25078 22.1734 6.12145 20.5032 4.44978ZM12.0503 22.8298H12.0464C10.2677 22.8299 8.52173 22.3518 6.99125 21.4455L6.62843 21.2305L2.86882 22.216L3.87243 18.5516L3.63593 18.176C2.4654 16.3108 1.94791 14.1094 2.16482 11.9181C2.38173 9.72667 3.32074 7.6695 4.83423 6.06994C6.34771 4.47038 8.34986 3.41914 10.5259 3.08148C12.702 2.74382 14.9285 3.13888 16.8556 4.20456C18.7827 5.27024 20.3009 6.9461 21.1717 8.96871C22.0425 10.9913 22.2165 13.246 21.6663 15.3782C21.116 17.5104 19.8728 19.3994 18.132 20.7481C16.3913 22.0967 14.2516 22.8287 12.0495 22.8288L12.0503 22.8298Z" fill="#E0E0E0"/>
                <path d="M0.548828 24.3674L2.1667 18.459C0.913357 16.2843 0.412492 13.7569 0.741761 11.2685C1.07103 8.78019 2.21204 6.46999 3.98788 4.69612C5.76371 2.92224 8.07517 1.78379 10.5639 1.45727C13.0526 1.13075 15.5795 1.63441 17.7528 2.89016C19.9261 4.1459 21.6245 6.08358 22.5845 8.40277C23.5445 10.7219 23.7126 13.2931 23.0626 15.7175C22.4127 18.1419 20.9811 20.2842 18.9897 21.8122C16.9983 23.3402 14.5585 24.1685 12.0485 24.1687H12.0434C10.1399 24.1683 8.26687 23.6914 6.59505 22.7813L0.549792 24.3664L0.548828 24.3674Z" fill="url(#paint0_linear_175_394)"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.09751 7.8201C8.87645 7.32854 8.64356 7.31866 8.43334 7.31022C8.26122 7.30275 8.06425 7.30323 7.86778 7.30323C7.7182 7.30718 7.57106 7.34203 7.4356 7.40559C7.30014 7.46915 7.1793 7.56004 7.08066 7.67256C6.74691 7.98856 6.48267 8.37064 6.30477 8.79443C6.12687 9.21822 6.03922 9.67442 6.0474 10.134C6.0474 11.5862 7.10525 12.9895 7.25279 13.1865C7.40033 13.3834 9.29472 16.4586 12.2947 17.6416C14.7879 18.6247 15.2954 18.4292 15.8366 18.38C16.3778 18.3308 17.5827 17.6662 17.8289 16.977C18.075 16.2877 18.0748 15.6971 18.001 15.5736C17.9272 15.4502 17.7305 15.3769 17.4352 15.2291C17.1399 15.0814 15.6891 14.3673 15.4183 14.2689C15.1476 14.1706 14.9509 14.1214 14.7542 14.4169C14.5574 14.7125 13.9921 15.3767 13.8197 15.5741C13.6474 15.7716 13.4752 15.7959 13.1802 15.6484C12.31 15.3015 11.5069 14.8058 10.8068 14.1836C10.1614 13.5872 9.60808 12.8984 9.16477 12.1397C8.99264 11.8446 9.14621 11.6846 9.29447 11.537C9.42707 11.4049 9.58955 11.1925 9.73733 11.0202C9.85846 10.871 9.95774 10.7053 10.0322 10.5281C10.0715 10.4467 10.0899 10.3568 10.0857 10.2665C10.0814 10.1762 10.0548 10.0884 10.0081 10.011C9.93357 9.86323 9.35981 8.40375 9.09751 7.8201Z" fill="white"/>
                <path d="M20.4056 4.41173C18.3804 2.38385 15.687 1.16139 12.8273 0.972097C9.96764 0.782809 7.13665 1.63961 4.86185 3.38286C2.58704 5.12611 1.02356 7.63691 0.462719 10.4474C-0.098121 13.258 0.381929 16.1766 1.81343 18.6594L0.137695 24.7797L6.39969 23.1377C8.13167 24.0809 10.0724 24.5751 12.0445 24.5752H12.0496C14.3857 24.5754 16.6695 23.8829 18.6121 22.5852C20.5547 21.2875 22.0689 19.443 22.9633 17.2848C23.8576 15.1267 24.092 12.7517 23.6368 10.4604C23.1815 8.16901 22.057 6.06408 20.4056 4.41173ZM12.0496 22.5808H12.0469C10.2886 22.5809 8.56259 22.1083 7.04963 21.2124L6.69091 20.9998L2.97397 21.974L3.96601 18.3511L3.7324 17.9798C2.57534 16.1359 2.06385 13.9598 2.27835 11.7935C2.49284 9.62725 3.42114 7.59368 4.91734 6.01249C6.41353 4.43131 8.39276 3.39217 10.5439 3.05843C12.695 2.7247 14.8961 3.11529 16.801 4.16881C18.706 5.22233 20.2068 6.87904 21.0676 8.87849C21.9283 10.8779 22.1003 13.1068 21.5563 15.2146C21.0123 17.3224 19.7833 19.1896 18.0624 20.5228C16.3416 21.856 14.2264 22.5795 12.0496 22.5796V22.5808Z" fill="white"/>
            </g>
            <defs>
                <linearGradient id="paint0_linear_175_394" x1="12.0002" y1="24.3674" x2="12.0002" y2="1.36035" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#20B038"/>
                    <stop offset="1" stop-color="#60D66A"/>
                </linearGradient>
                <clipPath id="clip0_175_394">
                    <rect width="24" height="24.1078" fill="white" transform="translate(0 0.946289)"/>
                </clipPath>
            </defs>
        </svg>`;
  
    const getIsNewChatWidget = async () => {
      try {
        const url = new URL(window?.url ?? window?.wati_chatscript_url ?? window?.wati_widget_url);
        const response = await fetch(`${url?.origin}/api/v1/integration/isRebrandingFeatureEnabled`);
        const res = await response.json();
        return res.result;
      } catch (e) {
        return false;
      }
    };
  
    var isNewChatWidget = await getIsNewChatWidget();
  
    initWidget();
    function initWidget() {
      if (option.brandSetting.messageText) {
        option.brandSetting.messageText = option.brandSetting.messageText.replaceAll(
          '{{page_link}}',
          encodeURIComponent(window.location.href)
        );
        option.brandSetting.messageText = option.brandSetting.messageText.replaceAll(
          '__page_link__',
          encodeURIComponent(window.location.href)
        );
        option.brandSetting.messageText = option.brandSetting.messageText.replaceAll(
          '{{page_title}}',
          window.document.title
        );
        option.brandSetting.messageText = option.brandSetting.messageText.replaceAll(
          '__page_title__',
          window.document.title
        );
        option.brandSetting.messageText = option.brandSetting.messageText.replaceAll('\n', '%0A');
      }
  
      isNewChatWidget ? getNewWidget() : getOldWidget();
    }
    function getOldWidget() {
      document.body.insertAdjacentHTML(
        'beforeend',
        `<div id="whatsapp-chat-widget">
                <div id="wa-widget-send-button">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" class="wa-messenger-svg-whatsapp wh-svg-icon"><path d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z" fill-rule="evenodd"></path></svg>
                    <div style="color: white; font-size: 18px; pointer-events: none">${option.chatButtonSetting.ctaText}</div>
                </div>
            </div>`
      );
      document.querySelector('#whatsapp-chat-widget')?.insertAdjacentHTML(
        'beforeend',
        `<div class='wa-chat-box'>
                <div class='wa-chat-box-header'>
                    <img class='wa-chat-box-brand' onError='this.src= "https://cdn.clare.ai/wati/images/WATI_logo_square_2.png";' src='${option.brandSetting.brandImg
        }'/>
                    <div class='wa-chat-box-brand-text'>
                        <div class='wa-chat-box-brand-name'>${option.brandSetting.brandName}</div>
                        <div class='wa-chat-box-brand-subtitle'>${option.brandSetting.brandSubTitle
        }</div>
                    </div>
                    <div class="wa-chat-bubble-close-btn"><img style="display: table-row" src="https://cdn.shopify.com/s/files/1/0070/3666/5911/files/Vector.png?574"></div>
                </div>
                
                <div class='wa-chat-box-content'>
                    <div class='wa-chat-box-content-chat'>                            
                        <div class='wa-chat-box-content-chat-brand'>${option.brandSetting.brandName
        }</div>
                        <div class='wa-chat-box-content-chat-welcome'>${option.brandSetting.welcomeText.replace(
          /\n/g,
          '<br/>'
        )}</div>
                    </div>
                </div>
                
                <div class='wa-chat-box-send'>
                    <a role="button" target="_blank" href="https://api.whatsapp.com/send?phone=${option.brandSetting.phoneNumber.replace(
          /\+/g,
          ''
        )}&text=${option.brandSetting.messageText ? option.brandSetting.messageText : ''
        }" title="WhatsApp" class="wa-chat-box-content-send-btn"><svg width="20" height="20" viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="wa-chat-box-content-send-btn-icon"><path d="M90,43.841c0,24.213-19.779,43.841-44.182,43.841c-7.747,0-15.025-1.98-21.357-5.455L0,90l7.975-23.522   c-4.023-6.606-6.34-14.354-6.34-22.637C1.635,19.628,21.416,0,45.818,0C70.223,0,90,19.628,90,43.841z M45.818,6.982   c-20.484,0-37.146,16.535-37.146,36.859c0,8.065,2.629,15.534,7.076,21.61L11.107,79.14l14.275-4.537   c5.865,3.851,12.891,6.097,20.437,6.097c20.481,0,37.146-16.533,37.146-36.857S66.301,6.982,45.818,6.982z M68.129,53.938   c-0.273-0.447-0.994-0.717-2.076-1.254c-1.084-0.537-6.41-3.138-7.4-3.495c-0.993-0.358-1.717-0.538-2.438,0.537   c-0.721,1.076-2.797,3.495-3.43,4.212c-0.632,0.719-1.263,0.809-2.347,0.271c-1.082-0.537-4.571-1.673-8.708-5.333   c-3.219-2.848-5.393-6.364-6.025-7.441c-0.631-1.075-0.066-1.656,0.475-2.191c0.488-0.482,1.084-1.255,1.625-1.882   c0.543-0.628,0.723-1.075,1.082-1.793c0.363-0.717,0.182-1.344-0.09-1.883c-0.27-0.537-2.438-5.825-3.34-7.977   c-0.902-2.15-1.803-1.792-2.436-1.792c-0.631,0-1.354-0.09-2.076-0.09c-0.722,0-1.896,0.269-2.889,1.344   c-0.992,1.076-3.789,3.676-3.789,8.963c0,5.288,3.879,10.397,4.422,11.113c0.541,0.716,7.49,11.92,18.5,16.223   C58.2,65.771,58.2,64.336,60.186,64.156c1.984-0.179,6.406-2.599,7.312-5.107C68.398,56.537,68.398,54.386,68.129,53.938z"></path></svg>
                        <span class="wa-chat-box-content-send-btn-text">${option.brandSetting.ctaText
        }</span>
                    </a>
                    <div class='wa-chat-box-poweredby'>âš¡ by <a href="https://wati.io/?utm_source=shopify&utm_medium=chat_widget&utm_campaign=shopify_widget" target="_blank" style="color: #006eff6e;">wati.io</a></div>
                </div>
            </div>
            `
      );
      if (option.brandSetting.autoShow) {
        document.querySelector('.wa-chat-box').style.display = 'block';
      } else {
        document.querySelector('.wa-chat-box').style.display = 'none';
      }
      document.querySelector('#whatsapp-chat-widget').addEventListener('click', function (event) {
        console.log('event', event);
        if (event.target.classList.contains('wa-chat-bubble-close-btn')) {
          document.querySelector('.wa-chat-box').style.display = 'none';
        }
        if (event.target.id === 'wa-widget-send-button') {
          document.querySelector('.wa-chat-box').style.display = 'block';
        }
      });
    }
    function getNewWidget() {
      document.body.insertAdjacentHTML(
        'beforeend',
        `<div id="whatsapp-chat-widget">
                  <div class="wa-widget-send-button">
                      ${defaultSvg}
                      <svg id="wa-widget-opened-svg" width="23" height="13" viewBox="0 0 23 13" fill="none" style="pointer-events: none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.20001 1.7334L11.6154 11.1488L21.0308 1.7334" stroke="#1D1D1B" stroke-width="2" stroke-linecap="square"/>
                      </svg>
                  </div>
              </div>`
      );
      document.querySelector('#whatsapp-chat-widget')?.insertAdjacentHTML(
        'beforeend',
        `<div class='wa-chat-bubble'>
                  <div class="wa-chat-bubble-close-button">
                      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" style="pointer-events: none; display: block;"
                       xmlns="http://www.w3.org/2000/svg">
                       <path d="M3.6001 4.1001L8.4001 8.9001M3.6001 8.9001L8.4001 4.1001" stroke="white" stroke-width="1.33333"/>
                      </svg>
                  </div>
                   <div class="wa-chat-bubble-text">
                       ${option.chatButtonSetting.ctaText}
                  </div>
              </div>`
      );
      document.querySelector('#whatsapp-chat-widget')?.insertAdjacentHTML(
        'beforeend',
        `<div class='wa-chat-box'>
                   <img class='wa-chat-box-brand'
                      onError='this.src= "https://cdn.clare.ai/wati/images/WATI_logo_square_2.png";' 
                      src='${option.brandSetting.brandImg}'/> 
      
                   <div class='wa-chat-box-content-chat-welcome'>
                        ${option.brandSetting.welcomeText.replace(/\n/g, '<br/>')}
                   </div>
      
                   <a
                      role="button"
                      target="_blank"
                      href="https://api.whatsapp.com/send?phone=${option.brandSetting.phoneNumber.replace(
          /\+/g,
          ''
        )}&text=${option.brandSetting.messageText ? option.brandSetting.messageText : ''
        }"
                      title="WhatsApp" class="wa-chat-box-content-send-btn">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block">
                            <path d="M0.00401338 20L1.35601 15.032C0.465151 13.5049 -0.00289063 11.768 1.34322e-05 10C1.34322e-05 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.23279 20.0029 6.49667 19.5352 4.97001 18.645L0.00401338 20ZM6.39101 5.308C6.26188 5.31602 6.13569 5.35003 6.02001 5.408C5.91153 5.46943 5.81251 5.54622 5.72601 5.636C5.60601 5.749 5.53801 5.847 5.46501 5.942C5.09542 6.423 4.89662 7.01342 4.90001 7.62C4.90201 8.11 5.03001 8.587 5.23001 9.033C5.63901 9.935 6.31201 10.89 7.20101 11.775C7.41501 11.988 7.62401 12.202 7.84901 12.401C8.9524 13.3725 10.2673 14.073 11.689 14.447L12.258 14.534C12.443 14.544 12.628 14.53 12.814 14.521C13.1053 14.506 13.3896 14.4271 13.647 14.29C13.813 14.202 13.891 14.158 14.03 14.07C14.03 14.07 14.073 14.042 14.155 13.98C14.29 13.88 14.373 13.809 14.485 13.692C14.568 13.606 14.64 13.505 14.695 13.39C14.773 13.227 14.851 12.916 14.883 12.657C14.907 12.459 14.9 12.351 14.897 12.284C14.893 12.177 14.804 12.066 14.707 12.019L14.125 11.758C14.125 11.758 13.255 11.379 12.724 11.137C12.668 11.1126 12.608 11.0987 12.547 11.096C12.4786 11.089 12.4095 11.0967 12.3443 11.1186C12.2791 11.1405 12.2193 11.1761 12.169 11.223V11.221C12.164 11.221 12.097 11.278 11.374 12.154C11.3325 12.2098 11.2754 12.2519 11.2098 12.2751C11.1443 12.2982 11.0733 12.3013 11.006 12.284C10.9409 12.2666 10.877 12.2445 10.815 12.218C10.691 12.166 10.648 12.146 10.563 12.109L10.558 12.107C9.98592 11.8572 9.45624 11.5198 8.98801 11.107C8.86201 10.997 8.74501 10.877 8.62501 10.761C8.23159 10.3842 7.88873 9.95801 7.60501 9.493L7.54601 9.398C7.50364 9.33416 7.46937 9.2653 7.44401 9.193C7.40601 9.046 7.50501 8.928 7.50501 8.928C7.50501 8.928 7.74801 8.662 7.86101 8.518C7.9551 8.39832 8.04289 8.27382 8.12401 8.145C8.24201 7.955 8.27901 7.76 8.21701 7.609C7.93701 6.925 7.64701 6.244 7.34901 5.568C7.29001 5.434 7.11501 5.338 6.95601 5.319C6.90201 5.313 6.84801 5.307 6.79401 5.303C6.65972 5.29633 6.52515 5.29866 6.39101 5.308Z" fill="white" />
                          </svg>
                          <span class="wa-chat-box-content-send-btn-text">${option.brandSetting.ctaText
        }</span>
                          <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: auto; display: block;">
                            <path d="M1 1L7 7L1 13" stroke="white" stroke-width="2" stroke-linecap="round" />
                          </svg>
                    </a>
                
      
                  <div class='wa-chat-box-poweredby'>
                      <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block">
                        <path d="M3 15V9H0L5 0V6H8L3 15Z" fill="#999999" />
                      </svg>
                      Powered by <a href="https://www.wati.io/?utm_source=shopify&utm_medium=chat_widget&utm_campaign=shopify_widget" target="_blank" class="wa-chat-box-poweredby-link">wati.io</a>
                  </div>
              </div>
              `
      );
      if (option.brandSetting.autoShow) {
        document.querySelector('.wa-chat-box').classList.add('wa-chat-box-visible');
        document.querySelector('#wa-widget-svg').style.display = 'none';
        document.querySelector('#wa-widget-opened-svg').style.display = 'block';
      } else {
        document.querySelector('.wa-chat-box').classList.remove('wa-chat-box-visible');
        document.querySelector('#wa-widget-svg').style.display = 'block';
        document.querySelector('#wa-widget-opened-svg').style.display = 'none';
      }
      document.querySelector('#whatsapp-chat-widget').addEventListener('click', function (event) {
        console.log('event', event);
        if (
          event.target.classList.contains('wa-widget-send-button') &&
          event.target.classList.contains('wa-widget-send-button-clicked')
        ) {
          document.querySelector('.wa-chat-box').classList.remove('wa-chat-box-visible');
          document.querySelector('#wa-widget-svg').style.display = 'block';
          document.querySelector('#wa-widget-opened-svg').style.display = 'none';
          document.querySelector('.wa-chat-bubble').style.cssText = '';
          document.querySelector('.wa-widget-send-button').className = 'wa-widget-send-button';
        } else if (
          event.target.classList.contains('wa-widget-send-button') &&
          !event.target.classList.contains('wa-widget-send-button-clicked')
        ) {
          document.querySelector('.wa-chat-box').classList.add('wa-chat-box-visible');
          document.querySelector('#wa-widget-svg').style.display = 'none';
          document.querySelector('#wa-widget-opened-svg').style.display = 'block';
          document.querySelector('.wa-chat-bubble').style.display = 'none';
          document
            .querySelector('.wa-widget-send-button')
            .classList.add('wa-widget-send-button-clicked');
        }
  
        if (event.target.classList.contains('wa-chat-bubble-close-button')) {
          document.querySelector('.wa-chat-bubble').classList.add('wa-chat-bubble-closed');
        }
      });
    }
    if (isNewChatWidget) {
      var styles = `
            @import url('https://fonts.cdnfonts.com/css/outfit');
    
            #whatsapp-chat-widget{
                display: ${option.enabled ? 'block' : 'none'}
            }
            .wa-chat-box-content-send-btn-text{
                font-family: 'Outfit', sans-serif;;
                font-weight: 500;
                font-size: 16px;
                line-height: 20px;
                color: #FFFFFF !important;
            }
            .wa-chat-box-content-send-btn{
                background-color: #1D1D1B !important;
                box-shadow: 4px 4px 0px ${option.chatButtonSetting.backgroundColor};
                border-radius: 8px;
                text-decoration: none;
                cursor: pointer;
                position: relative;
                display: flex;
                align-items: center;
                gap: 14px;
                padding: 16px 20px;
  
                border-width: initial;
                border-style: none;
                border-color: initial;
                border-image: initial;
                overflow: hidden; 
            }
            .wa-chat-box-content-chat-welcome{        
                font-family: 'Outfit', sans-serif;
                font-size: 20px;
                line-height: 150%;
                color: #000000;
            }
            .wa-chat-box-brand{
                width: 52px;
                height: 52px;
                border: 1px solid #1D1D1B;
                box-shadow: 0px 2px 240px rgba(0, 0, 0, 0.04);
                border-radius: 100px;
                background-color: ${option.chatButtonSetting.backgroundColor};
            }
            .wa-chat-box{
                background-color: white;
                z-index: 16000160 !important;
                margin-bottom: 106px;
                margin-bottom: 92px;
                min-width: 320px;
                position: fixed !important;
                bottom: ${option.chatButtonSetting.marginBottom}px !important;
                ${option.chatButtonSetting.position == 'left'
          ? 'left : ' + option.chatButtonSetting.marginLeft + 'px'
          : 'right : ' + option.chatButtonSetting.marginRight + 'px'
        };
                border-radius: 32px;
                border: 2px solid #1D1D1B;
                box-shadow: 4px 6px 0px ${option.chatButtonSetting.backgroundColor};
                padding: 32px 32px 16px;
                min-height: 279px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 12px;
  
                pointer-events: none;
                opacity: 0;
                scale: 0;
                transform-origin: ${option.chatButtonSetting.position == 'left' ? 'left' : 'right'} bottom;
                transition: scale 150ms ease-in, opacity 250ms ease-in;
            }
            .wa-chat-box-visible{
              pointer-events: auto;
              opacity: 1;
              scale: 1;
            }
            .wa-widget-send-button {
                margin: 0 0 ${option.chatButtonSetting.marginBottom}px 0 !important;      
                position: fixed !important;
                z-index: 16000160 !important;
                bottom: 0 !important;
                text-align: center !important;
                height: 52px;
                min-width: 52px;
                border: ${option.chatButtonSetting.ctaIconWATI ? '1px' : '2px'} solid #1D1D1B;
                border-radius: 100px;
                visibility: visible;
                transition: none !important;
                background-color: ${option.chatButtonSetting.backgroundColor};
                box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.4);
                ${option.chatButtonSetting.position == 'left'
          ? 'left : ' + option.chatButtonSetting.marginLeft + 'px'
          : 'right : ' + option.chatButtonSetting.marginRight + 'px'
        };
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .wa-chat-box-poweredby{
                margin-left: auto;
                margin-right: auto;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 3px;
                font-family: 'Outfit', sans-serif;;
                font-size: 12px;
                line-height: 18px;
                color: #999999;
            }
            .wa-chat-box-poweredby-link{
                font-weight: 600;
                color: #666666 !important;
                text-decoration: none !important;
            }
            .wa-chat-box-poweredby-link::hover{
                color: #666666 !important;
                text-decoration: none !important;
            }
    
            .wa-chat-bubble{
                display: ${option.chatButtonSetting.ctaText ? 'flex' : 'none'};
                align-items: center;
                gap: 8px;
                z-index: 16000160 !important;
                position: fixed !important;
                margin-bottom: 63px;
                bottom: ${option.chatButtonSetting.marginBottom}px !important;
                ${option.chatButtonSetting.position == 'left'
          ? 'left : ' + option.chatButtonSetting.marginLeft + 'px'
          : 'right : ' + option.chatButtonSetting.marginRight + 'px'
        };
            }
            .wa-chat-bubble-closed{
              display: none;
            }
            .wa-chat-bubble-close-button{
                height: 20px;
                min-width: 20px;
                background: #000000;
                border-radius: 24px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                order: ${option.chatButtonSetting.position == 'left' ? '0' : '1'};
            }
            .wa-chat-bubble-text{
               font-family: 'Outfit', sans-serif;
               background: #FFFFFF;
               border: 1px solid #000000;
               box-shadow: 2px 3px 0px ${option.chatButtonSetting.backgroundColor};
               border-radius: 24px;
               padding: 8px 16px;
               pointer-events: none;
    
               font-weight: 500;
               font-size: 14px;
               line-height: 150%;
               color: #202020;
            }
            .wa-chat-box::before {
               content: '';
               position: absolute;
               top: 100%;
               ${option.chatButtonSetting.position == 'left' ? 'left' : 'right'}: 29px;
               width: 0;
               height: 0;
               border-width: 0 0px 30px 30px;
               border-color: transparent transparent white transparent;
               border-style: solid;
               transform: rotate(${option.chatButtonSetting.position == 'left' ? '180' : '270'}deg);
               z-index: 1;
            }
            .wa-chat-box::after {
               content: '';
               position: absolute;
               top: 100%;
               ${option.chatButtonSetting.position == 'left' ? 'left' : 'right'}: 27px;
               width: 0;
               height: 0;
               border-width: 0px 0px 34px 34px;
               border-color: transparent transparent black transparent;
               border-style: solid;
               border-radius: 2px;
               filter: drop-shadow(${option.chatButtonSetting.position == 'left' ? '-5px -2px 0px' : '-2px 5px 0px'
        } ${option.chatButtonSetting.backgroundColor});
               transform: rotate(${option.chatButtonSetting.position == 'left' ? '180' : '270'}deg);
            }
    
            @media only screen and (max-width: 600px) {
                .wa-chat-box
                {
                    width: auto;
                    position: fixed !important;
                    right: 20px!important;
                    left: 20px!important;
                }
            }
        `;
    } else {
      var styles = `
          #whatsapp-chat-widget{
              display: ${option.enabled ? 'block' : 'none'}
          }
          .wa-chat-box-content-send-btn-text{
              margin-left: 8px;
              margin-right: 8px;
              z-index: 1;
              color: rgb(255, 255, 255);
          }
          .wa-chat-box-content-send-btn-icon{
              width: 16px;
              height: 16px;
              fill: rgb(255, 255, 255);
              z-index: 1;
              flex: 0 0 16px;
          }
          .wa-chat-box-content-send-btn{
              text-decoration: none;
              color: rgb(255, 255, 255)!important;
              font-size: 15px;
              font-weight: 700;
              line-height: 20px;
              cursor: pointer;
              position: relative;
              display: flex;
              -webkit-box-pack: center;
              justify-content: center;
              -webkit-box-align: center;
              align-items: center;
              -webkit-appearance: none;
              padding: 8px 12px;
              border-radius: ${option.brandSetting.borderRadius}px;
              border-width: initial;
              border-style: none;
              border-color: initial;
              border-image: initial;
              background-color: ${option.chatButtonSetting.backgroundColor}!important;
              margin: 20px;
              overflow: hidden;
          }
          .wa-chat-box-send{
              background-color:white;
  
          }
          .wa-chat-box-content-chat-brand{        
              font-size: 13px;
              font-weight: 700;
              line-height: 18px;
              color: rgba(0, 0, 0, 0.4);
          }
          .wa-chat-box-content-chat-welcome{        
              font-size: 14px;
              line-height: 19px;
              margin-top: 4px;
              color: rgb(17, 17, 17);
          }
          .wa-chat-box-content-chat{
              background-color: white;
              display: inline-block;
              margin: 20px;
              padding: 10px;
              border-radius: 10px;
          }
          .wa-chat-box-content{
              background: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
              
          }
          .wa-chat-bubble-close-btn{
              cursor: pointer;
              position: absolute;
              right: 20px;
              top: 20px;           
          }
          .wa-chat-bubble-close-btn img {
              pointer-events: none;
          }
          .wa-chat-box-brand-text{
              margin-left: 20px;
          }
          .wa-chat-box-brand-name{
              font-size: 16px;
              font-weight: 700;
              line-height: 20px;
          }
          .wa-chat-box-brand-subtitle{
              font-size: 13px;
              line-height: 18px;
              margin-top: 4px;
          }
          
          .wa-chat-box-header{
              height: 100px;
              max-height: 100px;
              min-height: 100px;
              background-color: ${option.brandSetting.backgroundColor};
              color: white;
              border-radius: 10px 10px 0px 0px;
              display:flex;
              align-items: center;
          }
          .wa-chat-box-brand{
              margin-left: 20px;
              width: 50px;
              height: 50px;
              border-radius: 25px;
              box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
          }
          .wa-chat-box{
              background-color:white;
              z-index: 16000160 !important;
              margin-bottom: 60px;
              width: 360px;
              position: fixed !important;
              bottom: ${option.chatButtonSetting.marginBottom}px !important;
              ${option.chatButtonSetting.position == 'left'
          ? 'left : ' + option.chatButtonSetting.marginLeft + 'px'
          : 'right : ' + option.chatButtonSetting.marginRight + 'px'
        };
              border-radius: 10px;
              box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
              font: 400 normal 15px/1.3 -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue, sans-serif;
          }
          #wa-widget-send-button {
              margin: 0 0 ${option.chatButtonSetting.marginBottom}px 0 !important;      
              padding-left: ${option.chatButtonSetting.ctaText ? '15px' : '0px'};
              padding-right: ${option.chatButtonSetting.ctaText ? '15px' : '0px'};
              position: fixed !important;
              z-index: 16000160 !important;
              bottom: 0 !important;
              text-align: center !important;
              height: 50px;
              min-width: 50px;
              border-radius: ${option.chatButtonSetting.borderRadius}px;
              visibility: visible;
              transition: none !important;
              background-color: ${option.chatButtonSetting.backgroundColor};
              box-shadow: 2px 2px 6px rgba(0,0,0,0.4);
              ${option.chatButtonSetting.position == 'left'
          ? 'left : ' + option.chatButtonSetting.marginLeft + 'px'
          : 'right : ' + option.chatButtonSetting.marginRight + 'px'
        };
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content:center;
          }
          .wa-messenger-svg-whatsapp{
              fill: white;
              width: 41px;
              height: 50px;
              stroke: none;
              pointer-events: none;
          }
          .wa-chat-box-poweredby{
              text-align: center;
              font: 400 normal 15px/1.3 -apple-system, BlinkMacSystemFont, Roboto, Open Sans, Helvetica Neue, sans-serif;
              margin-bottom: 15px;
              margin-top: -10px;
              font-style: italic;
              font-size: 12px;
              color: lightgray;
          }
          @media only screen and (max-width: 600px) {
              .wa-chat-box
              {
                  width: auto;
                  position: fixed !important;
                  right: 20px!important;
                  left: 20px!important;
              }
          }
      `;
    }
  
    var styleSheet = document.createElement('style');
    styleSheet.innerText = styles;
    document.getElementsByTagName('head')[0].appendChild(styleSheet);
  }
  