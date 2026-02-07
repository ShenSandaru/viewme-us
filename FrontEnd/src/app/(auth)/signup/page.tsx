"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GlassInput from '@/components/ui/glass-input/glass-input';
import ImageCarousel from '@/components/ui/carousel/image-carousel';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function SignupPage() {
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });

  // Hide body scroll when mounted
  React.useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup submitted:', formData);
  };

  return (
    <div className="fixed inset-0 z-50 w-full flex items-center justify-center bg-gradient-to-br from-emerald-50 via-green-100 to-teal-50 p-2 sm:p-4 pt-16 sm:pt-20 lg:pt-28">
      
      {/* Decorative background elements - responsive sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-emerald-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-teal-300/30 rounded-full blur-3xl"></div>
      </div>

      {/* Close button - responsive positioning */}
      <Link 
        href="/" 
        className="absolute top-2 right-2 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all border border-white/30"
      >
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </Link>

      <div className="w-full max-w-6xl h-full max-h-[90vh] sm:max-h-[85vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex relative z-10 flex-col lg:flex-row">

        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center relative">

          <div className="max-w-md mx-auto w-full">
            {/* Header - responsive text sizes */}
            <div className="mb-6 sm:mb-8 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Create an account
              </h1>
             
            </div>

            {/* Form - responsive spacing */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <GlassInput
                id="fullName"
                name="fullName"
                label="Full name"
                placeholder="Shen Sandaru"
                value={formData.fullName}
                onChange={handleChange}
              />

              <GlassInput
                id="email"
                name="email"
                label="Email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
              />

              <GlassInput
                id="password"
                name="password"
                label="Password"
                type="password"
                placeholder="••••••••••••"
                value={formData.password}
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full bg-[#1dbf73] hover:bg-[#159e5e] text-white font-semibold py-2.5 sm:py-3 rounded-xl sm:rounded-2xl transition-colors shadow-lg shadow-green-500/30 mt-3 sm:mt-4 text-sm sm:text-base"
              >
                Submit
              </button>
            </form>

            {/* Divider - responsive spacing */}
            <div className="w-full flex items-center gap-3 sm:gap-4 my-4 sm:my-6">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="text-gray-500 text-xs">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            {/* Social buttons - side by side */}
            <div className="flex gap-3 sm:gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-white/40 border border-white/50 hover:bg-white/60 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl transition-all text-xs sm:text-sm font-medium text-gray-800">
                <FaApple size={18} className="sm:w-5 sm:h-5" /> Apple
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-white/40 border border-white/50 hover:bg-white/60 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl transition-all text-xs sm:text-sm font-medium text-gray-800">
                <FcGoogle size={18} className="sm:w-5 sm:h-5" /> Google
              </button>
            </div>

            {/* Footer links - responsive spacing */}
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-gray-600 text-xs sm:text-sm">
                Already have an account?
                <Link
                  href="/login"
                  className="ml-2 font-semibold text-[#1dbf73] hover:text-[#159e5e] transition-colors underline-offset-2 hover:underline"
                >
                  Log in
                </Link>
              </p>
              <div className="mt-3 sm:mt-4">
                <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side - Carousel (hidden on mobile/tablet) */}
        <div className="hidden lg:block w-1/2 p-4">
          <ImageCarousel />
        </div>

      </div>
    </div>
  );
}