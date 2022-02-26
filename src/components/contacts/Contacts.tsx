import React, { useState , useEffect } from "react";
import { PageTitle } from "../ui/PageTitle";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./assets/contacts.scss";
import { useTranslation } from 'react-i18next';
import http from "../ui/Services";
SwiperCore.use([Navigation, Autoplay]);


function Contacts() {
  const [index, setIndex]= useState(1)
  const {t} = useTranslation();
  const[data , setData] = useState<any[]>([])

  async function getContacts(){
    const res = await http('/GetApi/GetBranchContacts/')
    // console.log(res)
    //@ts-ignore
    setData(res.filter(item => item.regionId === index))
  }
  
useEffect(()=>{
    getContacts();
  },[index])
  
  
  return (
    <div className="contacts">
      <div className="containerr">
        <PageTitle title={t('KONTAKTLAR')}/>
        <div className="slider1">
          <Swiper 
          slidesPerView={1} spaceBetween={0} breakpoints={{
              "670": {
                slidesPerView: 2,
              },
              "960": {
                slidesPerView: 3,
              },
              "1200": {
                slidesPerView: 5,
              },
            }}
            loop={true}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===1?`active`:null}`}  onClick={()=> setIndex(1)} >
                     <p>
                       Qoraqalpog'iston
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>   
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===2?`active`:null}`}  onClick={()=>setIndex(2)}  >
                     <p>
                       Andijon
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
           
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===3?`active`:null}`} onClick={()=>setIndex(3)} >
                     <p>
                       Buxoro
                    </p> 
                 </div>     
              </div>
            </SwiperSlide> 
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===4?`active`:null}`} onClick={()=>setIndex(4)} >
                     <p>
                       Jizzax
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===5?`active`:null}`} onClick={()=>setIndex(5)} >
                     <p>
                       Qashqadaryo
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===6?`active`:null}`} onClick={()=>setIndex(6)} >
                     <p>
                       Navoi
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===7?`active`:null}`} onClick={()=>setIndex(7)} >
                     <p>
                       Namangan
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===8?`active`:null}`} onClick={()=>setIndex(8)} >
                     <p>
                       Samarqand
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===9?`active`:null}`} onClick={()=>setIndex(9)} >
                     <p>
                       QORAQALPOG'ISTON
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===10?`active`:null}`} onClick={()=>setIndex(10)} >
                     <p>
                       Surxondaryo
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===11?`active`:null}`} onClick={()=>setIndex(11)} >
                     <p>
                       Sirdaryo
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===12?`active`:null}`} onClick={()=>setIndex(12)} >
                     <p>
                       Toshkent , v
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===13?`active`:null}`} onClick={()=>setIndex(13)} >
                     <p>
                       Farg'ona
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-slide_body">
                  <div  className={`slider-item_img ${index===14?`active`:null}`} onClick={()=>setIndex(14)} >
                     <p>
                       Toshkent , sh
                    </p> 
                 </div>     
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="content">
          <table className="content-table">
            <thead>
              <tr>
                <th>O'STKLAR</th>
                <th>Manzil</th>
                <th>Isim</th>
                <th>Telefon Raqami</th>
                <th>email</th>
                {/* <th>index</th> */}
              </tr>   
            </thead>
            <tbody>
              {
                    data.map((item , index)=>
                    <tr key={index}>
                      <td>{item.branchName}</td>
                      <td>{item.branchAdress}</td>
                      <td>{item.branchPresident}</td>
                      <td>{item.phoneNumber}</td>
                      <td>{item.email}</td>
                      <td>{item.mailIndex}</td>
                    </tr>
                    )
                  }
                  
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Contacts;
