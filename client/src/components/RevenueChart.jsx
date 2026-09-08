import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 7000 },
  { month: "May", revenue: 6200 },
  { month: "Jun", revenue: 8500 },
];

const RevenueChart = () => {
  return (
    <section className="w-full rounded-2xl bg-white p-6 shadow-md">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Revenue Overview
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Monthly revenue performance
        </p>
      </div>

      <div className="h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={revenueData}
            margin={{
              top: 10,
              right: 20,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `₹${value / 1000}K`}
            />

            <Tooltip
              formatter={(value) => [
                `₹${value.toLocaleString()}`,
                "Revenue",
              ]}
              labelFormatter={(month) => `Month: ${month}`}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default RevenueChart;