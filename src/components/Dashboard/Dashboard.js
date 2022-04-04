import React from 'react';

import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import MyAreaChart from '../MyAreaChart/MyAreaChart';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLIneBarArea from '../MyLIneBarArea/MyLIneBarArea';


const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mx-auto gap-20 mt-5 max-w-screen-xl'>
            <div>
                <LineChart width={400} height={400} data={data}>

                    <Line dataKey={'month'}></Line>
                    <Line dataKey={'sell'}></Line>
                    <Line dataKey={'investment'}></Line>
                    <Line dataKey={'revenue'}></Line>

                    <XAxis dataKey={'month'}></XAxis>
                    <YAxis dataKey={'revenue'}></YAxis>

                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </LineChart>

            </div>
            <MyBarChart></MyBarChart>
            <div>
                <MyAreaChart></MyAreaChart>
            </div>
            <div>
                <MyLIneBarArea></MyLIneBarArea>
            </div>
        </div>


    );
};

export default Dashboard;