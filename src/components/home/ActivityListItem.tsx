import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    readonly data: any
}

export function ActivityListItem({data}:Props) {
    return (
        <Link to={data.link} className="activity_list-item">
            <div className="activity_list-item_img">
                <img src={data.imgUrl} alt="img"/>
            </div>
            <div>
                    <p className="activity_list-item_link">{data.content}</p>
            </div>
        </Link>
    );
}

