import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import StatCard from "../components/statcard/StatCard";
import { motion } from "framer-motion";


const data = [
  { name: "Mon", employees: 80, attendance: 70 },
  { name: "Tue", employees: 90, attendance: 85 },
  { name: "Wed", employees: 100, attendance: 95 },
  { name: "Thu", employees: 110, attendance: 90 },
  { name: "Fri", employees: 120, attendance: 100 },
];

export default function Dashboard() {
  return (
    <motion.div  initial={{ opacity: 0, y: 20 }}  animate={{ opacity: 1, y: 0 }}  transition={{ duration: 0.5 }}  className="space-y-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      {/* KPI */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard title="Total Employees" value="120" />
        <StatCard title="Active" value="98" />
        <StatCard title="On Leave" value="12" />
        <StatCard title="New Hires" value="10" />
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-3 gap-4 rounded-2xl bg-white/5 backdrop-blur-xl">
        
        {/* BIG CHART */}
        <div className="col-span-2 bg-card p-5 rounded-2xl border border-white/10">
          <h3 className="mb-4 text-lg">Employee Growth</h3>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorEmp" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>

              <XAxis dataKey="name" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />

              <Area
                type="monotone"
                dataKey="employees"
                stroke="#6366f1"
                fillOpacity={1}
                fill="url(#colorEmp)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* SIDE CHART */}
        <div className="bg-card p-5 rounded-2xl border border-white/10">
          <h3 className="mb-4 text-lg">Attendance</h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="attendance"
                stroke="#8b5cf6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>
    </motion.div>
  );
}