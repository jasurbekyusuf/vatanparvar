import React from 'react';
import { PageTitle } from '../../ui/PageTitle';
import tKadr from "./assets/t-kadrlar.jpg";
import tRespublika from "./assets/t-respublika.jpg";
import tRais from "./assets/Kamolov-1.jpg";
import "../leaders/assets/rahbariyat.scss";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { MdLanguage} from "react-icons/md";
import { useTranslation } from 'react-i18next';
function Subsidiaries() {
  const {t} = useTranslation();
  return(
    <div className="rahbariyat">
    <div className="container">
      <PageTitle title={t('TASSARUFIDAGI TASHKILOTLAR')} />
        <div className="rahbariyat-info">
         <div className="rahbariyat-list">
           <div className="content-wrapper">
            <img src={tKadr} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
               {t('Kadrlar malakasini oshirish va qayta tayyorlash markazi')}
              </p>
              <p className="rahbariyat-list-text-name">
                 {t('UMAROV MAJID XAMDAMOVICH')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p className="ppp">{t('Payshanba soat 16:00-18:00')}</p> 
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="#">------</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="2.1rem" color="#2595E7" cursor="pointer"
                />
                <p><a href="#">-----</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="https://vatanparvar.uz/uz/asosiy/">vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
          <div className="content-wrapper">
            <img src={tRespublika} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
               {t('Respublika texnik va amaliy sport turlari markazi')}
              </p>
              <p className="rahbariyat-list-text-name">
                   {t('KURBANIYAZOV ANVAR YULDASHEVICH')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998712236712">+998 (71) 223-67-12</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="2.1rem" color="#2595E7" cursor="pointer"
                />
                <p><a href="#">-----</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="https://vatanparvar.uz/uz/asosiy/">vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
           <div className="content-wrapper">
            <img src={tRais} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                {t('“VATANPARVAR” Axborot texnologiyalari markazi')}
              </p>
              <p className="rahbariyat-list-text-name">
                {t('KAMALOV SARVAR TOXIROVICH')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p >{t('Juma soat 15:00-17:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998712079293">+998 (71) 207-92-93</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="2.1rem" color="#2595E7" cursor="pointer"
                />
                <p><a href="#">info@vitc.uz</a></p>
              </div>
              <div className="web">
                <MdLanguage className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="https://vatanparvar.uz/uz/asosiy/">vatanparvar.uz</a></p>
              </div>
            </div>
            </div>
          </div>
        </div>
    </div>
  </div>
  );
}

export default Subsidiaries;
