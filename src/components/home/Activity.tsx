import React from 'react';
import {ActivityListItem} from "./ActivityListItem";
import image1 from './assets/activity1.jpg'
import image2 from './assets/activity-2.jpg'
import image3 from './assets/activity-3.jpg'
import image4 from './assets/activity-4.jpg'
import image5 from './assets/activity-5.jpg'
import "./assets/activity.scss"
import {PageTitle} from "../ui/PageTitle";
import { useTranslation } from 'react-i18next';
// import  {i18n}  from 'i18next';
import i18n from '../ui/i18next';



export function Activity() {

    const {t,} = useTranslation();
    const items = [
        {
          content:i18n.t('activity-title1'),
          link: "/avtotransport-vositalari-haydovchilar",
          imgUrl: image1
        },
        {
            content: i18n.t('activity-title2'),
            link: "/bolalar-o'smirlar-va-chaqirilishga",
            imgUrl: image2
        },
        {
            content:i18n.t('activity-title3'),
            link: "/yoshlar-va-fuqorolarni-manaviy-ahloqiy",
            imgUrl: image3
        },
        {
            content:i18n.t('activity-title4'),
            link: "/yoshlarga-va-fuqorolarga-mudofaa-sohasida",
            imgUrl: image4
        },
        {
            content:i18n.t('activity-title5'),
            link: "/sportning-texnik-va-amaliy",
            imgUrl: image5
        }
    ]
    return (
        <div className="activity">
            <div className="container">
                <PageTitle title={t('faoliyat')} />
                <div className="activity_list">
                    {
                        //@ts-ignore
                        items.map((item,index) => {
                            return (
                                <ActivityListItem key={index} data={item}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

