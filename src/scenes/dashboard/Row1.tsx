import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import { useTheme } from "@mui/material";
import {
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  BarChart,
  Bar,
  LineChart,
  XAxis,
  YAxis,
  Legend,
  Line,
  Tooltip,
  Area,
} from "recharts";

const data = [
  {
    month: "January".substring(0, 3),
    revenue: "15989.64",
    expenses: "14231.73",
  },
  {
    month: "February".substring(0, 3),
    revenue: "15832.77",
    expenses: "11677.84",
  },
  {
    month: "March".substring(0, 3),
    revenue: "16481.27",
    expenses: "14664.03",
  },
  {
    month: "April".substring(0, 3),
    revenue: "18229.38",
    expenses: "12336.52",
  },
  {
    month: "May".substring(0, 3),
    revenue: "17401.79",
    expenses: "11160.61",
  },
  {
    month: "June".substring(0, 3),
    revenue: "18274.03",
    expenses: "12311.61",
  },
  {
    month: "July".substring(0, 3),
    revenue: "19349.98",
    expenses: "15431.81",
  },
  {
    month: "August".substring(0, 3),
    revenue: "16647.29",
    expenses: "13213.71",
  },
  {
    month: "September".substring(0, 3),
    revenue: "19344.07",
    expenses: "17405.92",
  },
  {
    month: "October".substring(0, 3),
    revenue: "21160.22",
    expenses: "12990.58",
  },
  {
    month: "November".substring(0, 3),
    revenue: "22655.03",
    expenses: "17140.80",
  },
  {
    month: "December".substring(0, 3),
    revenue: "17757.75",
    expenses: "15266.97",
  },
];

const Row1 = () => {
  const { palette } = useTheme();

  const revenue = data.map(({ month, revenue }) => {
    return {
      name: month.substring(0, 3),
      revenue: revenue,
    };
  });

  const revenueExpenses = data.map(({ month, revenue, expenses }) => {
    return {
      name: month.substring(0, 3),
      revenue: revenue,
      expenses: expenses,
    };
  });

  const revenueProfit = data.map(({ month, revenue, expenses }) => {
    const profit = (parseFloat(revenue) - parseFloat(expenses)).toFixed(2);
    return {
      name: month.substring(0, 3),
      revenue: parseFloat(revenue),
      profit: parseFloat(profit),
    };
  });

  return (
    <>
      <DashboardBox gridArea="a">
        <BoxHeader
          title="Revenue and Expenses"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={revenueExpenses}
            margin={{
              top: 15,
              right: 25,
              left: -10,
              bottom: 60,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.5}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              tickLine={false}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px" }}
              domain={[8000, 23000]}
            />
            <Tooltip formatter={(v) => `$${v}`} />
            <Area
              type="monotone"
              dataKey="revenue"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              dot={true}
              stroke={palette.primary.main}
              fillOpacity={1}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="b">
        <BoxHeader
          title="Profit and Revenue"
          subtitle="top line represents revenue, bottom line represents expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={revenueProfit}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip formatter={(v) => `$${v}`} />
            <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="c">
        <BoxHeader
          title="Revenue Month by Month"
          subtitle="graph representing the revenue month by month"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={revenue}
            margin={{
              top: 17,
              right: 15,
              left: -5,
              bottom: 58,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor={palette.primary[300]}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <Tooltip formatter={(v) => `$${v}`} />
            <Bar dataKey="revenue" fill="url(#colorRevenue)" />
          </BarChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row1;
