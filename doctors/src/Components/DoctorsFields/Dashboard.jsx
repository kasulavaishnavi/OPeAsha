import React, { useState } from "react";
import { CalendarDays } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const bookings = [
  { name: "Laxmi Sharma", time: "10:00 am", status: "pending" },
  { name: "Ravi Kumar", time: "11:00 am", status: "pending" },
  { name: "Sita Devi", time: "12:00 pm", status: "completed" },
  { name: "Amit Singh", time: "01:00 pm", status: "pending" },
  { name: "Neha Gupta", time: "02:00 pm", status: "pending" },
  { name: "Rajesh Kumar", time: "03:00 pm", status: "completed" },
  { name: "Anita Sharma", time: "04:00 pm", status: "pending" },
  { name: "Sunita Devi", time: "05:00 pm", status: "cancelled" },
];

const statusStyles = {
  pending: { backgroundColor: "#facc15", color: "#fff" },
  completed: { backgroundColor: "#22c55e", color: "#fff" },
  cancelled: { backgroundColor: "#ef4444", color: "#fff" },
};

const dataSets = {
  days: [
    { name: "1", earnings: 2000 },
    { name: "2", earnings: 3500 },
    { name: "3", earnings: 2800 },
    { name: "4", earnings: 4000 },
    { name: "5", earnings: 3000 },
    { name: "6", earnings: 4200 },
    { name: "7", earnings: 3900 },
  ],
  week: [
    { name: "Mon", earnings: 12000 },
    { name: "Tue", earnings: 15000 },
    { name: "Wed", earnings: 10000 },
    { name: "Thu", earnings: 20000 },
    { name: "Fri", earnings: 18000 },
    { name: "Sat", earnings: 22000 },
    { name: "Sun", earnings: 17000 },
  ],
  month: [
    { name: "Week 1", earnings: 60000 },
    { name: "Week 2", earnings: 65000 },
    { name: "Week 3", earnings: 58000 },
    { name: "Week 4", earnings: 70000 },
  ],
  year: [
    { name: "Jan", earnings: 60000 },
    { name: "Feb", earnings: 59000 },
    { name: "Mar", earnings: 58000 },
    { name: "Apr", earnings: 60000 },
    { name: "May", earnings: 59000 },
    { name: "Jun", earnings: 60000 },
    { name: "Jul", earnings: 59000 },
    { name: "Aug", earnings: 60000 },
    { name: "Sep", earnings: 60000 },
    { name: "Oct", earnings: 60000 },
    { name: "Nov", earnings: 60000 },
    { name: "Dec", earnings: 60000 },
  ],
};

const Dashboard = () => {
  const [selectedRange, setSelectedRange] = useState("week");
  const [isActive, setIsActive] = useState(true); // Toggle state

  return (
    <div className="overflow-y-hidden">
      <div className="ml-0 md:pl-[80px] lg:pl-[260px] xl:pl-[327px] mt-[75px] md:mt-[75px] lg:mt-[80px] font-urbanist px-4 sm:px-6 max-w-full overflow-hidden">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 gap-3">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold break-words">
            Dashboard Overview
          </h1>
        </div>

        {/* Toggle Switch below heading on its own line */}
        <div className="mt-3 flex items-center gap-3">
          <span className="text-sm font-medium">Status:</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isActive}
              onChange={() => setIsActive(!isActive)}
              className="sr-only peer"
            />
            <div
              className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                isActive ? "bg-[#00A99D]" : "bg-gray-300"
              } peer-checked:bg-[#00A99D]`}
            ></div>
            <div
              className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ${
                isActive ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </label>
          <span className="text-sm font-medium">{isActive ? "Active" : "Inactive"}</span>
        </div>

        {/* FLEX LAYOUT */}
        <div className="flex flex-col xl:flex-row gap-6 mt-6">
          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-6 w-full">
            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full max-w-full">
              <div className="rounded-xl shadow-sm flex flex-col justify-center px-6 py-4 bg-[#00A99D] text-white w-full">
                <h2 className="text-sm sm:text-base md:text-lg font-medium break-words">
                  Total Earnings
                </h2>
                <p className="text-xl sm:text-2xl md:text-3xl font-bold break-words">
                  ₹12,345.67
                </p>
              </div>

              <div className="rounded-xl shadow-sm flex items-center justify-between px-4 py-3 border border-[#F7F7F7] bg-white w-full">
                <div className="flex flex-col justify-center w-full">
                  <h2 className="text-xs sm:text-sm md:text-base font-medium text-gray-700 leading-none break-words">
                    Total Appointments
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-black leading-tight break-words">
                    245
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-500 leading-none">
                    Last 30 days
                  </p>
                </div>
                <img
                  src="https://img.icons8.com/ios-filled/50/appointment-reminders.png"
                  alt="Appointments"
                  className="w-8 sm:w-10 h-8 sm:h-10 flex-shrink-0"
                />
              </div>
            </div>

            {/* Earnings Chart */}
            <div className="w-full">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold break-words">
                  Earning Summary
                </h2>
                <select
                  className="border border-gray-300 rounded-md px-3 py-1 text-xs sm:text-sm md:text-base"
                  value={selectedRange}
                  onChange={(e) => setSelectedRange(e.target.value)}
                >
                  <option value="days">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
              </div>
              <div className="border border-[#0077771A] rounded-xl h-64 p-4 bg-white w-full max-w-full overflow-hidden">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dataSets[selectedRange]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar
                      dataKey="earnings"
                      fill="#0077771A"
                      barSize={30}
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Latest Bookings (stacked below for small desktops, right for xl+) */}
            <div className="w-full xl:hidden max-h-[70vh] overflow-y-auto space-y-6 mt-4">
              <div className="bg-white rounded-2xl border border-[#F7F7F7] p-4 w-full">
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 break-words">
                  Latest Bookings
                </h2>
                <div className="space-y-4">
                  {bookings.map((b, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between w-full"
                    >
                      <div className="flex items-center gap-3 w-full max-w-[70%]">
                        <img
                          src="https://randomuser.me/api/portraits/women/44.jpg"
                          alt={b.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="whitespace-normal break-words">
                          <p className="text-xs sm:text-sm md:text-base font-medium break-words">
                            {b.name}
                          </p>
                          <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                            {b.time}
                          </p>
                        </div>
                      </div>
                      <span
                        className="px-2 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs md:text-sm font-medium capitalize"
                        style={statusStyles[b.status]}
                      >
                        {b.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Latest Bookings (only visible on xl+ right side) */}
          <div className="hidden xl:block w-full xl:w-80 max-h-[70vh] overflow-y-auto space-y-6">
            <div className="bg-white rounded-2xl border border-[#F7F7F7] p-4 w-full">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 break-words">
                Latest Bookings
              </h2>
              <div className="space-y-4">
                {bookings.map((b, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between w-full"
                  >
                    <div className="flex items-center gap-3 w-full max-w-[70%]">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt={b.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="whitespace-normal break-words">
                        <p className="text-xs sm:text-sm md:text-base font-medium break-words">
                          {b.name}
                        </p>
                        <p className="text-[10px] sm:text-xs md:text-sm text-gray-500">
                          {b.time}
                        </p>
                      </div>
                    </div>
                    <span
                      className="px-2 sm:px-3 py-1 rounded-lg text-[10px] sm:text-xs md:text-sm font-medium capitalize"
                      style={statusStyles[b.status]}
                    >
                      {b.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
