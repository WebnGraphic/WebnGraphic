/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface DeviceCategoriesProps {
  data: any;
  days: number;
}

export function DeviceCategories({ data, days }: DeviceCategoriesProps) {
  const devices =
    data?.rows?.map((row: any) => ({
      name: row.dimensions[0],
      value: Number.parseInt(row.metrics[0].values[0]),
    })) || [];

  // Colors for the pie chart
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Card className="py-6">
      <CardHeader>
        <CardTitle>Device Categories</CardTitle>
        <CardDescription>
          Distribution of visits by device type in the last {days} days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={devices}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {devices.map((entry: any, index: number) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={(value) => value.toLocaleString()} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
