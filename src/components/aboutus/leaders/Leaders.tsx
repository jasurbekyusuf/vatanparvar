import React from "react";
import { PageTitle } from "../../ui/PageTitle";
import rRais from "./assets/r-rais.jpg";
import oRais1 from "./assets/o-rais1.jpg";
import oRais2 from "./assets/o-rais2.jpg";
import oRais3 from "./assets/o-rais3.jpg";
import yRais from "./assets/y-rais.jpg";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import "./assets/rahbariyat.scss";
import { useTranslation } from 'react-i18next';
//@ts-ignore
function Leaders() {
  const {t} = useTranslation();
  return (
    <div className="rahbariyat">
      <div className="container">
        <PageTitle title={t('RAHBARIYAT')} />
        <div className="rahbariyat-info">
          <div className="rahbariyat-list">
           <div className="content-wrapper">
            <img src={rRais} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
              {t('markaziy_kengash_raisi')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('BATIROV XUSAN ARZUDINOVICH')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p>{t('Juma soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998781503150">+998 (78) 150 - 31 - 50</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon iconn" size="2.1rem" color="#2595E7" cursor="pointer"
                />
                <p><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>

            </div>
            </div> 
          </div>
          <div className="rahbariyat-list">
             <div className="content-wrapper">
            <img src={oRais1} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">{t('Rais oʻrinbosari')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('Mulabayev Nurmaxamat Xikmatovich')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p className="ppp">{t('Juma soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998781503151">+998 (78) 150 - 31 - 51</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="2.1rem" color="#2595E7" cursor="pointer"
                />
                <p><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
          <div className="content-wrapper">
            <img src={oRais2} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">{t('Rais oʻrinbosari')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('Maxmudov Xasanbay Kadirjanovich')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p className="ppp">{t('Juma soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998781503154">+998 (78) 150-31-54</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="2.1rem" color="#2595E7" cursor="pointer"
                />
                <p><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
          <div className="content-wrapper">
            <img src={oRais3} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">{t('Rais oʻrinbosari')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('Abdusamatov Alisher Baxadirovich')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p className="ppp">{t('Juma soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998781503155">+998 (78) 150-31-55</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="2.1rem" color="#2595E7" cursor="pointer"
                />
                <p><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          <div className="rahbariyat-list">
          <div className="content-wrapper">
            <img src={yRais} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">{t('Tashkiliy-kadrlar boshqarmasi boshligʻi - Rais yordamchisi')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('Isakov Maxsud Shamsidinovich')}  
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p className="ppp">{t('Juma soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998781503152">+998 (78) 150-31-52</a></p>
              </div>
              <div className="icons">
                <HiOutlineMail className="icon" size="2.1rem" color="#2595E7" cursor="pointer"
                />
                <p><a href="#">mkvatanparvar@yandex.ru</a></p>
              </div>
            </div>
            </div>
          </div>
          
        
        </div>
      </div>
    </div>
  );
}

export default Leaders;
