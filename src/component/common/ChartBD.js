import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Liquid} from '@ant-design/plots';
import "../scss/chartbd.scss";

const ChartBD = () => {
    const config = {
        percent: 0.35,
        outline: {
            border: 4,
            distance: 1,
        },
        wave: {
            length: 128,
        },
    };
    return <Liquid {...config} />;
};

// ReactDOM.render(<ChartBD />, document.getElementById('container'));

export default ChartBD;
