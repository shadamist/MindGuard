import React, { useState } from "react";
<<<<<<< HEAD
=======
import { useNavigate } from "react-router-dom";
import {
  Bell,
  User,
  LogOut,
  FileText,
  ShieldCheck,
  Headphones,
  ChevronDown,
} from "lucide-react";

>>>>>>> 85f969738bcd189217e55805194a001f084d5494
import MyCustomIcon from "../assets/icon-mindguard.png";

export default function Navbar({ setOpen }) {
  const [showDropdown, setShowDropdown] = useState(false);
<<<<<<< HEAD
  const [selectedDate, setSelectedDate] = useState("Hari Ini");

  // Fungsi untuk mendapatkan daftar 7 hari terakhir
  const getLast7Days = () => {
    const days = ["Hari Ini", "Kemarin"];
    for (let i = 2; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      // Format: "Tgl Bln" (Contoh: 15 Mar)
      const options = { day: "numeric", month: "short" };
      days.push(date.toLocaleDateString("id-ID", options));
    }
    return days;
  };

  const dayOptions = getLast7Days();

  return (
    <nav className="bg-[#345789] flex items-center justify-between sticky top-0 z-50 h-[50px]">
      {/* SISI KIRI */}
=======
  const [selectedDate, setSelectedDate] = useState("hari ini");

  const navigate = useNavigate();

  const dayOptions = [
    "Hari Ini",
    "Kemarin",
    "2 Hari Lalu",
    "3 Hari Lalu",
    "4 Hari Lalu",
    "5 Hari Lalu",
    "6 Hari Lalu",
    "7 Hari Lalu",
  ];

  // =========================
  // HANDLE DROPDOWN FILTER
  // =========================

  const handleSelectDay = (dayLabel, index) => {
    setSelectedDate(dayLabel.toLowerCase());
    setShowDropdown(false);

    // Navigate dengan filter tanggal
    navigate(`/history?filter=${index}`);
  };

  // =========================
  // HANDLE HISTORY BUTTON
  // =========================

  const handleHistoryClick = () => {
    setSelectedDate("semua riwayat");
    setShowDropdown(false);

    // Navigate TANPA filter
    navigate("/history");
  };

  return (
    <nav className="bg-[#345789] flex items-center justify-between sticky top-0 z-50 h-[60px]">
      {/* LEFT SIDE */}
>>>>>>> 85f969738bcd189217e55805194a001f084d5494
      <div className="bg-[#00B4E5] h-full flex items-center px-6 pr-10 rounded-r-[40px] shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen((prev) => !prev)}
<<<<<<< HEAD
            className="lg:hidden p-1 text-white text-2xl leading-none"
          >
            ≡
          </button>
          <div className="flex items-center gap-2">
=======
            className="lg:hidden text-white text-2xl"
          >
            ≡
          </button>

          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
>>>>>>> 85f969738bcd189217e55805194a001f084d5494
            <img
              src={MyCustomIcon}
              alt="Logo"
              className="w-7 h-7 brightness-200"
            />
<<<<<<< HEAD
            <h1 className="!text-[15px] font-bold text-white hidden sm:block m-0 p-0">
=======

            <h1 className="!text-[20px] font-bold text-white hidden sm:block">
>>>>>>> 85f969738bcd189217e55805194a001f084d5494
              Mind Guard
            </h1>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* SISI KANAN */}
      <div className="flex items-center gap-4 px-6 relative">
        <div className="relative">
          {/* Tombol Utama */}
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="bg-[#005C99] text-white px-4 py-1.5 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-[#004d80] transition-all border border-white/10 shadow-inner min-w-[110px] justify-between"
          >
            <span className="text-[12px] font-semibold uppercase tracking-wider">
              {selectedDate}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-3 w-3 transition-transform ${showDropdown ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* MENU DROPDOWN (Dibatasi 1 Minggu) */}
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-100 z-[60] overflow-hidden">
              <div className="max-h-[250px] overflow-y-auto custom-scrollbar">
                {dayOptions.map((day, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedDate(day);
                      setShowDropdown(false);
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 transition-colors border-b border-gray-50 last:border-none"
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Notifikasi */}
        <button className="text-white relative">
          <div className="bg-[#345789] border border-white/30 p-1.5 rounded-lg shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute top-0 right-0 bg-white text-[#345789] text-[8px] font-bold w-3 h-3 flex items-center justify-center rounded-full border border-[#345789]">
=======
      {/* CENTER MENU */}
      <div className="hidden md:flex items-center gap-10 text-white font-semibold text-sm">
        <button
          onClick={handleHistoryClick}
          className="flex items-center gap-2 hover:opacity-80"
        >
          <FileText size={18} />
          HISTORY
        </button>

        <button
          onClick={() => navigate("/analysis")}
          className="flex items-center gap-2 hover:opacity-80"
        >
          <ShieldCheck size={18} />
          ANALISIS
        </button>

        <button
          onClick={() => navigate("/help")}
          className="flex items-center gap-2 hover:opacity-80"
        >
          <Headphones size={18} />
          BANTUAN
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4 px-6 relative">
        {/* NOTIFICATION */}
        <button className="text-white relative">
          <div className="bg-[#345789] border border-white/30 p-2 rounded-lg">
            <Bell size={18} />

            <span className="absolute top-0 right-0 bg-white text-[#345789] text-[8px] font-bold w-3 h-3 flex items-center justify-center rounded-full">
>>>>>>> 85f969738bcd189217e55805194a001f084d5494
              +
            </span>
          </div>
        </button>
<<<<<<< HEAD
      </div>
    </nav>
  );
}
=======

        {/* DATE DROPDOWN */}
        <div className="relative">
          <div
            onClick={() => setShowDropdown(!showDropdown)}
            className="bg-[#005C99] text-white px-4 py-1.5 rounded-xl flex items-center gap-2 cursor-pointer hover:bg-[#004d80] transition-all min-w-[130px] justify-between"
          >
            <span className="text-[12px] font-semibold uppercase tracking-wider">
              {selectedDate}
            </span>

            <ChevronDown
              size={16}
              className={`transition-transform ${
                showDropdown ? "rotate-180" : ""
              }`}
            />
          </div>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border z-50">
              {dayOptions.map((day, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectDay(day, index)}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50"
                >
                  {day}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* PROFILE */}
        <div className="bg-white/20 p-2 rounded-full cursor-pointer hover:bg-white/30">
          <User size={18} />
        </div>

        {/* LOGOUT */}
        <button className="flex items-center gap-2 text-white font-semibold hover:opacity-80">
          <LogOut size={18} />
          LOGOUT
        </button>
      </div>
    </nav>
  );
}
>>>>>>> 85f969738bcd189217e55805194a001f084d5494
