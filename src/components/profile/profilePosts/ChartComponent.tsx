import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid
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
            <div
                style={{
                    background: "white",
                    padding: "8px",
                    border: "1px solid #E5E7EB",
                    borderRadius: "4px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                    fontSize: "0.875rem"
                }}
            >
                <p style={{margin: 0}}>{payload[0].payload.month}</p>
                <p style={{margin: 0, color: "#FACC15", fontWeight: "bold"}}>
                    {payload[0].value.toLocaleString()}K
                </p>
            </div>
        );
    }
    return null;
};

const ChartComponent: React.FC = () => {
    const data = generateLast8MonthsData();

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{top: 20, right: 40, left: 50, bottom: 20}}
            >
                {/* Vertical lines only (mimics Figma’s “slots”) */}
                <CartesianGrid
                    vertical={true}
                    horizontal={false}
                    stroke="#F3F4F6" // Light gray
                    strokeDasharray="0"
                    strokeWidth={"15px"}
                />

                <XAxis
                    dataKey="month"
                    tick={{fontSize: 12, fill: "#6B7280"}} // Slightly gray text
                    axisLine={false}
                    tickLine={false}
                />

                {/* Hide Y-axis visually, but keep space so line isn’t cut off */}
                <YAxis hide/>

                {/* Custom tooltip to match style */}
                <Tooltip content={<CustomTooltip/>}/>

                {/* The line itself */}
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#FACC15"
                    strokeWidth={2}
                    dot={{r: 4, stroke: "#FACC15", strokeWidth: 2, fill: "#fff"}}
                    activeDot={{r: 6}}
                    label={({x, y, value, index}) =>
                        index === data.length - 1 ? (
                            <text
                                x={x + -20} // shift right so it doesn't overlap the dot
                                y={y}
                                dy={-10} // shift upward
                                fill="#1F2937"
                                fontSize={12}
                            >
                                {value.toLocaleString()}K
                            </text>
                        ) : null
                    }
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default ChartComponent;