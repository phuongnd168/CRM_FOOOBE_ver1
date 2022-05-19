import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Pie} from '@ant-design/plots';

const Chabdin2 = () => {
    const data = [
        {
            type: 'User',
            value: 27,
        },
        {
            type: 'Admin',
            value: 25,
        },
        {
            type: 'Img',
            value: 18,
        },
        {
            type: 'Data',
            value: 15,
        },
        {
            type: 'File',
            value: 10,
        },
        {
            type: 'Video',
            value: 5,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        theme: 'rgba(0, 0, 0, 0.486)',
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        innerRadius: 0.64,
        meta: {
            value: {
                formatter: (v) => `% ${v}`,
            },
        },
        label: {
            type: 'inner',
            offset: '-50%',
            autoRotate: false,
            style: {
                textAlign: 'center',
                fill: '#fff',
            },
            formatter: ({percent}) => `${(percent * 100).toFixed(0)}%`,
        },
        statistic: {
            title: {
                offsetY: -8,
                style: {
                    color: '#fff',
                },
            },
            content: {
                style: {
                    color: '#fff',
                },
                offsetY: -4,
            },
        },
        pieStyle: {
            lineWidth: 0,
        },
    };
    return <Pie {...config} />;
};

export default Chabdin2