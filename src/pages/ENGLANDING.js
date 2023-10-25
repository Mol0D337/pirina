import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import X15POPUP from "../components/X15POPUP";
import PortalPopup from "../components/PortalPopup";
import ENG20x15POPUP from "../components/ENG20x15POPUP";
import ENG70x50POPUP from "../components/ENG70x50POPUP";
import ENG100x70POPUP from "../components/ENG100x70POPUP";
import "./ENGLANDING.css";
import { Link } from 'react-router-dom';

const ScrollableText = ({ text }) => {
  return (
    <div className="scrollable-text">
      <p>{text}</p>
    </div>
  );
};

const ENGLANDING = () => {
  const navigate = useNavigate();
  const [isX15POPUPPopupOpen, setX15POPUPPopupOpen] = useState(false);
  const [isENG20x15POPUPOpen, setENG20x15POPUPOpen] = useState(false);
  const [isENG70x50POPUPOpen, setENG70x50POPUPOpen] = useState(false);
  const [isENG100x70POPUPOpen, setENG100x70POPUPOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 650); // обновляем значение isMobile при изменении размера экрана
    }
    
    window.addEventListener('resize', handleResize); // добавляем обработчик события изменения размера экрана
    
    return () => {
      window.removeEventListener('resize', handleResize); // удаляем обработчик события изменения размера экрана при размонтировании компонента
    };
  }, []);

  const onUATextClick = useCallback(() => {
    // Please sync "ENG MOBILE" to the project
  }, []);

  const onCTAClick = useCallback(() => {
    navigate("/eng-mob-20x15");
  }, [navigate]);

  const onCTA1Click = useCallback(() => {
    navigate("/eng-mob-70x50");
  }, [navigate]);

  const onCTA2Click = useCallback(() => {
    navigate("/eng-mob-100x70");
  }, [navigate]);

  const onCTA3Click = useCallback(() => {
    window.open("https://t.me/+380953546282");
  }, []);

  const onCTAContainerClick = useCallback(() => {
    navigate("/mob-20x15");
  }, [navigate]);

  const onCTAContainer1Click = useCallback(() => {
    navigate("/mob-70x50");
  }, [navigate]);

  const onCTAContainer2Click = useCallback(() => {
    navigate("/mob-100x70");
  }, [navigate]);

  const onUAClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/eng-mob-100x70");
  }, [navigate]);

  const onENClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCTA4Click = useCallback(() => {
    navigate("/eng-mob-100x70");
  }, [navigate]);

  const onCTA5Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='mobileContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactUsClick = useCallback(() => {
    window.open("https://t.me/+380953546282");
  }, []);

  const onContactUs1Click = useCallback(() => {
    window.open("https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y=");
  }, []);

  const onUAenClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onUA1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const openX15POPUPPopup = useCallback(() => {
    setX15POPUPPopupOpen(true);
  }, []);

  const closeX15POPUPPopup = useCallback(() => {
    setX15POPUPPopupOpen(false);
  }, []);

  const openENG20x15POPUP = useCallback(() => {
    setENG20x15POPUPOpen(true);
  }, []);

  const closeENG20x15POPUP = useCallback(() => {
    setENG20x15POPUPOpen(false);
  }, []);

  const openENG70x50POPUP = useCallback(() => {
    setENG70x50POPUPOpen(true);
  }, []);

  const closeENG70x50POPUP = useCallback(() => {
    setENG70x50POPUPOpen(false);
  }, []);

  const openENG100x70POPUP = useCallback(() => {
    setENG100x70POPUPOpen(true);
  }, []);

  const closeENG100x70POPUP = useCallback(() => {
    setENG100x70POPUPOpen(false);
  }, []);

  const onGroupButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gcontact']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText85Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gcards']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText86Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gadvantage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText87Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gcompany']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText88Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gcontact']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText89Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gcards']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText90Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gadvantage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText91Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gcompany']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText92Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gcontact']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText93Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='ginstagram']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText141Click = useCallback(() => {
    window.open(
      "https://docs.google.com/document/d/1en4deC86iiF71lSPzDPmRZebr43OJgs8zCThcUflKq8/edit?usp=sharing"
    );
  }, []);

  const onText142Click = useCallback(() => {
    window.open("https://docs.google.com/document/d/19jQYKRVtoPv6wJLa6kypQMGWC_ppVI38UqSPi3Tll8w/edit?usp=sharing");
  }, []);

  const onInstagram3Click = useCallback(() => {
    window.open("https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y=");
  }, []);

  const onWeHaveClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cards']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOurMissionClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='advantage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onInstagram4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='instagram']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWeCanClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='company']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactsClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contact']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWeHave1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='cards']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onOurMission1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='advantage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onInstagram5Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='instagram']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWeCan1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='company']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContacts1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='contact']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTermsAndConditionsClick = useCallback(() => {
    window.open(
      "https://docs.google.com/document/d/19jQYKRVtoPv6wJLa6kypQMGWC_ppVI38UqSPi3Tll8w/edit?usp=sharing"
    );
  }, []);

  const onPublicOfferClick = useCallback(() => {
    window.open(
      "https://docs.google.com/document/d/1en4deC86iiF71lSPzDPmRZebr43OJgs8zCThcUflKq8/edit?usp=sharing"
    );
  }, []);

  const onText41Click = useCallback(() => {
    window.open(
      "https://docs.google.com/document/d/1en4deC86iiF71lSPzDPmRZebr43OJgs8zCThcUflKq8/edit?usp=sharing"
    );
  }, []);

  const onText42Click = useCallback(() => {
    window.open(
      "https://docs.google.com/document/d/19jQYKRVtoPv6wJLa6kypQMGWC_ppVI38UqSPi3Tll8w/edit?usp=sharing"
    );
  }, []);


  return (
    <>
       {isMobile ? (
       <div className="mobile">
       <div className="pillows-small-001" />
       <img className="logo-icon1" alt="" src="/logomob.png" />
       <div className="mobile-child" />
       
       <div className="mobile-inner" />
       <div className="line-div" />
       <Link className="ua" to="/">
         ENG
       </Link>
       <a className="telegram-icon" href="https://t.me/+380953546282">
         <img className="icon" alt="" src="/icon1.svg" />
       </a>
       <b className="b">
         <span className="otxt">
           <p className="p">{`Ukraine for `}</p>
           <p className="p">strong hugs</p>
         </span>
       </b>
       <div className="odiv">
       <p className="ukraine-for">{`Hold me tender, hug me long, `}</p>
        <p className="ukraine-for">Take me to your heart.</p>
        </div>
       
       <b className="b2">Choose your Pir'ina:</b>
       <div className="card-1-parent">
         <div className="card-1">
           <div className="card-1-child" />
           <div className="x15">20x15</div>
           <button className="cta" onClick={onCTAClick}>
             <div className="cta-child" />
             <div className="div2">Little fella!</div>
           </button>
           <img className="card-1-item" alt="" src="/rectangle-71@2x.png" />
         </div>
         <div className="card-2">
           <div className="card-1-child" />
           <div className="div3">70х50</div>
           <button className="cta1" onClick={onCTA1Click}>
             <div className="cta-item" />
             <div className="div4">Dreamy dream!</div>
           </button>
           <img className="card-1-item" alt="" src="/rectangle-711@2x.png" />
         </div>
         <div className="card-3">
           <div className="card-1-child" />
           <div className="div5">100х70</div>
           <button className="cta2" onClick={onCTA2Click}>
             <div className="cta-inner" />
             <div className="div6">Dream big!</div>
           </button>
           <img className="card-3-item" alt="" src="/rectangle-712@2x.png" />
         </div>
       </div>
       <img className="background-icon" alt="" src="/background@2x.png" />
       <b className="we-will-be-container">
        <span className="ukraine-for-strong-container1">
          <p className="ukraine-for">{`We will be good `}</p>
          <p className="ukraine-for">together!</p>
        </span>
      </b>
      <div className="items7">
        <div className="div209">
          <div className="child80" />
          <b className="honey-rest-and">Honey rest and sweety sleep</b>
        </div>
        <div className="div210">
          <div className="child80" />
          <b className="mark-you-future-container">
            <p className="ukraine-for">Mark you future and visited</p>
            <p className="ukraine-for">destinations</p>
          </b>
        </div>
        <div className="div211">
          <div className="child82" />
          <b className="mark-you-future-container">Travel by car</b>
        </div>
        <div className="div212">
          <div className="child82" />
          <b className="open-ukraine-with">Open Ukraine with your kids</b>
        </div>
       </div>
       <div className="banner">
         <div className="banner-child" />
         <div className="banner-item" />
         <b className="b8">
         <ScrollableText text="Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow
            Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow
            Pillow - Yellow Pillow - Yellow" />
         </b>
         <b className="b9">
         <ScrollableText text="Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow
            Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow
            Pillow - Yellow Pillow - Yellow" />
         </b>
       </div>
       <img className="rectangle-icon" alt="" src="/rectangle-73@2x.png" />
       <div className="div11">
         <b className="b10">Soft</b>
         <div className="div12">
           <p className="p">{`Soft as a kitten, but `}</p>
           <p className="p">it won't tear your sofa</p>
         </div>
       </div>
       <div className="div13">
         <b className="b11">Hypoallergic</b>
         <div className="d-container">
           <p className="p">{`We fill it in with high-`}</p>
           <p className="p">{`quality holofiber of the `}</p>
           <p className="p">highest grade</p>
         </div>
       </div>
       <div className="div15">
         <b className="b11">Easy care</b>
         <div className="div12">
           <p className="p">{`You can wash it in a machine `}</p>
           <p className="p">or take it to the dry cleaner</p>
         </div>
       </div>
       <div className="div17">
         <b className="b11">Bright and positive</b>
         <div className="d-container">
           <p className="p">{`Vitamin D even when it rains. Psychologists advise yellow `}</p>
           <p className="p">colour in the house!</p>
         </div>
       </div>
       <img className="icon1" alt="" src="/icon5.svg" />
       <img className="group-icon" alt="" src="/group-54.svg" />
       <img className="mobile-child1" alt="" src="/group-53.svg" />
       <img className="mobile-child2" alt="" src="/group-52.svg" />
       <b className="instagram">Instagram</b>
       <div className="card">
         <div className="card1">
           <div className="card-child" />
           <div className="div18">
             <p className="p">
             Olenka and Iriska enjoy walking through Kyiv in September. 
             </p>
             <p className="p">&nbsp;</p>
             <p className="p">{`Pir’ina can be helpfull for chilling on the grass. Actually, they
              can comfortably suit anywhere, because together they are cozy,
              comfortable and soulful.`}</p>
           </div>
           <b className="pirinaukraina">pirina.ukraina</b>
           <img className="card-item" alt="" src="/group-14.svg" />
           <a href="https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y=">
           <img className="image-7-icon" alt="" src="/image-7@2x.png"/></a>
           <img className="card-inner" alt="" src="/rectangle-49@2x.png" />
         </div>
         <div className="card2">
           <div className="rectangle-div" />
           <div className="div19">
             <p className="p">
             This handsome mans' name is Volodymyr. You need to call your neighbours to roll the list of his talents, because there are not enough fingers on your hands. 
             </p>
             <p className="p">&nbsp;</p>
             <p className="p">{`Vova does dansing, plays sports, does good things, makes apt
              parodies, hosts holidays...`}</p>
           </div>
           <b className="pirinaukraina1">pirina.ukraina</b>
           <img className="card-child1" alt="" src="/group-15.svg" />
           <a href="https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y=">
           <img className="image-7-icon1" alt="" src="/image-7@2x.png"/></a> 
           <img className="card-child2" alt="" src="/rectangle-491@2x.png" />
         </div>
         <div className="card3">
           <div className="card-child3" />
           <div className="div20">
             <p className="p">{`If the fingers of the whole family glued together, it means that the schoolkid had been crafting on the weekend. `}</p>
             <p className="p">&nbsp;</p>
             <p className="p">
             But it turned out to be such a beauty. Like the original. Bright.
              Colourfull. Happy...
             </p>
           </div>
           <b className="pirinaukraina2">pirina.ukraina</b>
           <img className="card-child4" alt="" src="/group-16.svg" />
           <a href="https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y=">
           <img className="image-7-icon2" alt="" src="/image-7@2x.png"/></a>
           <img className="card-child5" alt="" src="/rectangle-492@2x.png" />
         </div>
       </div>
       <img className="mobile-child3" alt="" src="/rectangle-75@2x.png" />
       <b className="b14">
         <span className="txt">
           <p className="p">{`We cooperate with companies as well`}</p>
         </span>
       </b>
       <b className="b15">Contact us, we will do it as you please</b>
       <b className="b16">
       We will gladly create gifts with embroidered corporate logos for your
        company.
       </b>
       <button className="cta3" onClick={onCTA3Click}>
         <div className="cta-child1" />
         <b className="b17">Contacts</b>
       </button>
       <div className="banner1">
         <div className="banner-inner" />
         <div className="banner-child1" />
         <b className="pirina-ukraina-pirina">
         <ScrollableText text="Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina
            Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina
            Ukraina" />
         </b>
         <b className="pirina-ukraina-pirina-container">
           <p className="p">
           <ScrollableText text="Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina
            Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina
            Ukraina" />
           </p>
           <p className="p">&nbsp;</p>
           <p className="p">{` `}</p>
         </b>
       </div>
       <b className="b18">Our contacts</b>
       <img className="mobile-child4" alt="" src="/rectangle-76@2x.png" />
       <div className="e-mail">
         <b className="e-mail1">E-mail:</b>
         <div className="pirinaukrainagmailcom">pirina.ukraina@gmail.com</div>
       </div>
       <div className="schedule" data-scroll-to="mobileContact">
         <b className="b19">Schedule:</b>
         <div className="div21">Mon-Fr</div>
         <div className="div22">Sat</div>
         <div className="div23">Sun</div>
         <div className="div24">10:00-18:00</div>
         <div className="div25">10:00-15:00</div>
         <div className="div26">Day off</div>
       </div>
       <div className="mobile1" data-scroll-to="mobileContainer">
         <div className="div27">{`+38 095 354 62 82 `}</div>
         <b className="b20">Phone:</b>
       </div>
       <div className="mobile-child5" />
       <div className="telegram-parent">
         <a className="telegram" href="https://t.me/+380953546282">
           <img className="icon2" alt="" src="/icon3.svg" />
         </a>
         <a
           className="instagram1"
           href="https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y="
           target="_blank"
         >
           <img className="icon3" alt="" src="/icon4.svg" />
         </a>
       </div>
       <div className="div28" onClick={onText41Click}>
       Public Offer
       </div>
       <a
         className="a"
         target="_blank"
         onClick={onText42Click}
       >
         Terms and conditions
       </a>
       <div className="div29">2022</div>
     </div>
      ) : (
        <div className="glanding">
        <div className="glanding-child" />
        <div className="gfirst-screen">
          <img
            className="gpillows-small-001-icon2"
            alt=""
            src="/pillows-small-0011@2x.webp"
          />
          <div className="gline">
            <img className="gline-1-stroke" alt="" src="/line-1-stroke.svg" />
            <div className="gline-childd" />
            <div className="gline-item" />
            <div className="gline-inner" />
            <div className="gheader">
              <div className="gcontact-us" onClick={onContactUsClick}>
                <img
                  className="gtelegram-icon2"
                  alt=""
                  src="/telegram-icon.svg"
                />
                <b className="gtelegram1">write to telegram</b>
              </div>
              <div className="gcontact-us1" onClick={onContactUs1Click}>
                <img
                  className="gtelegram-icon3"
                  alt=""
                  src="/telegram-icon1.svg"
                />
              </div>
            </div>
            <button className="guaen" onClick={onUAenClick}>
              <span className="gtxt">
                <span className="gua2">EN</span>
                <span className="gen">/UA</span>
              </span>
            </button>
            <button className="gua3" onClick={onUA1Click}>
              ENG
            </button>
          </div>
          <div className="ognavigation">
            <b className="gb42" onClick={onText85Click}>
              we have
            </b>
            <b className="gb43" onClick={onText86Click}>
              mission
            </b>
            <b className="ginstagram3" onClick={onText93Click}>
              instagram
            </b>
            <b className="gb44" onClick={onText87Click}>
              we can
            </b>
            <b className="gb45" onClick={onText88Click}>
              contacts
            </b>
          </div>
          <div className="ognavigation1">
            <b className="gb46" onClick={onText89Click}>
              we have
            </b>
            <b className="gb47" onClick={onText90Click}>
              mission
            </b>
            <b className="ginstagram4" onClick={onText93Click}>
              instagram
            </b>
            <b className="gb48" onClick={onText91Click}>
              we can
            </b>
            <b className="gb49" onClick={onText92Click}>
              contacts
            </b>
          </div>
          <div className="gwrapper" data-animate-on-scroll>
            <b className="gb50">
              <span className="ogtxt">
                <p className="gp">{`Hold me tender, hug me long, `}</p>
                <p className="gp">Take me to your heart.</p>
              </span>
            </b>
          </div>
          <img className="glogo-icon2" alt="" src="/logo2.svg" />
          <img className="glogo-1-icon1" alt="" src="/logo-1@2x.png" />
          <div className="gdiv59">
            <p className="gp">Hold me tender, hug me long, </p>
            <p className="gp">Take me to your heart.</p>
          </div>
          <div className="ogcontainer">
            <b className="gb51">
              <span className="ogtxt">
                <p className="gp">{`ukraine for `}</p>
                <p className="gp">strong hugs</p>
              </span>
            </b>
          </div>
         
        </div>
        <div className="gcards" data-scroll-to="gcards">
          <div className="gcard-12">
            <div className="gcard-1-child2" />
            <div className="gx152">20x15</div>
            <button className="grectangle-button" onClick={openENG20x15POPUP} />
            <button className="gbutton" onClick={openENG20x15POPUP}>
            Little fella!
            </button>
            <img className="gcard-1-child3" alt="" src="/rectangle-713@2x.png" />
          </div>
          <div className="gcard-22">
            <div className="gcard-1-child2" />
            <div className="gcard-2-child3" />
            <div className="gdiv61">70х50</div>
            <button className="gbutton" onClick={openENG70x50POPUP}>
            Dreamy dream!
            </button>
            <img className="gcard-1-child3" alt="" src="/rectangle-90@2x.png" />
          </div>
          <div className="gcard-32">
            <div className="gcard-1-child2" />
            <div className="gcard-2-child3" />
            <div className="gdiv62">100х70</div>
            <button className="gbutton2" onClick={openENG100x70POPUP}>
            Dream big!
            </button>
            <img className="gcard-1-child3" alt="" src="/rectangle-714@2x.png" />
          </div>
          <b className="gb53">Choose your Pir'ina:</b>
        </div>
        <div className="gadvantage-3" data-scroll-to="gadvantage">
        <img className="gmask-group-icon" alt="" src="/podushka.png" />
          <img
            className="gadvantage-2-child"
            alt=""
            src="/podushka.png"
          />
          <div className="gdiv67">
            <b className="gb61">Confort</b>
            <div className="gdiv68">
              <p className="gp">Honey rest and sweety sleep</p>
            </div>
            <img className="gicon6" alt="" src="/coffeeicon.png" />
          </div>
          <div className="gdiv69">
            <b className="gb62">Goals</b>
            <div className="gdiv70">
            Mark you future and visited destinations
            </div>
            <img className="gchild6" alt="" src="/arrowicon.png" />
          </div>
          <div className="gdiv71">
            <b className="gb63">Travel</b>
            <div className="gdiv72">
            Travel by car
            </div>
            <img className="gchild7" alt="" src="/mapicon.png" />
          </div>
          <div className="gdiv73">
            <b className="gb64">Kids</b>
            <div className="gd-container2">
              <p className="gp">Open Ukraine with your kids</p>
            </div>
            <img className="gchild7" alt="" src="/kids.png" />
          </div>
        </div>
        <div className="gbanner4">
          <div className="gbanner-child6" />
          <div className="gbanner-child7" />
          <b className="gb59">
          <ScrollableText text="Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow
            Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow
            Pillow - Yellow Pillow - Yellow" />
          </b>
          <b className="gb60">
          <ScrollableText text="Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow
            Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow Pillow - Yellow
            Pillow - Yellow Pillow - Yellow" />
          </b>
        </div>
        <div className="gadvantage-2">
          <img className="gmask-group-icon" alt="" src="/mask-group2@2x.png" />
          <img
            className="gadvantage-2-child"
            alt=""
            src="/rectangle-731@2x.png"
          />
          <div className="gdiv67">
            <b className="gb61">Soft</b>
            <div className="gdiv68">
              <p className="gp">Soft as a kitten, but it won't tear your sofa</p>
            </div>
            <img className="gicon6" alt="" src="/icon5.svg" />
          </div>
          <div className="gdiv69">
            <b className="gb62">Hypoallergic</b>
            <div className="gdiv70">
            We fill it in with high-quality holofiber of the highest grade
            </div>
            <img className="gchild6" alt="" src="/group-541.svg" />
          </div>
          <div className="gdiv71">
            <b className="gb63">Easy care</b>
            <div className="gdiv72">
            You can wash it in a machine or take it to the dry cleaner
            </div>
            <img className="gchild7" alt="" src="/group-531.svg" />
          </div>
          <div className="gdiv73">
            <b className="gb64">Bright and positive</b>
            <div className="gd-container2">
              <p className="gp">{`Vitamin D even when it rains. Psychologists advise  `}</p>
              <p className="gp">yellow colour in the house!</p>
            </div>
            <img className="gchild7" alt="" src="/group-521.svg" />
          </div>
        </div>
        <div className="ginstagram5" data-scroll-to="ginstagram">
          <b className="ginstagram6">Instagram</b>
          <div className="gcard8" onClick={onContactUs1Click}>
            <div className="gcard9" onClick={onContactUs1Click}>
              <div className="gdiv74">
                <p className="gp">
                Olenka and Iriska enjoy walking through Kyiv in September. 
                </p>
                <p className="gp">&nbsp;</p>
                <p className="gp">{`Vova does dansing, plays sports, does good things, makes apt
                  parodies, hosts holidays and business events, and also creates
                  bold things in `}</p>
              </div>
              <b className="gpirinaukraina6">pirina.ukraina</b>
              <img className="gcard-child15" alt="" src="/group-1411.svg" />
              <a
                className="gimage-73"
                href="https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y="
              />
              <img
                className="gcard-child16"
                alt=""
                src="/rectangle-493@2x.png"
              />
            </div>
            <div className="gcard2" onClick={onContactUs1Click}>
              <div className="gdiv75">
                <p className="gp">
                This handsome mans' name is Volodymyr. You need to call your neighbours to roll the list of his talents, because there are not enough fingers on your hands. 
                </p>
                <p className="gp">&nbsp;</p>
                <p className="gp">{`Vova does dansing, plays sports, does good things, makes apt
                  parodies, hosts holidays and business events, and also creates
                  bold things in`}</p>
              </div>
              <b className="gpirinaukraina7">pirina.ukraina</b>
              <img className="gcard-child17" alt="" src="/group-151.svg" />
              <a
                className="gimage-74"
                href="https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y="
              />
              <img
                className="gcard-child18"
                alt=""
                src="/rectangle-494@2x.png"
              />
            </div>
            <div className="gcard11" onClick={onContactUs1Click}>
              <div className="gdiv76">
                <p className="gp">{`If the fingers of the whole family glued together, it means that the schoolkid had been crafting on the weekend. `}</p>
                <p className="gp">&nbsp;</p>
                <p className="gp">
                But it turned out to be such a beauty. Like the original.
                  Bright. Colourfull. Happy. So darling.
                </p>
              </div>
              <b className="gpirinaukraina8">pirina.ukraina</b>
              <img className="gcard-child19" alt="" src="/group-161.svg" />
              <a
                className="gimage-75"
                href="https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y="
              />
              <img
                className="gcard-child20"
                alt=""
                src="/rectangle-495@2x.png"
              />
            </div>
            <div className="gcard-child21" />
            <div className="gcard-child22" />
            <div className="gcard-child23" />
            <div className="gcard-child24" />
          </div>
          <div className="ginstagram-child" />
          <button
            className="ginstagram-item"
            onClick={onGroupButtonClick}
          />
        </div>
        <div className="gcompany" data-scroll-to="gcompany">
          <img className="gmask-group-icon1" alt="" src="/mask-group1@2x.png" />
          <b className="gb65">
            <span className="gtxt">
              <p className="gp">{`We cooperate with `}</p>
              <p className="gp">companies as well</p>
            </span>
          </b>
          <b className="gb66">
            <p className="gp">{`Contact us, we will do it as you please`}</p>
          </b>
          <button className="grectangle-parent" onClick={onGroupButtonClick}>
            <div className="ggroup-child" />
            <b className="gb67">Contacts</b>
          </button>
          <b className="gb68">
            <span className="gtxt">
              <p className="gp">{`We will gladly create gifts with `}</p>
              <p className="gp">{`embroidered corporate logos for your `}</p>
              <p className="gp">company.</p>
            </span>
          </b>
        </div>
        <div className="gbanner5">
          <div className="gbanner-child8" />
          <div className="gbanner-child9" />
          <b className="gina-ukraina-pirina">
          <ScrollableText text="Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina
            Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina
            Ukraina" />
          </b>
          <b className="girina-ukraina-pirina">
          <ScrollableText text="Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina
            Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina Ukraina Pir`ina
            Ukraina" />
          </b>
        </div>
        <div className="gcontact" data-scroll-to="gcontact">
          <img className="gcontact-child" alt="" src="/rectangle-732@2x.png" />
          <b className="gb69">Our contacts</b>
          <div className="ge-mail4">
            <b className="ge-mail5">E-mail:</b>
            <div className="gpirinaukrainagmailcom2">
              pirina.ukraina@gmail.com
            </div>
          </div>
          <div className="gschedule2">
            <b className="gb70">Schedule:</b>
            <div className="gdiv77">Mon-Fr</div>
            <div className="gdiv78">Sat</div>
            <div className="gdiv79">Sun</div>
            <div className="gdiv80">10:00-18:00</div>
            <div className="gdiv81">10:00-15:00</div>
            <div className="gdiv82">Day off</div>
          </div>
          <div className="gmobile3">
            <b className="gb71">Phone:</b>
            <div className="gdiv83">{`+38 095 354 62 82 `}</div>
          </div>
        </div>
        <div className="gfooter">
          <div className="gdiv84">2022</div>
          <div className="ogdiv85" onClick={onText141Click}>
          Public Offer
          </div>
          <div className="gdiv86" onClick={onText142Click}>
          Terms and conditions
          </div>
          <a className="gtelegram2" href="https://t.me/+380953546282">
            <img className="gicon1" alt="" src="/icon7.svg" />
          </a>
          <a
            className="ginstagram7"
            href="https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y="
            onClick={onInstagram4Click}
          >
            <img className="gicon9" alt="" src="/icon8.svg" />
          </a>
        </div>
      </div> )}
      {isX15POPUPPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeX15POPUPPopup}
        >
          <X15POPUP onClose={closeX15POPUPPopup} />
        </PortalPopup>
      )}
      {isENG20x15POPUPOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeENG20x15POPUP}
        >
          <ENG20x15POPUP onClose={closeENG20x15POPUP} />
        </PortalPopup>
      )}
      {isENG70x50POPUPOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeENG70x50POPUP}
        >
          <ENG70x50POPUP onClose={closeENG70x50POPUP} />
        </PortalPopup>
      )}
      {isENG100x70POPUPOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeENG100x70POPUP}
        >
          <ENG100x70POPUP onClose={closeENG100x70POPUP} />
        </PortalPopup>
        )}
      </>
      );
    };

export default ENGLANDING;
