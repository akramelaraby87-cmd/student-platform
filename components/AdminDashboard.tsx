"use client";
import { useState } from "react";
import { Shield, Users, FileText, AlertTriangle, Activity, CheckCircle, XCircle, Trash2 } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("files");

  // بيانات تجريبية آمنة للوحة التحكم
  const pendingFiles = [
    { id: 1, title: "شرح قواعد البيانات المتقدمة SQL", uploader: "أحمد محمد", subject: "قواعد بيانات", date: "2026-06-06" },
    { id: 2, title: "ملخص أمن الشبكات والاتصالات", uploader: "محمود خالد", subject: "أمن سيبراني", date: "2026-06-05" },
  ];

  const systemReports = [
    { id: 1, reporter: "طالب مجهول", reason: "ملف تالف أو غير متوافق", item: "فيزياء تطبيقية", status: "قيد المراجعة" }
  ];

  const auditLogs = [
    { id: 1, admin: "Super Admin", action: "تعديل صلاحيات مستخدم", time: "منذ ساعتين" },
    { id: 2, admin: "Content Moderator", action: "قبول ملف تعليمي جديد", time: "منذ 4 ساعات" }
  ];

  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm overflow-hidden mb-10">
      {/* Admin Header */}
      <div className="bg-slate-900 text-white p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2.5 rounded-xl">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">لوحة الإدارة المركزية (Admin Panel)</h2>
            <p className="text-xs text-slate-400 mt-0.5">إدارة الصلاحيات، مراجعة المحتوى، وسجل العمليات الأمنية</p>
          </div>
        </div>
        <span className="bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs px-3 py-1.5 rounded-full font-medium">
          🔒 وضع الحماية الآمن مفعل
        </span>
      </div>

      {/* Admin Navigation Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 px-6 overflow-x-auto">
        <button
          onClick={() => setActiveTab("files")}
          className={`py-3 px-4 text-sm font-medium border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
            activeTab === "files"
              ? "border-blue-600 text-blue-600 dark:text-blue-400"
              : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-800"
          }`}
        >
          <FileText className="w-4 h-4" />
          مراجعة الملفات ({pendingFiles.length})
        </button>
        <button
          onClick={() => setActiveTab("reports")}
          className={`py-3 px-4 text-sm font-medium border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
            activeTab === "reports"
              ? "border-blue-600 text-blue-600 dark:text-blue-400"
              : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-800"
          }`}
        >
          <AlertTriangle className="w-4 h-4" />
          البلاغات والمخالفات ({systemReports.length})
        </button>
        <button
          onClick={() => setActiveTab("logs")}
          className={`py-3 px-4 text-sm font-medium border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${
            activeTab === "logs"
              ? "border-blue-600 text-blue-600 dark:text-blue-400"
              : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-800"
          }`}
        >
          <Activity className="w-4 h-4" />
          سجل الأحداث (Audit Log)
        </button>
      </div>

      {/* Tab Contents */}
      <div className="p-6">
        {activeTab === "files" && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">الملفات بانتظار موافقة مشرف المحتوى (Content Moderator):</h3>
            {pendingFiles.map((file) => (
              <div key={file.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700 rounded-xl gap-4">
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{file.title}</h4>
                  <p className="text-xs text-slate-500 mt-1">المادة: {file.subject} | الرفع بواسطة: {file.uploader} | التاريخ: {file.date}</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs px-3 py-2 rounded-lg font-medium transition-colors">
                    <CheckCircle className="w-3.5 h-3.5" /> موافقة
                  </button>
                  <button className="flex-1 sm:flex-none flex items-center justify-center gap-1 bg-rose-600 hover:bg-rose-700 text-white text-xs px-3 py-2 rounded-lg font-medium transition-colors">
                    <XCircle className="w-3.5 h-3.5" /> رفض
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "reports" && (
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">البلاغات المقدمة لمشرفي المجتمع (Community Moderator):</h3>
            {systemReports.map((report) => (
              <div key={report.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700 rounded-xl gap-4">
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">بلاغ عن محتوى: {report.item}</h4>
                  <p className="text-xs text-slate-500 mt-1">السبب: {report.reason} | الحالة: <span className="text-amber-500 font-semibold">{report.status}</span></p>
                </div>
                <button className="flex items-center gap-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-700 dark:text-slate-200 text-xs px-3 py-2 rounded-lg font-medium transition-colors">
                  <Trash2 className="w-3.5 h-3.5" /> إزالة العنصر
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "logs" && (
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">سجل العمليات الإدارية الحساسة (Audit Log):</h3>
            {auditLogs.map((log) => (
              <div key={log.id} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700 rounded-xl text-xs">
                <span className="font-semibold text-blue-600 dark:text-blue-400">{log.admin}</span>
                <span className="text-slate-700 dark:text-slate-300">{log.action}</span>
                <span className="text-slate-400">{log.time}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
