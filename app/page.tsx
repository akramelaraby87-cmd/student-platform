"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FileCard from "@/components/FileCard";
import { Search, Filter, BookOpen, GraduationCap, ShieldCheck, Upload, FolderPlus } from "lucide-react";

const mockFiles = [
  {
    title: "ملخص أساسيات برمجة Python والتركيبات الهيكلية",
    subject: "مقدمة البرمجة",
    faculty: "تكنولوجيا المعلومات ICT",
    year: "الأولى",
    author: "أكرم العربي",
    size: "2.4 MB",
    type: "PDF"
  },
  {
    title: "شرح شبكات الحاسب والمفاهيم الأساسية لنماذج OSI",
    subject: "شبكات الحاسب",
    faculty: "تكنولوجيا المعلومات ICT",
    year: "الثانية",
    author: "مشاركات الطلاب",
    size: "4.1 MB",
    type: "PDF"
  },
  {
    title: "مذكرة الفيزياء التطبيقية - الفصل الدراسي الأول",
    subject: "فيزياء تطبيقية",
    faculty: "جميع الأقسام",
    year: "الأولى",
    author: "اللجنة التعليمية",
    size: "5.8 MB",
    type: "PDF"
  },
  {
    title: "أساسيات الأنظمة المدمجة والمتحكمات الدقيقة ESP32",
    subject: "أنظمة مدمجة",
    faculty: "تكنولوجيا المعلومات ICT",
    year: "الثالثة",
    author: "فريق المبادرة",
    size: "3.2 MB",
    type: "PDF"
  }
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFiles = mockFiles.filter(
    (file) =>
      file.title.includes(searchTerm) ||
      file.subject.includes(searchTerm) ||
      file.faculty.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-slate-900 text-white py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs px-3 py-1.5 rounded-full font-medium mb-4">
            <GraduationCap className="w-4 h-4" />
            جامعة برج العرب التكنولوجية
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            المكتبة والمستودع التعليمي الطلابي المستقل
          </h1>
          <p className="text-slate-300 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            منصة حرة للوصول المباشر إلى المحاضرات، المذكرات، الملخصات، والموارد الدراسية لمختلف التخصصات والسنوات.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative flex items-center">
            <Search className="absolute right-4 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="ابحث باسم المادة، الملخص، أو الدكتور..."
              className="w-full pl-4 pr-12 py-3.5 rounded-xl bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="library">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              أحدث المذكرات والملخصات
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              مجموع الملفات المتاحة حالياً للمعاينة والتحميل المباشر
            </p>
          </div>

          <button className="self-start md:self-auto flex items-center gap-2 bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 text-white text-xs px-4 py-2.5 rounded-lg transition-colors font-medium">
            <FolderPlus className="w-4 h-4 text-blue-400" />
            <span>طلب إضافة ملخص جديد</span>
          </button>
        </div>

        {/* Files Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFiles.length > 0 ? (
            filteredFiles.map((file, idx) => <FileCard key={idx} {...file} />)
          ) : (
            <div className="col-span-full text-center py-12 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                لم يتم العثور على ملفات تطابق بحثك: "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>منصة طلابية مستقلة غير رسمية لخدمة طلاب جامعة برج العرب التكنولوجية</p>
      </footer>
    </div>
  );
}
