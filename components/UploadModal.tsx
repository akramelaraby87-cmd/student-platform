"use client";
import { useState } from "react";
import { Upload, X, CheckCircle, AlertCircle, FileText } from "lucide-react";

export default function UploadModal({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [faculty, setFaculty] = useState("تكنولوجيا المعلومات ICT");
  const [year, setYear] = useState("الأولى");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // التحقق الأمني من حجم الملف (أقل من 10 ميجابايت) ونوعه
      if (selectedFile.size > 10 * 1024 * 1024) {
        setError("حجم الملف يتجاوز الحد الأقصى المسموح به (10 ميجابايت)");
        return;
      }
      setFile(selectedFile);
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !subject || !file) {
      setError("يرجى ملء جميع الحقول الإجبارية واختيار الملف");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl max-w-lg w-full p-6 shadow-xl relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-slate-400 hover:text-slate-600 dark:hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-600 text-white p-2.5 rounded-xl">
            <Upload className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white">رفع ملف تعليمي جديد</h3>
            <p className="text-xs text-slate-500">شارك ملخصاتك ومذكراتك مع زملائك بأمان</p>
          </div>
        </div>

        {success ? (
          <div className="text-center py-8 space-y-3">
            <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto" />
            <h4 className="font-bold text-slate-800 dark:text-white text-base">تم رفع الملف بنجاح!</h4>
            <p className="text-xs text-slate-500">تم إرسال الملف إلى مشرف المحتوى للمراجعة والنشر.</p>
            <button
              onClick={onClose}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-xs px-5 py-2.5 rounded-xl font-medium transition-colors"
            >
              إغلاق النافذة
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 text-xs p-3 rounded-xl flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">عنوان الملف أو الملخص</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="مثال: ملخص شامل لمادة الشبكات الفصل الأول"
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">اسم المادة</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="مثال: شبكات الحاسب"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">السنة الدراسية</label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="الأولى">السنة الأولى</option>
                  <option value="الثانية">السنة الثانية</option>
                  <option value="الثالثة">السنة الثالثة</option>
                  <option value="الرابعة">السنة الرابعة</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">اختر الملف (PDF كحد أقصى 10MB)</label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="w-full text-xs text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-blue-950 dark:file:text-blue-300"
              />
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                إلغاء
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-5 py-2.5 rounded-xl text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-sm disabled:opacity-50"
              >
                {loading ? "جاري الرفع والتحقق..." : "رفع الملف الآن"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
