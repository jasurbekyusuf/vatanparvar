import { useState, useEffect } from 'react';
import "./assets/news.scss"
import { PageTitle } from "../ui/PageTitle";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import http from '../ui/Services';

export function News() {
    const { t } = useTranslation();

    const [data, setData] = useState<any[]>([])
    const getNews = async () => {
        await http.get('/GetApi/GetNews/?count=6')
            .then((res) => setData(res.data))
            .catch(e => console.log(e))
    }
    useEffect(() => {
        getNews();
    }, [])
    return (
        <div className="news">
            <div className="container">
                <PageTitle title={t('YANGILIKLAR')} />
                <div className="news_list">

                    {
                        data.map((item, index) =>

                            <Link to={"/allnews/" + item.id} className="news_list-item" key={index}>
                                <div className="news_list-item_img">
                                    <img src={'https://test.vitc.uz/Files/News/' + item.titleImage} alt="img" />
                                </div>
                                <div className="news_list-item_content">
                                    <div className="news_list-item-link">
                                        {item.titleUz}
                                        <p className="news_list-item_date">{item.createDate}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    }
                </div>
                <Link to="/allnews"><a href="#" className="allnewss">{t('barcha_yangiliklarga')}</a></Link>
            </div>
        </div>
    );
}

