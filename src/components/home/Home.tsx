import React, {useState} from 'react';
import {HomeHeaderSlider} from "./HomeHeaderSlider";
import {Activity} from "./Activity";
import {News} from "./News";
import {Map} from "./Map";
import {Statistic} from "./Statistic";
import {Partners} from "./Partners";
import Location from './Location';

export function Home() {
    return (
        <div>
            <HomeHeaderSlider/>
            <Activity />
            <Statistic />
            <News />
            <Map />
            <Partners />
            <Location/>
        </div>
    );
}

