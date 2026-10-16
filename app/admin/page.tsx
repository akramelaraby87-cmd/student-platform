import AdminDashboard from "@/components/AdminDashboard";
import Navbar from "@/components/Navbar";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">لوحة تحكم النظام</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">إدارة صلاحيات المشرفين، مراجعة الملفات، وحماية المنصة</p>
        </div>
        <AdminDashboard />
      </main>
    </div>
  );
}
