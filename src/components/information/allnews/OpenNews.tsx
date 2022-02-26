import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./assets/OpenNews.scss";
import { useParams } from 'react-router-dom';
import http from '../../ui/Services';
import { MdVisibility } from 'react-icons/md';
import { MdOutlineDateRange } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
function OpenNews() {
    const { t } = useTranslation();
    const [data, setData] = useState<any>({})
    const BASE_URL = process.env.REACT_APP_BASE_URL
    const params = useParams();
    const { id } = params;
   
  
    //    @ts-ignore
    const getOpenNews=(id)=>{
        http.get<any>(`/GetApi/GetNewsById/${id}`)
          .then((res)=>setData(res.data))
           .catch(e =>console.log(e))
    }
    useEffect(() => {
        getOpenNews(id)
    }, []);
    return (

        <div className="open-news">
            <div className="container">
                <div className="open-news-title">
                    {Object.keys(data).length !== 0 &&
                        <p>{t('lang') === 'uz' ? data.titleUz : data.titleRu}</p>
                    }
                </div>
                <div className="open-news-visites">
                    <div className="date">
                        <p><MdOutlineDateRange className='icon' /></p>
                        {Object.keys(data).length !== 0 &&
                            <p>{data.createDate}</p>
                        }
                    </div>
                    <div className="visites">
                        <p><MdVisibility className='icon' /></p>
                        {Object.keys(data).length !== 0 &&
                            <p>{data.visits}</p>
                        }
                    </div>


                </div>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url(${(BASE_URL)+'/Files/News/'+(data.titleImage)})center center no-repeat `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                </div>
              </SwiperSlide>
             
              
              
            </Swiper>
                <div className="open-news-text">
                    {Object.keys(data).length !== 0 &&
                        <p>
                            <p>{t('lang') === 'uz' ? data.mainTextUz : data.mainTextRu}</p>
                        </p>
                    }
                </div>

            </div>

        </div>
    )
}

export default OpenNews;