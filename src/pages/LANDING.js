import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import X15POPUP from "../components/X15POPUP";
import PortalPopup from "../components/PortalPopup";
import X50POPUP from "../components/X50POPUP";
import X70POPUP from "../components/X70POPUP";
import "./LANDING.css";
import { Helmet } from 'react-helmet';
import { TailSpin } from "react-loader-spinner";
import { Link } from 'react-router-dom';


const ScrollableText = ({ text }) => {
  return (
    <div className="scrollable-text">
      <p>{text}</p>
    </div>
  );
};

const LANDING = () => {
 
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [isX15POPUPPopupOpen, setX15POPUPPopupOpen] = useState(false);
  const [isX15POPUPPopup1Open, setX15POPUPPopup1Open] = useState(false);
  const [isX50POPUPPopupOpen, setX50POPUPPopupOpen] = useState(false);
  const [isX70POPUPPopupOpen, setX70POPUPPopupOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 650);

  const onContactUsClick = useCallback(() => {
    window.open("https://t.me/+380953546282");
  }, []);

  const onContactUs1Click = useCallback(() => {
    window.open("https://t.me/+380953546282");
  }, []);

  const onUAenClick = useCallback(() => {
    navigate("/eng-landing");
  }, [navigate]);

  const onUAClick = useCallback(() => {
    navigate("/eng-landing");
  }, [navigate]);

  const onTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gcards']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onInstagram1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='ginstagram']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gcompany']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText3Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gcontact']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gcards']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onInstagram2Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='ginstagram']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText6Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gcompany']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText7Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gcontact']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

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

  const openX10070Popup = useCallback(() => {
    setX10070PopupOpen(true);
  }, []);

  const closeX10070Popup = useCallback(() => {
    setX10070PopupOpen(false);
  }, []);

  const onCard1Click = useCallback(() => {
    window.open("https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y=");
  }, []);

  const onCard4Click = useCallback(() => {
    window.open("https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y=");
  }, []);

  const onText50Click = useCallback(() => {
    window.open(
      "https://docs.google.com/document/d/1en4deC86iiF71lSPzDPmRZebr43OJgs8zCThcUflKq8/edit?usp=sharing"
    );
  }, []);

  const onInstagram3Click = useCallback(() => {
    window.open("https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y=");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

  const onCTAContainerClick = useCallback(() => {
    navigate("/m20");
  }, [navigate]);

  const onCTAContainer1Click = useCallback(() => {
    navigate("/m70");
  }, [navigate]);

  const onCTAContainer2Click = useCallback(() => {
    navigate("/m100");
  }, [navigate]);

  const onCTAClick = useCallback(() => {
    navigate("/m20");
  }, [navigate]);

  const onCTA1Click = useCallback(() => {
    navigate("/m70");
  }, [navigate]);

  const onCTA2Click = useCallback(() => {
    navigate("/m100");
  }, [navigate]);

  const onCTA3Click = useCallback(() => {
    window.open("https://t.me/+380953546282");
  }, []);

  const onUA1Click = useCallback(() => {
    navigate("/eng-landing");
  }, [navigate]);

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

  const openX15POPUPPopup1 = useCallback(() => {
    setX15POPUPPopup1Open(true);
  }, []);

  const closeX15POPUPPopup1 = useCallback(() => {
    setX15POPUPPopup1Open(false);
  }, []);

  const openX50POPUPPopup = useCallback(() => {
    setX50POPUPPopupOpen(true);
  }, []);

  const closeX50POPUPPopup = useCallback(() => {
    setX50POPUPPopupOpen(false);
  }, []);

  const openX70POPUPPopup = useCallback(() => {
    setX70POPUPPopupOpen(true);
  }, []);

  const closeX70POPUPPopup = useCallback(() => {
    setX70POPUPPopupOpen(false);
  }, []);

  const onCardClick = useCallback(() => {
    window.open("https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y=");
  }, []);

  const onRectangleButton1Click = useCallback(() => {
    window.open("https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y=");
  }, []);

  const onGroupButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='gcontact']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onText133Click = useCallback(() => {
    window.open(
      "https://docs.google.com/document/d/1en4deC86iiF71lSPzDPmRZebr43OJgs8zCThcUflKq8/edit?usp=sharing"
    );
  }, []);

  const onText134Click = useCallback(() => {
    window.open(
      "https://docs.google.com/document/d/19jQYKRVtoPv6wJLa6kypQMGWC_ppVI38UqSPi3Tll8w/edit?usp=sharing"
    );
  }, []);

  const onInstagram4Click = useCallback(() => {
    window.open("https://instagram.com/pirina.ukraina?igshid=YmMyMTA2M2Y=");
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
      {isLoading ? (
        <div className="loader-container">
          <img
      src="/loader.svg"
      style={{
        width: '300px',
        height: '200px',
      }}
    />
        </div>
      ) : (
      <>
    <div>
      <Helmet>
        <title>PIR'INA</title>
        <meta property="og:title" content="PIR'INA" />
        <link rel="shortcut icon" type="image/png" href="/p.png" />
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11313272043"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11313272043');
          `}
        </script>

        {/* Meta Pixel Code */}
        <script>
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1027054625412243');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>{`
        <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1027054625412243&ev=PageView&noscript=1"
        />
        `}</noscript>


        {/* End Meta Pixel Code */}

        {/* Мета-тег для верификации домена на Facebook */}
        <meta name="facebook-domain-verification" content="f8jqz6g9ka8aoppfnhz5omfotna9wz" />
      </Helmet>
    </div>
    {isMobile ? (
     <div className="mobile">
     <div className="pillows-small-001" />
     <img className="logo-icon1" alt="" src="/logomob.png" />
     <div className="mobile-child" />
     
     <div className="mobile-inner" />
     <div className="line-div" />
     <Link className="ua" to="/eng-landing">
       UA
     </Link>
     <a className="telegram-icon" href="https://t.me/+380953546282">
       <img className="icon" alt="" src="/icon1.svg" />
     </a>
     <b className="b">
       <span className="otxt">
         <p className="p">{`Україна, яку `}</p>
         <p className="p">можна обійняти</p>
       </span>
     </b>
     <div className="odiv">
      <p className="ukraine-for">Подушка - це По Душі. Всюди своя. Всюди рідна.</p>
      </div>
    
     <b className="b2">Обирай свою Пір'їну:</b>
          <div className="card-1-parent">
            <div className="card-1">
              <div className="card-1-child" />
              <div className="x15">20x15</div>
              <div className="cta" onClick={onCTAContainerClick}>
                <div className="cta-child" />
                <div className="div2">Хочу малечу!</div>
              </div>
              <img className="card-1-item" alt="" src="/rectangle-71@2x.png" />
            </div>
            <div className="card-2">
              <div className="card-1-child" />
              <div className="div3">70х50</div>
              <div className="cta1" onClick={onCTAContainer1Click}>
                <div className="cta-item" />
                <div className="div4">Мрію про таку!</div>
              </div>
              <img className="card-1-item" alt="" src="/rectangle-711@2x.png" />
            </div>
            <div className="card-3">
              <div className="card-1-child" />
              <div className="div5">100х70</div>
              <div className="cta2" onClick={onCTAContainer2Click}>
                <div className="cta-inner" />
                <div className="sdiv6">Люблю побільше!</div>
              </div>
              <img className="card-3-item" alt="" src="/rectangle-712@2x.png" />
            </div>
          </div>
     <img className="background-icon" alt="" src="/background@2x.png" />
     <b className="we-will-be-container">
        <span className="ukraine-for-strong-container1">
          <p className="ukraine-for">Нам буде добре разом!</p>
        </span>
      </b>
      <div className="items7">
        <div className="div209">
          <div className="child80" />
          <b className="honey-rest-and">Комфортно відпочивати і солодко спати</b>
        </div>
        <div className="div210">
          <div className="child80" />
          <b className="mark-you-future-container">
            <p className="ukraine-for">Позначати міста, де були </p>
            <p className="ukraine-for">і ще побуваємо</p>
          </b>
        </div>
        <div className="div211">
          <div className="child82" />
          <b className="mark-you-future-container">Подорожувати в авто</b>
        </div>
        <div className="div212">
          <div className="child82" />
          <b className="open-ukraine-with">Вивчати з малечею Україну</b>
        </div>
     </div>
     <div className="banner">
       <div className="banner-child" />
       <div className="banner-item" />
       <b className="b8">
       <ScrollableText text="Подушка - Подружка Подушка - Подружка Подушка - Подружка Подушка -
            Подружка Подушка - Подружка Подушка - Подружка Подушка - Подружка Подушка - Подружка Подушка -
            Подружка Подушка - Подружка" />
       </b>
       <b className="b9">
       <ScrollableText text="Подушка - Подружка Подушка - Подружка Подушка - Подружка Подушка -
            Подружка Подушка - Подружка Подушка - Подружка Подушка - Подружка Подушка - Подружка Подушка -
            Подружка Подушка - Подружка" />
       </b>
     </div>
     <img className="rectangle-icon" alt="" src="/rectangle-73@2x.png" />
     <div className="div11">
       <b className="b10">Мʼяка</b>
       <div className="div12">
         <p className="p">{`М'яка, як кошеня, `}</p>
         <p className="p">але не дере твій диван</p>
       </div>
     </div>
     <div className="div13">
       <b className="b11">Гіпоалергенна</b>
       <div className="d-container">
         <p className="p">{`Наповнюємо якісним `}</p>
         <p className="p">{`холлофайбером вищого `}</p>
         <p className="p">ґатунку</p>
       </div>
     </div>
     <div className="div15">
       <b className="b11">Проста в догляді</b>
       <div className="div12">
         <p className="p">{`Можна випрати в машинці, `}</p>
         <p className="p">або віднести до хімчистки</p>
       </div>
     </div>
     <div className="div17">
       <b className="b11">Яскрава і позитивна</b>
       <div className="d-container">
         <p className="p">{`Вітамін D навіть в дощ. Психологи радять `}</p>
         <p className="p">жовтий в домі!</p>
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
                  Оленка та Іриска насолоджуються прогулянкою вересневим Києвом.
                </p>
                <p className="p">&nbsp;</p>
                <p className="p">{`А з Пір'їною вони можуть розміститись на травичці, та й взагалі зручно влаштуватись будь-де, бо разом затишно, комфортно і душевно. `}</p>
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
                  Цього красивого чоловіка звуть Володимир. Щоб перерахувати
                  його таланти, треба звати сусідів, бо власних пальців не
                  вистачить.
                </p>
                <p className="p">&nbsp;</p>
                <p className="p">{`Вова танцює, займається спортом, робить добро, видає влучні пародії, проводить свята і ділові івенти, а ще ... `}</p>
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
                <p className="p">{`Якщо у всієї родини пальці злиплись від ПВА, значить на вихідні школярику задавали поробку. `}</p>
                <p className="p">&nbsp;</p>
                <p className="p">
                  Але ж вийшла така гарнюня! Один в один з оригіналом. Яскрава.
                  Радісна. Рідна-рідна.
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
         <p className="p">{`А ще ми співпрацюємо з компаніями`}</p>
       </span>
     </b>
     <b className="b15">Звертайтесь, зробимо як для себе</b>
     <b className="b16">
     Залюбки створимо для вашої компанії подарунки з вишитими фірмовими
        логотипами.
     </b>
     <button className="cta3" onClick={onCTA3Click}>
       <div className="cta-child1" />
       <b className="b17">КОНТАКТИ</b>
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
     <b className="b18">Наші контакти</b>
     <img className="mobile-child4" alt="" src="/rectangle-76@2x.png" />
     <div className="e-mail">
       <b className="e-mail1">E-mail:</b>
       <div className="pirinaukrainagmailcom">pirina.ukraina@gmail.com</div>
     </div>
     <div className="schedule" data-scroll-to="mobileContact">
       <b className="b19">Графік роботи:</b>
       <div className="div21">Пн-Пт</div>
       <div className="div22">Сб</div>
       <div className="div23">Нд</div>
       <div className="div24">10:00-18:00</div>
       <div className="div25">10:00-15:00</div>
       <div className="div26">Вихідний</div>
     </div>
     <div className="mobile1" data-scroll-to="mobileContainer">
       <div className="div27">{`+38 095 354 62 82 `}</div>
       <b className="b20">Номер телефону:</b>
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
     Договір публічної оферти
     </div>
     <a
       className="a"
       target="_blank"
       onClick={onText42Click}
     >
       Правила та умови
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
                <b className="gtelegram1">Напишіть нам в telegram</b>
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
                <span className="gua2">UA</span>
                <span className="gen">/en</span>
              </span>
            </button>
            <button className="gua3" onClick={onUA1Click}>
              UA
            </button>
          </div>
          <div className="ognavigation">
            <b className="gb42" onClick={onText85Click}>
              маємо
            </b>
            <b className="gb43" onClick={onText86Click}>
              сенси
            </b>
            <b className="ginstagram3" onClick={onText93Click}>
              instagram
            </b>
            <b className="ogb44" onClick={onText87Click}>
              можемо
            </b>
            <b className="ogb45" onClick={onText88Click}>
              Контакти
            </b>
          </div>
          <div className="ognavigation1">
            <b className="gb46" onClick={onText89Click}>
              маємо
            </b>
            <b className="gb47" onClick={onText90Click}>
              сенси
            </b>
            <b className="ginstagram4" onClick={onText93Click}>
              instagram
            </b>
            <b className="gb48" onClick={onText91Click}>
              можемо
            </b>
            <b className="gb49" onClick={onText92Click}>
              Контакти
            </b>
          </div>
          <div className="gwrapper" data-animate-on-scroll>
            <b className="gb50">
              <span className="ogtxt">
                <p className="gp">{`Україна, яку `}</p>
                <p className="gp">можна обійняти</p>
              </span>
            </b>
          </div>
          <img className="glogo-icon2" alt="" src="/logo2.svg" />
          <img className="glogo-1-icon1" alt="" src="/logo-1@2x.png" />
          <div className="gdiv59">
            <p className="gp">Подушка - це По Душі. Всюди своя. Всюди рідна.</p>
          </div>
          <div className="ogcontainer">
            <b className="gb51">
              <span className="ogtxt">
                <p className="gp">{`Україна, яку `}</p>
                <p className="gp">можна обійняти</p>
              </span>
            </b>
          </div>
         
        </div>
        <div className="gcards" data-scroll-to="gcards">
          <div className="gcard-12">
            <div className="gcard-1-child2" />
            <div className="gx152">20x15</div>
            <button className="grectangle-button" onClick={openX15POPUPPopup} />
            <button className="gbutton" onClick={openX15POPUPPopup1}>
              Хочу малечу!
            </button>
            <img className="gcard-1-child3" alt="" src="/rectangle-713@2x.png" />
          </div>
          <div className="gcard-22">
            <div className="gcard-1-child2" />
            <div className="gcard-2-child3" />
            <div className="gdiv61">70х50</div>
            <button className="gbutton" onClick={openX50POPUPPopup}>
              Мрію про таку!
            </button>
            <img className="gcard-1-child3" alt="" src="/rectangle-90@2x.png" />
          </div>
          <div className="gcard-32">
            <div className="gcard-1-child2" />
            <div className="gcard-2-child3" />
            <div className="gdiv62">100х70</div>
            <button className="gbutton2" onClick={openX70POPUPPopup}>
              Люблю побільше!
            </button>
            <img className="gcard-1-child3" alt="" src="/rectangle-714@2x.png" />
          </div>
          <b className="gb53">Обирай свою Пір'їну:</b>
        </div>
        <div className="gadvantage-3" data-scroll-to="gadvantage">
        <img className="gmask-group-icon" alt="" src="/podushka.png" />
          <img
            className="gadvantage-2-child"
            alt=""
            src="/podushka.png"
          />
          <div className="gdiv67">
            <b className="gb61">Для комфорту</b>
            <div className="gdiv68">
              <p className="gp">Комфортно відпочивати і солодко спати</p>
            </div>
            <img className="gicon6" alt="" src="/coffeeicon.png" />
          </div>
          <div className="gdiv69">
            <b className="gb62">Для цiлей</b>
            <div className="gdiv70">
            Позначати міста, де були і ще побуваємо
            </div>
            <img className="gchild6" alt="" src="/arrowicon.png" />
          </div>
          <div className="gdiv71">
            <b className="gb63">Для подорожей</b>
            <div className="gdiv72">
            Подорожувати в авто
            </div>
            <img className="gchild7" alt="" src="/mapicon.png" />
          </div>
          <div className="gdiv73">
            <b className="gb64">Для малечi</b>
            <div className="gd-container2">
              <p className="gp">Вивчати з малечею Україну</p>
            </div>
            <img className="gchild7" alt="" src="/kids.png" />
          </div>
        </div>
        <div className="ogbanner4">
          <div className="ogbanner-child6" />
          <div className="ogbanner-child7" />
          <b className="ogb59">
          <ScrollableText text="Подушка - Подружка Подушка - Подружка Подушка - Подружка Подушка -
            Подружка Подушка - Подружка Подушка - Подружка Подушка - Подружка Подушка - Подружка Подушка -
            Подружка Подушка - Подружка" />
          </b>
          <b className="ogb60">
          <ScrollableText text="Подушка - Подружка Подушка - Подружка Подушка - Подружка Подушка -
            Подружка Подушка - Подружка Подушка - Подружка Подушка - Подружка Подушка - Подружка Подушка -
            Подружка Подушка - Подружка" />
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
            <b className="gb61">Мʼяка</b>
            <div className="gdiv68">
              <p className="gp">М'яка, як кошеня, але не дере твій диван</p>
            </div>
            <img className="gicon6" alt="" src="/icon5.svg" />
          </div>
          <div className="gdiv69">
            <b className="gb62">Гіпоалергенна</b>
            <div className="gdiv70">
              Наповнюємо якісним холлофайбером вищого ґатунку
            </div>
            <img className="gchild6" alt="" src="/group-541.svg" />
          </div>
          <div className="gdiv71">
            <b className="gb63">Проста в догляді</b>
            <div className="gdiv72">
              Можна випрати в машинці, або віднести до хімчистки
            </div>
            <img className="gchild7" alt="" src="/group-531.svg" />
          </div>
          <div className="gdiv73">
            <b className="gb64">Яскрава і позитивна</b>
            <div className="gd-container2">
              <p className="gp">{`Вітамін D навіть `}</p>
              <p className="gp">в дощ. Психологи радять жовтий в домі!</p>
            </div>
            <img className="gchild7" alt="" src="/group-521.svg" />
          </div>
        </div>
        <div className="ginstagram5" data-scroll-to="ginstagram">
          <b className="ginstagram6">Instagram</b>
          <div className="gcard8" onClick={onCard1Click}>
            <div className="gcard9" onClick={onCardClick}>
              <div className="gdiv74">
                <p className="gp">
                  Оленка та Іриска насолоджуються прогулянкою вересневим Києвом.
                </p>
                <p className="gp">&nbsp;</p>
                <p className="gp">{`А з Пір'їною вони можуть розміститись на травичці, та й взагалі зручно влаштуватись будь-де, бо разом затишно, комфортно і душевно. `}</p>
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
            <div className="gcard2" onClick={onCard1Click}>
              <div className="gdiv75">
                <p className="gp">
                  Цього красивого чоловіка звуть Володимир. Щоб перерахувати
                  його таланти, треба звати сусідів, бо власних пальців не
                  вистачить.
                </p>
                <p className="gp">&nbsp;</p>
                <p className="gp">{`Вова танцює, займається спортом, робить добро, видає влучні пародії, проводить свята і ділові івенти, а ще створює сміливі речі в `}</p>
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
            <div className="gcard11" onClick={onCard4Click}>
              <div className="gdiv76">
                <p className="gp">{`Якщо у всієї родини пальці злиплись від ПВА, значить на вихідні школярику задавали поробку. `}</p>
                <p className="gp">&nbsp;</p>
                <p className="gp">
                  Але ж вийшла така гарнюня! Один в один з оригіналом. Яскрава.
                  Радісна. Рідна-рідна.
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
            onClick={onRectangleButton1Click}
          />
        </div>
        <div className="gcompany" data-scroll-to="gcompany">
          <img className="gmask-group-icon1" alt="" src="/mask-group1@2x.png" />
          <b className="gb65">
            <span className="gtxt">
              <p className="gp">{`А ще ми співпрацюємо `}</p>
              <p className="gp">з компаніями</p>
            </span>
          </b>
          <b className="gb66">
            <p className="gp">{`Звертайтесь, зробимо як для `}</p>
            <p className="gp">себе</p>
          </b>
          <button className="grectangle-parent" onClick={onGroupButtonClick}>
            <div className="ggroup-child" />
            <b className="gb67">КОНТАКТИ</b>
          </button>
          <b className="gb68">
            <span className="gtxt">
              <p className="gp">{`Залюбки створимо для вашої компанії `}</p>
              <p className="gp">{`подарунки з вишитими фірмовими `}</p>
              <p className="gp">логотипами.</p>
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
          <b className="gb69">Наші контакти</b>
          <div className="ge-mail4">
            <b className="ge-mail5">E-mail:</b>
            <div className="gpirinaukrainagmailcom2">
              pirina.ukraina@gmail.com
            </div>
          </div>
          <div className="gschedule2">
            <b className="gb70">Графік роботи:</b>
            <div className="gdiv77">Пн-Пт</div>
            <div className="gdiv78">Сб</div>
            <div className="gdiv79">Нд</div>
            <div className="gdiv80">10:00-18:00</div>
            <div className="gdiv81">10:00-15:00</div>
            <div className="gdiv82">Вихідний</div>
          </div>
          <div className="gmobile3">
            <b className="gb71">Номер телефону:</b>
            <div className="gdiv83">{`+38 095 354 62 82 `}</div>
          </div>
        </div>
        <div className="gfooter">
          <div className="gdiv84">2022</div>
          <div className="ogdiv85" onClick={onText133Click}>
            Договір публічної оферти
          </div>
          <div className="gdiv86" onClick={onText134Click}>
          Правила та умови
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
      {isX15POPUPPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeX15POPUPPopup1}
        >
          <X15POPUP onClose={closeX15POPUPPopup1} />
        </PortalPopup>
      )}
      {isX50POPUPPopupOpen && (
        <PortalPopup
          overlayColor="rgba(0, 0, 0, 0.3)"
          placement="Centered"
          onOutsideClick={closeX50POPUPPopup}
        >
          <X50POPUP onClose={closeX50POPUPPopup} />
        </PortalPopup>
      )}
      {isX70POPUPPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeX70POPUPPopup}
        >
          <X70POPUP onClose={closeX70POPUPPopup} />
        </PortalPopup>
      )}
    </>
    )}
  </>
  );
};

export default LANDING;
