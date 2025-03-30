import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import dayjs from "dayjs";

type DataPoint = {
    month: string;
    value: number;
};

const generateLast8MonthsData = (): DataPoint[] => {
    const data: DataPoint[] = [];

    for (let i = 7; i >= 0; i--) {
        data.push({
            month: dayjs().subtract(i, "month").format("MMMM YYYY"),
            value: Math.floor(50000 + Math.random() * 40000), // Replace with real data
        });
    }

    return data;
};

const CustomTooltip = ({active, payload}: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 border rounded shadow text-sm">
                <p>{payload[0].payload.month}</p>
                <p className="font-semibold text-yellow-500">{payload[0].value.toLocaleString()}K</p>
            </div>
        );
    }

    return null;
};

const ChartComponent: React.FC = () => {
    const data = generateLast8MonthsData();

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="month" tick={{fontSize: 12}}/>
                <YAxis hide/>
                <Tooltip content={<CustomTooltip/>}/>
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#facc15"
                    strokeWidth={2}
                    dot={{r: 4, stroke: "#facc15", strokeWidth: 2, fill: "#fff"}}
                    activeDot={{r: 6}}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ChartComponent;