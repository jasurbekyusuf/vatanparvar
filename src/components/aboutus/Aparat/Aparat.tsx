import React from 'react';
import aMoliya from './assets/a-moliya.jpg';
import aMatbuot from './assets/a-matbuot.jpg';
import aHarbiy from './assets/a-harbiy.jpg';
import aTexnik from './assets/a-texnik.jpg';
import aOmmaviy from './assets/a-ommaviy.jpg';
import aYuridik from './assets/a-yuridik.jpg';
import aiqtisod from './assets/a-iqtisod.jpg';
import aModdiy from './assets/a-moddiy.jpg';
import aHisobchi from './assets/a-hisobchi.jpg';
import aGuruh from './assets/a-guruh.jpg';
import "../leaders/assets/rahbariyat.scss";
import { PageTitle } from '../../ui/PageTitle';
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
//@ts-ignore

function Aparat() {
  const {t, i18n} = useTranslation();
  return(
    <div className="rahbariyat">
    <div className="container">
      <PageTitle title={t('MARKAZIY APPARAT')} />
         <div className="rahbariyat-info">
         <div className="rahbariyat-list">
           <div className="content-wrapper">
            <img src={aMoliya} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                {t('Moliya-xoʻjalik boshqarmasi')}
              </p>
              <p className="rahbariyat-list-text-name">
                {t('MUSTAKIMOV DAVRON ABDUVALIYEVICH')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p>{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998781503153">+998 (78) 150-31-53</a></p>
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
            <img src={aMatbuot} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
               {t('Matbuot kotibi')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('BOʻRANOV LAZIZ OLIMOVICH')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998712355263">+998 (71) 235-52-63</a></p>
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
            <img src={aHarbiy} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
             {t('Harbiy-vatanparvarlik va yoshlar bilan ishlash boʻlimi')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('ISRAILOV AZIZ DJURAKULOVICH')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+99871712348562">+998 (71) 234-85-62</a></p>
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
            <img src={aTexnik} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
              {t('Texnik va amaliy sport turlari boʻlimi')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('DJALALOV ABDUMAʼRUF ABDUKARIMOVICH')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998712358291">+998 (71) 235-82-91</a></p>
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
            <img src={aOmmaviy} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
             {t('Ommaviy texnik kasb mutaxassislarini tayyorlash boʻlimi')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('YAKUBOV TURAB JURAKULOVICH')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998712344317">+998 (71) 234-43-17</a></p>
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
            <img src={aYuridik} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
              {t('Yuridik boʻlim')}
              </p>
              <p className="rahbariyat-list-text-name">
                {t('MUMINOV FARRUX ABDIXALIMOVICH')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998712355263">+998 (71) 235-52-63</a></p>
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
            <img src={aiqtisod} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
                 {t('Moliya-iqtisod boʻlimi')}
              </p>
              <p className="rahbariyat-list-text-name">
                 {t('INAGAMOV ALISHER ABDUXAMIDOVICH')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998712348537">+998 (71) 234-85-37</a></p>
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
            <img src={aModdiy} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
               {t('Moddiy-texnik ta’minot va hisobga olish boʻlimi')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('RASULOV ULUGʻBEK TULKUNOVICH')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998712352024">+998 (71) 235-20-24</a></p>
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
            <img src={aHisobchi} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
               {t('Bosh hisobchi')}
              </p>
              <p className="rahbariyat-list-text-name">
              {t('ROGONOVA TATYANA VLADIMIROVNA')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998712353619">+998 (71) 235-36-19</a></p>
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
            <img src={aGuruh} alt="img" />
            <div className="rahbariyat-list-text">
              <p className="rahbariyat-list-text-position">
              {t('Guruh boshligʻi')}
              </p>
              <p className="rahbariyat-list-text-name">
                 {t('MOROZOVA EMMA VAGANOVNA')}
              </p>
              <div className="icons">
                <FaRegCalendarCheck  className="icon" size="2rem" color="#2595E7" cursor="pointer"/>
                <p >{t('Payshanba soat 16:00-18:00')}</p>
              </div>
              <div className="icons">
                <FiPhone className="icon" size="2.1rem" color="#2595E7" cursor="pointer"/>
                <p><a href="tel:+998712353227">+998 (71) 235-32-27</a></p>
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
  )
}

export default Aparat;
