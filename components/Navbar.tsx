"use client";
import { useState } from "react";
import { BookOpen, Moon, Sun, Search, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-xl shadow-md">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-lg text-slate-800 dark:text-white block leading-tight">
                منصة برج العرب
              </span>
              <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                المنصة الطلابية المستقلة
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#" className="text-blue-600 dark:text-blue-400 font-bold">الرئيسية</a>
            <a href="#library" className="hover:text-blue-600 transition-colors">المكتبة التعليمية</a>
            <a href="#faculties" className="hover:text-blue-600 transition-colors">الأقسام والبرامج</a>
            <a href="#community" className="hover:text-blue-600 transition-colors">الأنشطة والفرص</a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              title="تبديل الوضع"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <a
              href="#login"
              className="hidden sm:flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
            >
              <User className="w-4 h-4" />
              <span>تسجيل الدخول</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 px-4 pt-2 pb-4 space-y-2 text-slate-700 dark:text-slate-200">
          <a href="#" className="block py-2 font-semibold text-blue-600">الرئيسية</a>
          <a href="#library" className="block py-2">المكتبة التعليمية</a>
          <a href="#faculties" className="block py-2">الأقسام والبرامج</a>
          <a href="#login" className="block py-2 text-blue-600 font-medium">تسجيل الدخول</a>
        </div>
      )}
    </nav>
  );
}
