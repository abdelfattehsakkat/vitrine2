'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone, Mail, Clock, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/soins', label: 'Soins' },
    { href: '/contact', label: 'Contact' },
  ];

  const contactInfo = {
    phone: '+216 70 935 541',
    email: 'guedria.yosraa@gmail.com',
    address: '47 Av. Fethi Zouhir, Ariana 2083',
    hours: 'Lun-Ven: 9h-18h, Sam: 9h-13h'
  };

  return (
    <>
      {/* Top bar avec informations de contact - Design moderne et épuré */}
      <div className="hidden lg:block bg-gradient-to-r from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-8">
              <a 
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                </div>
                <span className="font-medium">{contactInfo.phone}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                </div>
                <span className="font-medium">{contactInfo.email}</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <Clock className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="font-medium">{contactInfo.hours}</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-100/50 dark:hover:bg-blue-900/20 rounded-full transition-all"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation principale - Design moderne et minimaliste */}
      <nav className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-5">
            {/* Logo moderne */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center shadow-lg shadow-gray-300/30 dark:shadow-gray-700/30 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 p-1">
                  <Image src="/images/logos/logo.jpg" alt="Logo" width={40} height={40} className="object-contain rounded-lg" />
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
                  Cabinet Dentaire Dr. Guedria
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Excellence & Sourire
                </p>
              </div>
            </Link>

            {/* Navigation desktop - Design épuré */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-5 py-2.5 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 relative group rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/10"
                >
                  {item.label}
                  <span className="absolute inset-x-5 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                </Link>
              ))}
              <Button className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105 rounded-lg px-6">
                Prendre RDV
              </Button>
            </div>

            {/* Menu mobile button - Design moderne */}
            <button
              className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Menu mobile - Design amélioré */}
          {isMenuOpen && (
            <div className="md:hidden py-6 border-t border-gray-100 dark:border-gray-800 animate-in slide-in-from-top duration-200">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/10 font-medium rounded-lg transition-all"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-medium">{contactInfo.phone}</span>
                  </a>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg rounded-lg py-6">
                    Prendre RDV
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}