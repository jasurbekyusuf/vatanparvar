import React from 'react';
import { PageTitle } from '../../ui/PageTitle';
import "./assets/hamkorlik.scss";
import img1 from "./assets/image1.png";
import img2 from "./assets/image2.png";
import img3 from "./assets/image3.png";
import img4 from "./assets/image4.png";
import img5 from "./assets/image5.png";
import img6 from "./assets/image6.png";
import { useTranslation } from 'react-i18next';
function Cooperation() {
  const {t} = useTranslation();
  return (
      <div className="hamkorlik">
          <div className="container">
              <PageTitle title={t('XALQARO HAMKORLIK')}/>
              <div className="containerr">
                  <div className="hamkorlik-info">
                     <div className="img">
                     </div>
                     <p>Oʻzbekiston Respublikasi mudofaasiga koʻmaklashuvchi “Vatanparvar” tashkiloti hozirda Аeronavtika xalqaro federatsiyasi (FAI), Xalqaro biatlon ittifoqi (IBU), Xalqaro Kemamodelchilik federatsiyasi (NAVIGA), Xalqaro triatlon uyushmasi (ITU), Osiyo triatlon konfederatsiyasi (ASTC)ning toʻlaqonli aʼzosi hisoblanadi.</p>  
                     <p>Mazkur xalqaro federatsiyalar bilan oʻzaro hamkorlik ishlari tegishli kongress, konferensiya va syezdlarda tasdiqlanadigan har yillik sport tadbirlari kalendar rejasiga muvofiq amalga oshiriladi.</p>
                     <p>Xalqaro sport tashkilotlariga aʼzolik tegishli sport yoʻnalishlarini rivojlantirishga doir masalalarda ovoz berish huquqini va Oʻzbekiston sportchilarining nufuzli xalqaro musobaqalarda ishtirok etish imkoniyatini beradi.</p>
                     <p>Shuningdek, 2019 yilda Oʻzbekiston Respublikasi mudofaasiga koʻmaklashuvchi “Vatanparvar” tashkiloti Markaziy kengashi va Rossiya Federatsiyasi DOSААF (Аrmiya, aviatsiya va flotiga koʻmaklashuvchi koʻngillilar jamiyati tashkiloti) oʻrtasida hamkorlik kelishuvi imzolangan.</p>
                  </div>
                  <div className="hamkorlik-foreign">
                      <div className="section">
                        <img  src={img1} alt="" className="img" />  
                        <p>Rossiya Federatsiyasi DOSААF (Аrmiya, aviatsiya va flotiga koʻmaklashuvchi koʻngillilar jamiyati tashkiloti)</p>
                      </div>
                      <div className="section">
                        <img src={img2} alt=""/>  
                        <p>Osiyo triatlon konefederatsiyasi</p>
                      </div>
                      <div className="section">
                        <img src={img3} alt="" className="img" />  
                        <p>Аeronavtika xalqaro federatsiyasi</p>
                      </div>
                      <div className="section">
                        <img src={img4} alt="" className="img" />  
                        <p>Xalqaro biatlon ittifoqi</p>
                      </div>
                      <div className="section">
                        <img src={img5} alt="" className="img" />  
                        <p>Xalqaro triatlon uyushmasi</p>
                      </div>
                      <div className="section">
                        <img src={img6} alt="" className="img" />  
                        <p>Xalqaro Kemamodelchilik federatsiyasi</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default  Cooperation;
