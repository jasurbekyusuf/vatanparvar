import React, {useState} from 'react';
import Logo from "./assets/logo.png";
import "./assets/navbar.scss";
import {RiMenu2Line} from "react-icons/ri";
import {GrClose} from "react-icons/gr";
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { Link } from "react-router-dom";
// @ts-ignore
import { SettingsModal } from '@n3/react-vision-panel';
import { BsChevronDown, BsFillEyeFill} from "react-icons/bs";
import { useTranslation } from 'react-i18next';
export function AppNavbar() {
    const [open, setOpen] = useState(false);
    const [showVisionPanel, setShowVisionPanel] = useState(false);
    const {t} = useTranslation();
    return (
        <nav className="app_nav">
            <div className="container">
                <div className="app_nav-info">
                    <a href="/" className="app_nav-logo">
                        <img src={Logo} alt="logo"/>
                    </a>
                    <p dangerouslySetInnerHTML={{ __html:t("logo_header")}}>
                    </p>
                </div>
                <div className={`app_nav-links ${open && "open"}`} >
                    <ul className="app_nav-list">
                        <li className="app_nav-list_item with_sublist">
                            <a className="app_nav-list_link" href="#">{t('biz_haqimizda')}</a> <BsChevronDown className="downicon"/>
                            <ul className="app_nav-sub_list">
                                <li className="app_nav-sub_list-item">
                                   <Link to="/markaziy-kengash"> <a className="app_nav-sub_list-link" href="../home/Markaziy">{t('markaziy_kengash')}</a></Link>      
                                </li>
                                <li className="app_nav-sub_list-item">
                                  <Link to="/rahbariyat"> <a className="app_nav-sub_list-link" href="#">{t('rahbariyat')}</a></Link> 
                                </li>
                                <li className="app_nav-sub_list-item">
                                   <Link to="/markaziy-aparat" > <a className="app_nav-sub_list-link" href="#">{t('markaziy_aparat')}</a></Link>
                                </li>
                                <li className="app_nav-sub_list-item">
                                  <Link to="/tassarufidagi-tashkilotlar"><a className="app_nav-sub_list-link" href="#" dangerouslySetInnerHTML={{ __html:t("tassarufidagi_tashkilotlar")}}></a></Link> 
                                </li>
                                <li className="app_nav-sub_list-item">
                                  <Link to="/hududiy-kengashlar"><a className="app_nav-sub_list-link" href="#">{t('hududiy_kengashlar')}</a></Link>
                                </li>
                                <li className="app_nav-sub_list-item">
                                  <Link to="/tashkilot-tarixi" > <a className="app_nav-sub_list-link" href="#">{t('tashkilot_tarixi')}</a></Link>
                                </li>
                                <li className="app_nav-sub_list-item">
                                 <Link to="/xalqaro-hamkorlik">  <a className="app_nav-sub_list-link" href="#" dangerouslySetInnerHTML={{ __html:t("xalqaro_hamkorlik")}}></a></Link> 
                                </li>
                            </ul>
                        </li>
                        <li className="app_nav-list_item with_sublist">
                            <a className="app_nav-list_link " href="#">{t('axborot_xizmati')}</a><BsChevronDown className="downicon"/>
                            <ul className="app_nav-sub_list">
                                {/* <li className="app_nav-sub_list-item">
                                    <a className="app_nav-sub_list-link" href="#">E'LONLAR</a>
                                </li> */}
                                <li className="app_nav-sub_list-item">
                                 <Link to="/allnews"><a className="app_nav-sub_list-link" href="#">{t('barcha_yangiliklar')}</a></Link> 
                                </li>
                                <li className="app_nav-sub_list-item">
                                 <Link to="/fotogalareya"><a className="app_nav-sub_list-link" href="#">{t('fotogalereya')}</a></Link>  
                                </li>
                                <li className="app_nav-sub_list-item">
                                    <a className="app_nav-sub_list-link" href="https://www.youtube.com/channel/UCI41Xe2P3GPUz5YK-TzEJZg">{t('ovv_biz_haqimizda')}</a>
                                </li>
                            </ul>
                        </li>
                        <li className="app_nav-list_item">
                         <Link to="/hujjatlar"><a  className="app_nav-list_link" href="#">{t('hujjatlar')}</a></Link>  
                        </li>
                        <li className="app_nav-list_item">
                         <Link to="/kontaktlar"><a className="app_nav-list_link" href="#">{t('kantaktlar')}</a></Link> 
                        </li>
                        <li className="app_nav-list_item with_sublist">
                            <a className="app_nav-list_link" href="#">{t('murojat_qilish')}</a><BsChevronDown className="downicon"/>
                            <ul className="app_nav-sub_list">
                                <li className="app_nav-sub_list-item">
                                  <Link to="/onlayn-murojat"><a className="app_nav-sub_list-link" href="#">{t('onlayn_murojat')}</a></Link> 
                                </li>
                                <li className="app_nav-sub_list-item">
                                  <Link to="/haydovchilik-maktabiga-yozilish"><a className="app_nav-sub_list-link" href="#">{t('h_maktabga')}</a></Link> 
                                </li>
                                <li className="app_nav-sub_list-item">
                                  <Link to="/kasb-hunar-maktabiga-yozilish"> <a className="app_nav-sub_list-link" href="#" dangerouslySetInnerHTML={{ __html:t("k_maktabga")}}></a></Link> 
                                </li>
                            </ul>
                        </li>
                        <div className="menu_lang-switcher">
                            <LanguageSwitcher />
                            <BsFillEyeFill style={{marginLeft: "10px", fontSize: 20, lineHeight: "100%"}} onClick={() => setShowVisionPanel(true)}/>
                        </div>
                    </ul>
                    <div className="app_nav-close_btn" onClick={() => setOpen(false)}>
                       <GrClose size="2.5em" />
                    </div>
                </div>
                <div className="app_lang-switcher">
                    <LanguageSwitcher />
                    <BsFillEyeFill style={{marginLeft: "10px", fontSize: 20, lineHeight: "100%"}} onClick={() => setShowVisionPanel(true)}/>
                </div>
                <div className="app_nav-burger_btn" onClick={() => setOpen(true)}>
                    <RiMenu2Line size="2.5em" />
                </div>
            </div>
            <SettingsModal show={showVisionPanel} onHide={() => setShowVisionPanel(false)} />
        </nav>
    );
}

