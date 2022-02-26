import React from 'react';

interface Props {
    readonly data: any
}
export function NewsItem({data}: Props) {
    return (
       <a href={data.link} className="news_list-item">
            <div className="news_list-item_img">
                <img src={data.imgUrl} alt="img"/>
            </div>
            <div className="news_list-item_content">
                    <div className="news_list-item_link">
                        {data.title}
                        <p className="news_list-item_date">{data.date}</p>
                    </div>
            </div>
        </a>
    );
}

