import React from "react";
import { PageTitle } from "../../ui/PageTitle";
import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";
import img5 from "./assets/5.jpg";
import img6 from "./assets/6.jpg";
import img7 from "./assets/7.jpg";
import img8 from "./assets/8.jpg";
import img9 from "./assets/9.jpg";
import img10 from "./assets/10.jpg";
import img11 from "./assets/11.jpg";
import img12 from "./assets/12.jpg";
import "./assets/fotogalereriya.scss";
//@ts-ignore

import { useTranslation } from 'react-i18next';
function PhotoGallery() {
  const {t, i18n} = useTranslation();
  return (
    <div className="fotogalereya">
      <div className="container">
        <PageTitle title={t('FOTOGALEREYA')} />
        <div className="containerr">
          <div className="fotogalereya-list">
            <img src={img1} alt="img" />
            <img src={img2} alt="img" />
            <img src={img3} alt="img" />
            <img src={img4} alt="img" />
            <img src={img5} alt="img" />
            <img src={img6} alt="img" />
            <img src={img7} alt="img" />
            <img src={img8} alt="img" />
            <img src={img9} alt="img" />
            <img src={img10} alt="img" />
            <img src={img11} alt="img" />
            <img src={img12} alt="img" />    
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
