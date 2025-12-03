"use client";

const chartData = [
  { month: "January", total: 186, successfull: 80 },
  { month: "February", total: 305, successfull: 200 },
  { month: "March", total: 237, successfull: 120 },
  { month: "April", total: 73, successfull: 190 },
  { month: "May", total: 209, successfull: 130 },
  { month: "June", total: 214, successfull: 140 },
];

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  total: {
    label: "Total",
    color: "var(--chart-1)",
  },
  successfull: {
    label: "Successfull",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;
export default function AppBarChart() {
  return (
    <div>
      <h1 className="text-lg font-medium  mb-6">Total Revenue</h1>

      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={10}
            tickFormatter={(val) => val.slice(0, 3)}
          />
          <YAxis tickLine={false} axisLine={false} tickMargin={10} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="total" fill="var(--color-total)" radius={4} />
          <Bar
            dataKey="successfull"
            fill="var(--color-successfull)"
            radius={4}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
