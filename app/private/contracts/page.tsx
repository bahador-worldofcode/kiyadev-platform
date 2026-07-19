"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import {
  Loader2,
  FileText,
  ExternalLink,
  PowerOff,
  Power,
  PlusCircle,
  RefreshCcw,
} from "lucide-react";

type ContractRow = {
  id: string;
  client_name: string;
  project_name: string;
  contract_amount: string;
  status: string;
  is_active: boolean;
  created_at: string;
};

export default function ContractsListPage() {
  const [contracts, setContracts] = useState<ContractRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);

  const fetchContracts = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("official_contracts")
        .select("id, client_name, project_name, contract_amount, status, is_active, created_at")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setContracts(data || []);
    } catch (error) {
      console.error(error);
      alert("خطا در دریافت لیست قراردادها! لطفاً اتصال اینترنت را بررسی کنید.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContracts();
  }, []);

  // به جای حذف قرارداد، فقط وضعیت فعال/غیرفعال بودنش رو عوض می‌کنیم
  const toggleActive = async (contract: ContractRow) => {
    setBusyId(contract.id);
    try {
      const { error } = await supabase
        .from("official_contracts")
        .update({ is_active: !contract.is_active })
        .eq("id", contract.id);

      if (error) throw error;

      setContracts((prev) =>
        prev.map((c) =>
          c.id === contract.id ? { ...c, is_active: !c.is_active } : c
        )
      );
    } catch (error) {
      console.error(error);
      alert("خطا در تغییر وضعیت قرارداد!");
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div
      className="min-h-screen bg-slate-950 text-slate-200 py-12 px-4 font-sans"
      dir="rtl"
      style={{ fontFamily: '"Vazirmatn", "IRANSans", "Tahoma", sans-serif' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10">
          <div className="text-center sm:text-right">
            <div className="inline-flex p-3 bg-blue-500/10 rounded-full text-blue-400 mb-3 border border-blue-500/20">
              <FileText size={26} />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white mb-1">
              لیست قراردادها
            </h1>
            <p className="text-slate-400 text-sm font-bold">
              می‌تونی هر قرارداد رو به جای حذف، غیرفعال یا دوباره فعال کنی
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={fetchContracts}
              className="flex gap-2 items-center bg-slate-800 hover:bg-slate-700 text-white px-5 py-3 rounded-xl font-bold transition-all border border-slate-700"
            >
              <RefreshCcw size={18} />
              بروزرسانی
            </button>
            <Link
              href="/private/contract-builder"
              className="flex gap-2 items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold transition-all"
            >
              <PlusCircle size={18} />
              قرارداد جدید
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 className="animate-spin text-blue-400 w-10 h-10" />
            <p className="text-slate-400 font-bold">در حال بارگذاری...</p>
          </div>
        ) : contracts.length === 0 ? (
          <div className="text-center py-24 text-slate-500 font-bold">
            هنوز هیچ قراردادی ثبت نشده.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {contracts.map((contract) => (
              <div
                key={contract.id}
                className={`rounded-2xl border p-5 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 transition-all ${
                  contract.is_active
                    ? "bg-slate-900/80 border-slate-800"
                    : "bg-slate-900/30 border-slate-800/50 opacity-60"
                }`}
              >
                <div className="flex-1 w-full">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h2 className="text-lg font-black text-white">
                      {contract.client_name || "بدون نام"}
                    </h2>
                    <span className="text-xs font-bold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-lg">
                      {contract.project_name}
                    </span>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                        contract.is_active
                          ? "bg-emerald-500/10 text-emerald-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {contract.is_active ? "فعال" : "غیرفعال"}
                    </span>
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                        contract.status === "completed"
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-amber-500/10 text-amber-400"
                      }`}
                    >
                      {contract.status === "completed" ? "امضا شده" : "در انتظار امضا"}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm font-mono">
                    مبلغ: {contract.contract_amount} تومان &nbsp;|&nbsp; تاریخ:{" "}
                    {new Date(contract.created_at).toLocaleDateString("fa-IR")}
                  </p>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                  <Link
                    href={`/agreement/${contract.id}`}
                    target="_blank"
                    className="flex-1 sm:flex-none flex justify-center gap-2 items-center bg-slate-800 hover:bg-slate-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm transition-all border border-slate-700"
                  >
                    <ExternalLink size={16} />
                    مشاهده
                  </Link>
                  <button
                    onClick={() => toggleActive(contract)}
                    disabled={busyId === contract.id}
                    className={`flex-1 sm:flex-none flex justify-center gap-2 items-center px-4 py-2.5 rounded-xl font-bold text-sm transition-all ${
                      contract.is_active
                        ? "bg-red-500/10 hover:bg-red-500/20 text-red-400"
                        : "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400"
                    }`}
                  >
                    {busyId === contract.id ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : contract.is_active ? (
                      <PowerOff size={16} />
                    ) : (
                      <Power size={16} />
                    )}
                    {contract.is_active ? "غیرفعال کردن" : "فعال کردن"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
