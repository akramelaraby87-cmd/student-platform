"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import FileCard from "@/components/FileCard";
import UploadModal from "@/components/UploadModal";
import { BookOpen, Users, GraduationCap, Calendar, ArrowLeft } from "lucide-react";

export default function Home() {
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const sampleFiles = [
    { id: 1, title: "ملخص أساسيات برمجة Python والتركيبات الهيكلية", subject: "مقدمة البرمجة", faculty: "تكنولوجيا المعلومات ICT", author: "اللجنة التعليمية", size: "2.4 MB", date: "2026-10-01" },
    { id: 2, title: "شرح شبكات الحاسب والمفاهيم الأساسية لنماذج OSI", subject: "شبكات الحاسب", faculty: "تكنولوجيا المعلومات ICT", author: "إسهامات الطلاب", size: "4.1 MB", date: "2026-09-28" },
    { id: 3, title: "مذكرة الفيزياء التطبيقية - الفصل الدراسي الأول", subject: "فيزياء تطبيقية", faculty: "جميع الأقسام", author: "اللجنة التعليمية", size: "5.8 MB", date: "2026-09-20" },
    { id: 4, title: "أساسيات الأنظمة المدمجة والمتحكمات الدقيقة ESP32", subject: "أنظمة مدمجة", faculty: "تكنولوجيا المعلومات ICT", author: "فريق المبادرة", size: "3.2 MB", date: "2026-09-15" },
  ];

  const communityActivities = [
    {
      id: 1,
      title: "ورشة عمل: أساسيات الذكاء الاصطناعي وتعلم الآلة",
      category: "ورش عمل",
      date: "25 أكتوبر 2026",
      desc: "جلسة تفاعلية للتعرف على المفاهيم الأساسية للذكاء الاصطناعي وتطبيقاته العملية في المشاريع الطلابية.",
      status: "قريباً"
    },
    {
      id: 2,
      title: "مسابقة البرمجة وحل المشكلات (Problem Solving)",
      category: "مسابقات",
      date: "10 نوفمبر 2026",
      desc: "تحدي برمجي لطلاب كلية تكنولوجيا المعلومات لاختبار مهارات الخوارزميات والتفكير المنطقي.",
      status: "مفتوح للتسجيل"
    },
    {
      id: 3,
      title: "ملتقى مشاريع التخرج والابتكار التكنولوجي",
      category: "فعاليات",
      date: "15 ديسمبر 2026",
      desc: "عرض لأبرز مشاريع الطلاب والابتكارات التكنولوجية والتواصل مع أصحاب الخبرة والأكاديميين.",
      status: "قريباً"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-900 to-slate-900 text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs px-3.5 py-1.5 rounded-full font-medium inline-block">
            جامعة برج العرب التكنولوجية
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            المكتبة والمستودع التعليمي الطلابي المستقل
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-light">
            منصة حرة للوصول المباشر إلى المحاضرات، المذكرات، الملخصات، والأنشطة الطلابية لمختلف التخصصات والسنوات.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a href="#library" className="bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-lg">
              استكشف المكتبة
            </a>
            <button
              onClick={() => setIsUploadOpen(true)}
              className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs md:text-sm font-semibold px-6 py-3 rounded-xl transition-all"
            >
              مشاركة ملف تعليمي
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Library Section */}
        <section id="library" className="scroll-mt-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                أحدث المذكرات والملخصات
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                مجموع الملفات المتاحة حالياً للمعاينة والتحميل المباشر
              </p>
            </div>
            <button
              onClick={() => setIsUploadOpen(true)}
              className="hidden sm:block text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              + إضافة ملف جديد
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleFiles.map((file) => (
              <FileCard key={file.id} file={file} />
            ))}
          </div>
        </section>

        {/* Community & Activities Section */}
        <section id="community" className="scroll-mt-20 border-t border-slate-200 dark:border-slate-800 pt-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              الأنشطة والفرص الطلابية
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">
              متابعة الورك شوب، المسابقات البرمجية، والأحداث الأكاديمية والطلابية بالجامعة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityActivities.map((act) => (
              <div key={act.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-lg">
                      {act.category}
                    </span>
                    <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                      {act.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-white text-base mb-2">{act.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{act.desc}</p>
                </div>
                <div className="border-t border-slate-100 dark:border-slate-700/50 pt-3 flex justify-between items-center text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {act.date}
                  </span>
                  <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline flex items-center gap-0.5">
                    التفاصيل <ArrowLeft className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Faculties Section */}
        <section id="faculties" className="scroll-mt-20 border-t border-slate-200 dark:border-slate-800 pt-12">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              الأقسام والبرامج الأكاديمية
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1">تصفح المواد والمستودع حسب البرامج الدراسية في الجامعة</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
              <h3 className="font-bold text-sm text-slate-800 dark:text-white">تكنولوجيا المعلومات (ICT)</h3>
              <p className="text-xs text-slate-500 mt-1">البرمجة، شبكات الحاسب، الأمن السيبراني، والأنظمة المدمجة</p>
            </div>
            <div className="p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
              <h3 className="font-bold text-sm text-slate-800 dark:text-white">تكنولوجيا السكك الحديدية</h3>
              <p className="text-xs text-slate-500 mt-1">أنظمة التحكم والتصميم الميكانيكي والكهربائي</p>
            </div>
            <div className="p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl">
              <h3 className="font-bold text-sm text-slate-800 dark:text-white">التصنيع الغذائي والعلوم الصحية</h3>
              <p className="text-xs text-slate-500 mt-1">جودة الأغذية والتكنولوجيا المساعدة والصحية</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 text-xs text-center py-8 border-t border-slate-800">
        <p>منصة طلابية مستقلة غير رسمية لخدمة طلاب جامعة برج العرب التكنولوجية</p>
      </footer>

      {isUploadOpen && <UploadModal onClose={() => setIsUploadOpen(false)} />}
    </div>
  );
}
