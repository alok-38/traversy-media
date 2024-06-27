"use client";
import React from "react";
import {
  LineChart,
  Line,
  YAxis,
  XAxis, // Updated with default parameter for tick and orientation
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import data from "@/data/analytics";

const AnalyticsChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics For This Year</CardTitle>
        <CardDescription>Views Per Month</CardDescription>
      </CardHeader>
      <CardContent>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <LineChart width={1100} height={300} data={data}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="name" tick={false} orientation="bottom" />{" "}
              {/* Set tick and orientation */}
              <YAxis />
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsChart;
