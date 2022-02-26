import React from "react";
import { PageTitle } from "../../ui/PageTitle";
import "./assets/history.scss";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import img8 from "./assets/7.png";
import img7 from "./assets/8.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import { useTranslation } from 'react-i18next';
SwiperCore.use([Navigation, Autoplay]);

function History() {
  const {t} = useTranslation();
  return (
    <div className="history">
      <div className="container">
        {" "}
        <PageTitle title={t('TASHKILOTI TARIXI')} />
        <div className="containerr">
          <div className="history-slider">
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
                    background: `url(${img8})center center no-repeat `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                      Armiya, aviatsiya va flotga ko‘maklashuvchi butunittifoq
                      ko‘ngillilar jamiyati (DOSAAF)ning VIII-qurultoyi qarori
                      bilan O‘zbekiston DOSAAFi negizida O‘zbekiston mudofaasiga
                      ko‘maklashuvchi “Vatanparvar” tashkiloti tashkil etilgan.
                      Ushbu tarixiy lahzalarda tashkilot Markaziy kengashining
                      raisi general-mayor Jamshid Shaxmardanov nutq so‘zlamoqda
                      (Toshkent sh., 1991 yil 23 noyabr)
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url(${img2}) center center no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                      DOSAAFning motokross sportchilari paradda ishtirok etmoqda{" "}
                      <br /> (Toshkent sh., 1957 y.)
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url(${img3}) center center no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                      O‘smirlar o‘rtasida karting sporti musobaqasi jarayoni
                      (Toshkent sh., 1972 y.)
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url(${img4}) center center no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                      “Vatanparvar” tashkilotining Termiz avtomobil maktabi
                      kursantlari avtotrenajyorlarda mashq qilmoqdalar
                      (Surxondaryo v., 1995 y.)
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url(${img5}) center center no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                      DOSAAFning modelizm seksiyasi ko‘rgazmasi jarayoni
                      (Toshkent v., 1959 y.)
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url(${img6}) center center no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                      DOSAAFning Toshkent aviasport seksiyasi a’zosi V.Reichenko
                      mashg‘ulot chog‘ida (Toshkent sh., 1970 y.)
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url(${img7}) center center no-repeat`,
                    backgroundSize: "cover",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                      “Vatanparvar” tashkilotining Yunusobod tumanidagi
                      avtomobil maktabi o‘qituvchisi Oleg Taranov dars o‘tmoqda
                      (Toshkent sh., 1997 y.)
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide_body"
                  style={{
                    background: `url(${img1}) center center no-repeat`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                  }}
                >
                  <div className="swiper-slide_bg" />
                  <div className="swiper-slide_content">
                    <p className="swiper-slide_content_title">
                     DOSAAF radiosportchilari mashg‘ulot chog‘ida (Toshkent sh., 1953 y.)
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="section-two">
            <p>
              Oʻzbekiston Respublikasi mudofaasiga koʻmaklashuvchi “Vatanparvar”
              tashkiloti tarixi aslida 1927 yilga borib taqaladi. Shu yili
              Mudofaa, aviasozlik va kimyosozlik qurilishiga koʻmaklashuvchi
              jamiyat tashkil etilib, ushbu tashkilot rayosati raisi etib oʻsha
              davrda Oʻzbekiston xalq komissarlari Sovetining raisi lavozimida
              ishlayotgan Fayzulla Xoʻjaev saylangan. Tashkilot vazifasi aholi
              orasida harbiy-vatanparvarlik targʻibotini olib borish, yoshlarni
              harbiy kasb mutaxassisliklariga tayyorlab, harbiy xizmatga
              joʻnatishdan iborat boʻlgan.
            </p>
            <p>
              {" "}
              1948 yilda ushbu tashkilot uchta mustaqil tuzilmaga – Qurolli
              Kuchlarga koʻmaklashuvchi koʻngilli jamiyat, Аviatsiyaga
              koʻmaklashuvchi koʻngilli jamiyat hamda Flotga koʻmaklashuvchi
              koʻngilli jamiyatga boʻlindi. Keyinchalik – 1951 yilning avgust
              oyida ushbu tuzilmalarning maqsadlari bir boʻlganligi uchun ular
              qayta birlashtirilib, Аrmiya, aviatsiya va flotga koʻmaklashuvchi
              butun Ittifoq koʻngillilar jamiyati – DOSААFga aylantirildi.
            </p>
            <p>
              Mamlakatimiz mustaqilikka erishganidan ikki oy oʻtib, 1991 yil 23 
              noyabrda boʻlib oʻtgan Аrmiya, aviatsiya va flotga koʻmaklashuvchi
              butun Ittifoq koʻngillilar jamiyatining VIII Qurultoyi qarori
              bilan Oʻzbekiston DOSААFi negizida Oʻzbekiston mudofaasiga
              koʻmaklashuvchi “Vatanparvar” tashkiloti tashkil etildi.
              Tashkilotning asosiy vazifalari aholi, ayniqsa, yoshlarni
              mudofaaga tayyorlash, ularni sportning texnik va amaliy turlariga
              jalb etish hamda ommaviy texnik kasblarga oʻqitish etib
              belgilandi.
            </p>
            <div className="section-title">
              <strong>
                <p>“Vatanparvar” tashkilotiga rahbarlik qilgan mutasaddilar:</p>
              </strong>
              <p>
                General-mayor Jamshir Jumayevich Shaxmardanov:
                <strong>1991-1998 yy.</strong> 
              </p>
              <p>
                Polkovnik Аbdulaziz Аbduqahhorovich Аbduqahhorov: <strong>1998-2008 yy.</strong> 
              </p>
              <p>General-mayor Qosimjon Pozilovich Mamidov: <strong> 2008-2013 yy.</strong></p>
              <p>General-mayor Rustam Saynazarovich Niyazov: <strong> 2013-2021 yy.</strong></p>
              <p>Polkovnik Xusan Аrzudinovich Batirov: <strong>2021- h.v.q.</strong> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
