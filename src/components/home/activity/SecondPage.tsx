import React from 'react'
import { useTranslation } from "react-i18next";
import "./assets/acttivitypages.scss";
import img2 from '../assets/activity-2.jpg';
import { RiFacebookFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
function SecondPage() {
  const { t } = useTranslation();
  return (
    <div className="activity-page">
      <div className="container">
        <div className="containerr">
          <div className="title">
            <p dangerouslySetInnerHTML={{ __html: t("activity-title2") }}></p>
          </div>
          <div className="activity-img">
            <img src={img2} alt="img" />
          </div>
          <div className="activity-text">
            <p dangerouslySetInnerHTML={{ __html: t("activity-text1") }}></p>
          </div>
          <div className="location-info-social">
            <a className="location-info-social-item_item" href="#">
              <RiFacebookFill size="0.9em" />
            </a>
            <a className="location-info-social-item_item" href="#">
              <BsInstagram size="0.9em" />
            </a>
            <a className="location-info-social-item_item" href="#">
              <FaTelegramPlane size="0.9em" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondPage;