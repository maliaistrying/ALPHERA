"use client";

import { Bell, Calendar, Wallet, UserCircle2 } from "lucide-react";

export default function Page() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const jobs = Array(4)
    .fill(null)
    .map((_, i) => ({
      id: i + 1,
      desc: "Job Description text area Job Description text area",
      price: 2,
      total: 6,
    }));

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 p-6 backdrop-blur-2xl bg-white/25 border border-white/30 rounded-r-3xl shadow-[inset_2px_2px_4px_rgba(255,255,255,0.7),_4px_6px_12px_rgba(0,0,0,0.08)] flex flex-col">
        <h1 className="text-2xl font-bold text-[#2E3192] mb-10 tracking-wide">
          ALPHERA
        </h1>
        <nav className="flex flex-col space-y-3 text-sm font-medium">
          {[
            "Home",
            "Profile",
            "Children",
            "Notifications",
            "Timetable",
            "Wallet",
            "Coins",
            "Personalized Plan",
            "Wellbeing",
            "Calendar",
            "Jobs",
            "Gallery",
            "Journal",
            "Attendance",
            "Rewards",
            "Chat",
          ].map((item) => (
            <button
              key={item}
              className={`text-left px-4 py-2 rounded-xl transition-all ${
                item === "Jobs"
                  ? "bg-[#2E3192]/90 text-white shadow-inner"
                  : "text-[#7d84c1] hover:bg-white/30 hover:text-[#2E3192]"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10 flex flex-col space-y-10 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center backdrop-blur-2xl bg-white/30 border border-white/40 rounded-3xl px-6 py-4 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.6),_4px_6px_10px_rgba(0,0,0,0.08)]">
          <div className="flex items-center gap-4">
            <UserCircle2 className="w-12 h-12 text-[#2E3192]" />
            <div>
              <p className="text-xs text-gray-600">ID: 2345678</p>
              <p className="font-semibold text-gray-800 text-sm">
                Mohammed Haassan Ali ALMohameed
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <Calendar className="w-6 h-6 text-[#6AA5FF]" />
            <Wallet className="w-6 h-6 text-[#1DBF73]" />
            <div className="relative">
              <Bell className="w-6 h-6 text-[#F8C200]" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">
                48
              </span>
            </div>
          </div>
        </div>

        {/* Month / Date */}
        <div className="flex gap-8">
          <div className="bg-white/60 backdrop-blur-xl px-8 py-3 rounded-full border border-white/40 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.7),_6px_6px_12px_rgba(0,0,0,0.05)] font-semibold text-[#2E3192]">
            October 2025
          </div>
          <div className="bg-white/60 backdrop-blur-xl px-8 py-3 rounded-full border border-white/40 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.7),_6px_6px_12px_rgba(0,0,0,0.05)] font-semibold text-[#179785]">
            Monday 28
          </div>
        </div>

   {/* Jobs Table - perfectly aligned */}
<div className="bg-white/40 backdrop-blur-2xl border border-white/40 rounded-3xl shadow-[inset_1px_1px_4px_rgba(255,255,255,0.6),_6px_6px_14px_rgba(0,0,0,0.06)] px-12 py-10 mx-auto w-[950px]">
  {/* Header */}
  <div
    className="grid items-center mb-6 justify-items-center"
    style={{ gridTemplateColumns: "360px 72px repeat(7,40px) 72px" }}
  >
    <div className="justify-self-start px-4 py-2 rounded-full bg-white/70 border border-white/40 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.9),_2px_2px_6px_rgba(0,0,0,0.05)] text-[13px] font-semibold text-[#2E3192]">
      Job
    </div>
    <div className="text-center rounded-full bg-white/70 border border-white/40 px-3 py-2 text-[13px] font-semibold text-[#2E3192]">
      Price
    </div>
    {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
      <div
        key={d}
        className="text-center text-[#6b6fae] text-[13px] font-semibold"
      >
        {d}
      </div>
    ))}
    <div className="text-center rounded-full bg-white/70 border border-white/40 px-3 py-2 text-[13px] font-semibold text-[#2E3192]">
      Total
    </div>
  </div>

  {/* Rows */}
  {jobs.map((job) => (
    <div
      key={job.id}
      className="grid items-center mb-5 justify-items-center"
      style={{ gridTemplateColumns: "360px 72px repeat(7,40px) 72px" }}
    >
      <div className="justify-self-start px-4 py-2 bg-white/60 rounded-xl border border-white/50 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),_4px_4px_10px_rgba(0,0,0,0.05)] text-[12px] text-[#5a5c99]">
        {job.desc}
      </div>
      <div className="text-center font-semibold text-[#2E3192]">
        {job.price}
      </div>

      {Array(7)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className={`w-6 h-6 rounded-full mx-auto border-2 ${
              i < 3
                ? "bg-[#7A68F5] border-[#7A68F5] shadow-[0_0_14px_#7A68F599,inset_2px_2px_5px_rgba(255,255,255,0.8)]"
                : "bg-white/70 border-[#cfd3fa] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.85),_2px_2px_6px_rgba(0,0,0,0.06)]"
            }`}
          />
        ))}

      <div className="text-center font-semibold text-[#2E3192] rounded-full bg-white/70 border border-white/40 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.9),_3px_3px_6px_rgba(0,0,0,0.08)] px-3 py-1">
        {job.total}
      </div>
    </div>
  ))}

  {/* Payday */}
  <div className="flex justify-end items-center mt-10 gap-8 pr-4">
    <div className="px-8 py-3 rounded-full bg-white/80 backdrop-blur-2xl border border-white/40 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.9),_3px_3px_6px_rgba(0,0,0,0.05)] text-center">
      <p className="text-gray-600 text-sm">PAYDAY</p>
      <p className="text-[#2E3192] font-semibold">Thursday</p>
    </div>
    <div className="px-10 py-3 rounded-full bg-gradient-to-r from-[#7A68F5] to-[#2E3192] text-white font-bold text-lg shadow-[inset_1px_1px_3px_rgba(255,255,255,0.6),_4px_4px_10px_rgba(0,0,0,0.2)]">
      8888
    </div>
  </div>
</div>

      </main>
    </div>
  );
}
