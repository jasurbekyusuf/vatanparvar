import React, { useEffect, useState } from 'react';
import { PageTitle } from '../../ui/PageTitle';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './assets/AllNews.scss'
import http from '../../ui/Services';
function AllNews() {
    const { t } = useTranslation();

    const [data, setData] = useState<any[]>([])
    const BASE_URL = process.env.REACT_APP_BASE_URL
    
    const getNews = () => {
        http.get<any>(`/GetApi/GetNews`)
            .then((res) => setData(res.data))
            
            .catch(e => console.log(e))
    }
    useEffect(() => {
        getNews();
    }, [])
    console.log(data)
    return (
        <div className="all-news">
            <div className="container">
                <PageTitle title={t('BARCHA YANGILIKLAR')} />
                <div className="news_list">
                    { data.map((item, index) =>
                            <Link to={`/allnews/${item.id}`} className="news_list-item" key={index}>
                                <div className="news_list-item_img">
                                    <img src={`${BASE_URL}/Files/News/${item.titleImage}`} alt={item.titleRu} />
                                </div>
                                <div className="news_list-item_content">
                                    <div className="news_list-item-link">
                                        <p>{t('lang') === 'uz' ? item.titleUz : item.titleRu}</p>  
                                        <p className="news_list-item_date">{item.createDate}</p>
                                    </div>
                                </div>
                            </Link>

                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default AllNews;