import React from 'react';
import {PageTitle} from '../ui/PageTitle' ;
import {HiOutlineLocationMarker} from "react-icons/hi";
import {AiOutlineMail} from "react-icons/ai";
// import {AiOutlineInstagram} from "react-icons/ai";
import {FiPhone} from "react-icons/fi";
import {HiOutlineDocumentDownload} from "react-icons/hi";
import {RiFacebookFill} from "react-icons/ri"
import {BsInstagram} from "react-icons/bs"
import {FaTelegramPlane} from "react-icons/fa"
import { YMaps, Map, Placemark, FullscreenControl, GeolocationControl, RouteButton, TrafficControl, ZoomControl} from 'react-yandex-maps';
import { useTranslation } from 'react-i18next';
import "./assets/location.scss";

function Location() {
    const {t, i18n} = useTranslation();
    return (
        <div className='location'>
            <PageTitle title={t('MAP')}/>
            <div className="container">
              <div className="location-container">
                <div className="location-info">
                    <div className="location-info-address">
                        <a href="https://goo.gl/maps/ZS6VGNh84NJsykTr7"  className='iconn'><HiOutlineLocationMarker className="icon" size="2.1rem" color="1e89ff" cursor="pointer"/></a>
                       <a href="https://goo.gl/maps/ZS6VGNh84NJsykTr7">l00017, Toshkent shahar , Yunusobot tumani, <br /> Minor mavzesi , Osiyo ko'chasi (Xurshid), 86A</a>  
                    </div>
                    <div className="location-info-email">
                        <a href="#" className='iconn'><AiOutlineMail className="icon" size="2.1rem" color="1e89ff" cursor="pointer"/></a>
                        <a href="#" className="email">mkvatanparvar@yandex.ru</a>  
                    </div>     
                    <div className="location-info-phone">
                        <div className="location-info-phone-icon">
                            <FiPhone className="icon" size="2.1rem" color="1e89ff" cursor="pointer"/>
                        </div>
                        <div className="location-info-phone-nuber">
                           <p className=""><a href="tel:+998781503150">+998 (78) 150 - 31 - 50</a></p>
                           <p className=""><a href="tel:+998781503150">+998 (78) 150 - 31 - 50</a></p>
                        </div>
                    </div>    
                    <div className="location-info-document">
                        <HiOutlineDocumentDownload className="icon" size="2.1rem" color="1e89ff" cursor="pointer"/>
                        <a href="#">mkvatanparvar@yandex.ru</a>  
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
                <div className="location-map">
                   <div >
                   <YMaps  className="map-sect" >
                       <div  >
                           <Map  width="100%" height="368px" defaultState={{
                               center: [41.328925, 69.280003] ,
                               zoom:15,
                               }}
                               >
                              <Placemark geometry={[41.328925, 69.280003]}/>
                              <FullscreenControl options={{float: 'left'}}/>   
                              <GeolocationControl options={{float: 'left'}}/>
                              <RouteButton options={{float: 'right'}}/>
                              <TrafficControl options={{float: 'right'}}/>
                              <ZoomControl options={{float: 'left'}}
                              />
                            </Map>
                       </div>
                   </YMaps>
                   </div>
                </div> 
            </div>  
            </div>
        </div>
    )
}


export default Location;
