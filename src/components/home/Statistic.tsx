import React from 'react';
import "./assets/statistics.scss";
import {PageTitle} from "../ui/PageTitle";
import BuildingIcon from "./assets/building.svg";
import RunIcon from "./assets/run.svg";
import GroupIcon from "./assets/group.svg";
import Person from "./assets/icon-4-1.svg";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useTranslation } from 'react-i18next';
export function Statistic() {
    const {t, i18n} = useTranslation();
    return (
        <div  className="statistics">
            <div className="container">
                <PageTitle title= {t('STATISTIKA')}/>
                <div className="statistics-list">
                    <div className="statistics-list_item">
                        <div className="statistics-list_item-icon">
                            <img src={GroupIcon} alt=""/>
                        </div>
                        <div>
                            <h1>
                                <CountUp end={211} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1>
                            <p>{t('AVTOMAKTABLAR SONI')}</p>
                        </div>
                    </div>
                    <div className="statistics-list_item">
                        <div className="statistics-list_item-icon">
                            <img src={BuildingIcon} alt=""/>
                        </div>
                        <div>
                            <h1>
                                <CountUp end={321} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1>
                            <p>{t('TASHKILOT A`ZOLARI SONI')}</p>
                        </div>
                    </div>
                    <div className="statistics-list_item">
                        <div className="statistics-list_item-icon">
                            <img src={RunIcon} alt=""/>
                        </div>
                        <div>
                            <h1>
                                <CountUp end={531} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1>
                            <p>{t('SPORTCHILAR SONI')}</p>
                        </div>
                    </div>
                    <div className="statistics-list_item">
                        <div className="statistics-list_item-icon">
                            <img src={Person} alt=""/>
                        </div>
                        <div>
                            <h1>
                                <CountUp end={123} redraw={true}>
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1>
                            <p>{t('YILLIK BITIRUVCHIAR SONI')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

