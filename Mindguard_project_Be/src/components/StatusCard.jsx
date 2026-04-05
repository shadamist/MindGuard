<<<<<<< HEAD
import React from "react";
// Import semua aset emot (Nanti tinggal ganti path-nya kalau file baru sudah ada)
import GoodEmot from "../assets/good.png";

export default function StatusCard() {
  // LOGIC: Ganti value di bawah ini untuk simulasi ("bagus", "cukup", atau "kurang")
  const currentStatus = "bagus";

  // KONFIGURASI STATUS: Warna teks status utama tetap cerah, yang lain hitam/gelap
  const statusConfig = {
    bagus: {
      label: "Bagus",
      pesan: "Pola tidur baik, yuk minum segelas air lagi!",
      warna: "text-sky-400", // Biru muda
      emot: GoodEmot,
    },
    cukup: {
      label: "Cukup",
      pesan: "Tubuhmu butuh sedikit istirahat tambahan hari ini.",
      warna: "text-yellow-500", // Kuning
      emot: GoodEmot,
    },
    kurang: {
      label: "Tidak Cukup",
      pesan: "Waktunya istirahat total, jangan dipaksakan ya!",
      warna: "text-red-500", // Merah
      emot: GoodEmot,
    },
  };

  const status = statusConfig[currentStatus] || statusConfig.bagus;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* CARD STATUS TIDUR */}
      <div className="bg-white shadow-xl rounded-2xl p-6 lg:p-8 flex-1 max-w-md mx-auto lg:mx-0 border border-gray-100">
        <h2 className="text-lg lg:text-xl font-semibold mb-2 flex items-center gap-2.5 text-gray-800">
          <img
            src={status.emot}
            alt="Status emoji"
            className="w-8 h-8 object-contain flex-shrink-0"
          />

          {/* "Statusmu:" tetap hitam, labelnya baru berwarna */}
          <span className="text-gray-800">
            Statusmu:{" "}
            <span
              className={`${status.warna} font-bold transition-colors duration-300`}
            >
              {status.label}
            </span>
          </span>
        </h2>

        {/* Pesan deskripsi menggunakan warna abu gelap/hitam biasa */}
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
          {status.pesan}
        </p>
      </div>

      {/* CARD STRESS LEVEL */}
      <div className="bg-white shadow-xl rounded-2xl p-6 lg:p-8 flex-1 max-w-md mx-auto lg:mx-0 border border-gray-100">
        <h2 className="text-lg lg:text-xl font-semibold mb-2 flex items-center gap-2.5 text-gray-800">
          <span>
            Stress Level:{" "}
            <span className="text-emerald-500 font-bold">Rendah</span>
          </span>
        </h2>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
          Kamu dalam kondisi baik untuk produktif seharian
        </p>
=======
import React, { useEffect, useState } from "react";

export default function StatusCard() {
  const [status, setStatus] = useState("Belum ada data");
  const [note, setNote] = useState("");

  useEffect(() => {
    const history = JSON.parse(
      localStorage.getItem("mindguard_history") || "[]",
    );

    if (history.length > 0) {
      setStatus(history[0].status);
      setNote(history[0].note);
    }
  }, []);

  return (
    <div
      className="flex-1 bg-white rounded-[25px] md:rounded-[35px] 
                  p-6 md:p-8 shadow-sm hover:shadow-md 
                  transition-all border border-slate-100 
                  flex items-center"
    >
      <div>
        <h2 className="text-lg md:text-xl font-extrabold text-slate-700">
          Status Hari Ini
        </h2>

        <p
          className={`text-base font-bold mt-1 ${
            status === "Pola Hidup Sehat" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>

        {note && (
          <p className="text-xs text-gray-500 mt-1 line-clamp-2">{note}</p>
        )}
>>>>>>> 85f969738bcd189217e55805194a001f084d5494
      </div>
    </div>
  );
}
