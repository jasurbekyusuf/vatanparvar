import React from 'react';
import {AppNavbar} from "./AppNavbar";
import {AppFooter} from "./AppFooter";
import {Home} from "../home/Home";
import {
    Routes,
    Route
  } from "react-router-dom";
import Aparat from '../aboutus/Aparat/Aparat';
import History from '../aboutus/history/History';
import AllNews from '../information/allnews/AllNews';
import Contacts from '../contacts/Contacts';
import Kasbxunar from '../enquiries/VocationalEducation';
import FirstPage from '../home/activity/FirstPage';
import SecondPage from '../home/activity/SecondPage';
import ThirdPage from '../home/activity/ThirdPage';
import FourthPage from '../home/activity/FourthPage';
import Fifthpage from '../home/activity/Fifthpage';
import OpenNews from '../information/allnews/OpenNews';
import Regions from '../aboutus/regions/Regions';
import Cooperation from '../aboutus/cooperation/Cooperation';
import Central from '../aboutus/central/Central';
import Leaders from '../aboutus/leaders/Leaders';
import PhotoGallery from '../information/photoGallery/PhotoGallery';
import Subsidiaries from '../aboutus/subsidiaries/Subsidiaries';
import Documents from '../d-ocuments/Documents';
import ToDrivingSchool from '../enquiries/ToDrivingSchool';
import OnlineEnquiries from '../enquiries/OnlineEnquiries';


export function AppContainer() {
    return (
        <div className="wrapper app">
            <AppNavbar/>
           <main className="main"> <Routes>
                <Route path="/allnews/:id" element={<OpenNews/>} />
                <Route path="/" element={<Home/>}></Route>
                <Route path="/markaziy-kengash" element={<Central />} />
                <Route path="/rahbariyat" element={<Leaders />} />
                <Route path="/markaziy-aparat" element={<Aparat />} />
                <Route path="/tassarufidagi-tashkilotlar" element={<Subsidiaries />} />
                <Route path="/hududiy-kengashlar" element={<Regions />} />
                <Route path="/tashkilot-tarixi" element={<History />} />
                <Route path="/xalqaro-hamkorlik" element={<Cooperation />} />
                <Route path="/allnews" element={<AllNews />} />
                <Route path="/fotogalareya" element={<PhotoGallery/>} />
                <Route path="/hujjatlar" element={<Documents/>} />
                <Route path="/kontaktlar" element={<Contacts/>} />
                <Route path="/onlayn-murojat" element={<OnlineEnquiries/>} />
                <Route path="/haydovchilik-maktabiga-yozilish" element={<ToDrivingSchool/>} />
                <Route path="/kasb-hunar-maktabiga-yozilish" element={<Kasbxunar/>} />
                <Route path="/avtotransport-vositalari-haydovchilar" element={<FirstPage/>} />
                <Route path="/bolalar-o'smirlar-va-chaqirilishga" element={<SecondPage/>} />
                <Route path="/yoshlar-va-fuqorolarni-manaviy-ahloqiy" element={<ThirdPage/>} />
                <Route path="/yoshlarga-va-fuqorolarga-mudofaa-sohasida" element={<FourthPage/>} />
                <Route path="/sportning-texnik-va-amaliy" element={<Fifthpage/>} />    
            </Routes></main>
            <AppFooter/>
        </div>
    );
}

