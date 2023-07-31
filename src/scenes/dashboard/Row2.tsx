import BoxHeader from "@/components/BoxHeader";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { products } from "../../components/products";
import { Box, Typography, useTheme } from "@mui/material";
import {
  Tooltip,
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  PieChart,
  Pie,
  Cell,
  ScatterChart,
  Scatter,
  ZAxis,
} from "recharts";

const pieData = [
  { name: "Group A", value: 600 },
  { name: "Group B", value: 400 },
];

const Data = [
  {
    month: "january",
    revenue: "15989.64",
    expenses: "14231.73",
    operationalExpenses: "10340.03",
    nonOperationalExpenses: "4891.70",
  },
  {
    month: "february",
    revenue: "15832.77",
    expenses: "11677.84",
    operationalExpenses: "7006.69",
    nonOperationalExpenses: "8661.15",
  },
  {
    month: "march",
    revenue: "16481.27",
    expenses: "14664.03",
    operationalExpenses: "8797.42",
    nonOperationalExpenses: "7866.61",
  },
  {
    month: "april",
    revenue: "18229.38",
    expenses: "12336.52",
    operationalExpenses: "7401.91",
    nonOperationalExpenses: "2934.61",
  },
  {
    month: "may",
    revenue: "17401.79",
    expenses: "11160.61",
    operationalExpenses: "4296.37",
    nonOperationalExpenses: "4864.24",
  },
  {
    month: "june",
    revenue: "18274.03",
    expenses: "12311.61",
    operationalExpenses: "7386.96",
    nonOperationalExpenses: "9924.65",
  },
  {
    month: "july",
    revenue: "19349.98",
    expenses: "15431.81",
    operationalExpenses: "9258.09",
    nonOperationalExpenses: "7173.72",
  },
  {
    month: "august",
    revenue: "16647.29",
    expenses: "13213.71",
    operationalExpenses: "3127.82",
    nonOperationalExpenses: "5085.89",
  },
  {
    month: "september",
    revenue: "19344.07",
    expenses: "17405.92",
    operationalExpenses: "10443.55",
    nonOperationalExpenses: "4962.37",
  },
  {
    month: "october",
    revenue: "21160.22",
    expenses: "12990.58",
    operationalExpenses: "3594.35",
    nonOperationalExpenses: "9396.23",
  },
  {
    month: "november",
    revenue: "22655.03",
    expenses: "17140.80",
    operationalExpenses: "10284.48",
    nonOperationalExpenses: "3856.32",
  },
  {
    month: "december",
    revenue: "17757.75",
    expenses: "15266.97",
    operationalExpenses: "9160.18",
    nonOperationalExpenses: "4106.79",
  },
];

const Row2 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[300]];

  const operationalExpenses = Data.map(
    ({ month, operationalExpenses, nonOperationalExpenses }) => {
      return {
        name: month.substring(0, 3),
        "Operational Expenses": operationalExpenses,
        "Non Operational Expenses": nonOperationalExpenses,
      };
    }
  );

  const productExpenseData = products.map(({ _id, price, expense }) => {
    return {
      id: _id,
      price: price,
      expense: expense,
    };
  });

  return (
    <>
      <DashboardBox gridArea="d">
        <BoxHeader
          title="Operational vs Non-Operational Expenses"
          sideText="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={operationalExpenses}
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
              orientation="left"
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
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Non Operational Expenses"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>

      <DashboardBox gridArea="e">
        <BoxHeader title="Campaigns and Targets" sideText="+4%" />
        <FlexBetween mt="0.25rem" gap="1.5rem" pr="1rem">
          <PieChart
            width={110}
            height={100}
            margin={{
              top: 0,
              right: -10,
              left: 10,
              bottom: 0,
            }}
          >
            <Pie
              stroke="none"
              data={pieData}
              innerRadius={18}
              outerRadius={38}
              paddingAngle={2}
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
          </PieChart>
          <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
            <Typography variant="h5">Target Sales</Typography>
            <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
              83
            </Typography>
            <Typography variant="h6">
              Finance goals of the campaign that is desired
            </Typography>
          </Box>
          <Box flexBasis="40%">
            <Typography variant="h5">Losses in Revenue</Typography>
            <Typography variant="h6">Losses are down 25%</Typography>
            <Typography mt="0.4rem" variant="h5">
              Profit Margins
            </Typography>
            <Typography variant="h6">
              Margins are up by 30% from last month.
            </Typography>
          </Box>
        </FlexBetween>
      </DashboardBox>

      <DashboardBox gridArea="f">
        <BoxHeader title="Product Prices vs Expenses" sideText="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -10,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              dataKey="price"
              name="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              dataKey="expense"
              name="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name="Product Expense Ratio"
              data={productExpenseData}
              fill={palette.tertiary[500]}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
    </>
  );
};

export default Row2;
