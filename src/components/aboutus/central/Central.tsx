import React from 'react';
import { PageTitle } from '../../ui/PageTitle';
import "./assets/markaziy.scss";
import { useTranslation } from 'react-i18next';
function Central() {
  const {t} = useTranslation();
  return (
      <div className="markaziy">
          <PageTitle title={t('markaziy_kengash')}  />
          <div className="container">
            <div className="containerr">
            <div className="markaziy-img"></div>
            <div className="markaziy-text">
              <p>Oʻzbekiston Respublikasi mudofaasiga koʻmaklashuvchi “Vatanparvar” tashkiloti 1991 yil 23 noyabrda boʻlib oʻtgan Аrmiya, aviatsiya va flotga koʻmaklashuvchi koʻngilli jamiyat – DOSААFning VIII Qurultoyi qarori bilan Oʻzbekiston Respublikasi DOSААFining vorisi sifatida tashkil etilgan.</p>
              <p>“Vatanparvar” tashkiloti tarkibida markaziy va 14 ta hududiy kengashlar, 211 ta muassasalar mavjud boʻlib, ularda 6388 nafar xodimlar mehnat qilib kelmoqda, 258 ta boshlangʻich tashkilotlarda 130 000 nafar tashkilot aʼzolari mavjud.</p>
              <p>“Vatanparvar” tashkiloti asosan uchta yoʻnalishda faoliyat olib boradi. Birinchi yoʻnalish aholi, ayniqsa, yoshlarni Vatanga sadoqat, harbiy-vatanparvarlik, milliy maʼnaviyatimizga hurmat ruhida tarbiyalash hisoblanadi. Bu yoʻnalishda Tashkilot nafaqat Qurolli Kuchlar tarkibidagi vazirlik va idoralar, balki respublikamizning barcha tegishli muassasalari, jamoat tashkilotlari bilan hamkorlik qiladi.</p>
               <p>“Vatanparvar” tashkilotning ikkinchi asosiy yoʻnalishi aholi, ayniqsa, yoshlarni Tashkilot tizimidagi avtokross, motokross, karting, triatlon, duatlon, yozgi biatlon, pnevmatik quroldan oʻq otish, dengiz koʻpkurashi, harbiy amaliy koʻpkurash, xizmatchi itlar, aviamodel, raketamodel, kemamodel, radiosport kabi sportning texnik va amaliy turlariga jalb etish, ular orasida sogʻlom turmush tarzini targʻib qilish hisoblanadi. Hozirda “Vatanparvar” tashkiloti 9 mingga yaqin sportga qiziquvchan yoshlarni qamrab olgan. Bundan tashqari, Tashkilot tasarrufida parashyut sporti boʻyicha jami 7 ta sport seksiyalari mavjud boʻlib, ularda 117 nafar sportchi shugʻullanadi. “Vatanparvar” tashkiloti, shuningdek, Xalqaro aeronavtika federatsiyasi (FAI), Xalqaro kemamodeli uyushmasi (“NAVIGA”), Xalqaro triatlon uyushmasi (ITU), Xalqaro biatlon uyushmasi (IBU) hamda Osiyo triatlon konfederatsiyasi (ASTC)ning toʻla huquqli doimiy aʼzosi hisoblanadi.</p>
               <p>Tashkilotning asosiy uchinchi yoʻnalishi fuqarolarni ommaviy texnik kasblarga tayyorlash hisoblanadi. Respublika miqyosida Tashkilot tasarrufidagi 211 ta oʻquv sport texnika klublarining avtomototransport haydovchilarini tayyorlash kurslarida bir yilda oʻrtacha 120-130 ming nafar fuqaro oʻqitiladi. Bundan tashqari, “2021 yil – Yoshlarni qoʻllab-quvvatlash va aholi salomatligini mustahkamlash yili” munosabati qabul qilingan Davlat dasturiga muvofiq, Oʻzbekiston Respublikasi mudofaasiga koʻmaklashuvchi “Vatanparvar” tashkiloti zimmasiga Tashkilot bazasida yoshlarni mehnat bozorida talab yuqori boʻlgan yana 10 xil kasblarga oʻqitishni taʼminlash boʻyicha masʼuliyatli vazifa yuklatildi.</p>
               <p>Davlat dasturiga muvofiq, 2021 yilning iyun oyidan boshlab “Vatanparvar” tashkiloti tizimida “Texnik xizmat koʻrsatish mutaxassislarini tayyorlash kurslari” tashkil etilib, unda yoshlar 5 xil kasbga – vulkanizatorchi, elektrik-akkumulyatorchi, gaz-elektr payvandchi, avtochilangar, avtoelektrik mutaxassisliklari boʻyicha hamda sentabr oyidan boshlab “Murakkab texnikalarni boshqarish mutaxassislarini tayyorlash kurslari” yoʻlga qoʻyilib, ushbu kurslarda yuk ortuvchi transport, avtogidro-podʼyomnik, yuk mashinasi krani, gʻildirakli traktor, bitta kovshli ekskavator texnikalarini boshqarish boʻyicha mutaxassislar tayyorlash yoʻlga qoʻyildi.</p>
            </div>
            </div>
          </div>
      </div>
  );
}

export default Central;
