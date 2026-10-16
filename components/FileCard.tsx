import { FileText, Download, Eye, Tag, Calendar } from "lucide-react";

interface FileProps {
  title: string;
  subject: string;
  faculty: string;
  year: string;
  author: string;
  size: string;
  type: string;
}

export default function FileCard({ title, subject, faculty, year, author, size, type }: FileProps) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5 hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs px-2.5 py-1 rounded-md font-semibold border border-blue-100 dark:border-blue-900">
            {subject}
          </span>
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {type}
          </span>
        </div>

        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-base mb-2 line-clamp-2 leading-snug">
          {title}
        </h3>

        <div className="text-xs text-slate-500 dark:text-slate-400 space-y-1 mb-4">
          <p>🎓 {faculty} - السنة {year}</p>
          <p>✍️ إعداد: {author}</p>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500">
        <span>💾 {size}</span>
        <div className="flex gap-2">
          <button className="flex items-center gap-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200 px-3 py-1.5 rounded-lg transition-colors font-medium">
            <Eye className="w-3.5 h-3.5" />
            معاينة
          </button>
          <button className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg transition-colors font-medium shadow-xs">
            <Download className="w-3.5 h-3.5" />
            تحميل
          </button>
        </div>
      </div>
    </div>
  );
}
