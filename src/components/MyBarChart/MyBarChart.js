import React from 'react';
import { Bar, BarChart, Tooltip } from 'recharts';

const MyBarChart = () => {
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
        <div>
            <BarChart width={400} height={400} data={data}>
                <Bar dataKey="investment" fill="#8884d8"></Bar>
                <Bar dataKey="revenue" fill="#8884d8"></Bar>
                <Bar dataKey="month" fill="#8884d8"></Bar>
                <Bar dataKey="sell" fill="#8884d8"></Bar>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default MyBarChart;