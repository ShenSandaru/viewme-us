"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GlassInput from '@/components/ui/glass-input/glass-input';
import ImageCarousel from '@/components/ui/carousel/image-carousel';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });

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
    console.log('Login submitted:', formData);
  };

  return (
    <div className="fixed inset-0 z-50 w-full flex items-center justify-center bg-[url('/images/UI.jpg')] bg-cover bg-center p-4 pt-20 lg:pt-28">
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-0"></div>

      <div className="w-full max-w-6xl h-full max-h-[85vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden flex relative z-10 flex-col lg:flex-row">

        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative">

          {/* Logo */}
          <div className="absolute top-8 left-8 lg:left-12 flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image src="/images/view-me-high-resolution-logo-transparent.png" alt="View Me" fill sizes="40px" className="object-contain" />
            </div>
          </div>

          <div className="max-w-md mx-auto w-full">
            <div className="mb-8 text-center lg:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Welcome back
              </h1>
              <p className="text-gray-600 text-sm">
                Enter your details to sign in
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                className="w-full bg-[#1dbf73] hover:bg-[#159e5e] text-white font-semibold py-3 rounded-2xl transition-colors shadow-lg shadow-green-500/30 mt-4"
              >
                Sign In
              </button>
            </form>

            <div className="w-full flex items-center gap-4 my-6">
              <div className="h-px bg-gray-300 flex-1"></div>
              <span className="text-gray-500 text-xs">OR</span>
              <div className="h-px bg-gray-300 flex-1"></div>
            </div>

            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-2 bg-white/40 border border-white/50 hover:bg-white/60 py-2.5 rounded-2xl transition-all text-sm font-medium text-gray-800">
                <FaApple size={20} /> Apple
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-white/40 border border-white/50 hover:bg-white/60 py-2.5 rounded-2xl transition-all text-sm font-medium text-gray-800">
                <FcGoogle size={20} /> Google
              </button>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Don&apos;t have an account?
                <Link
                  href="/signup"
                  className="ml-2 font-semibold text-[#1dbf73] hover:text-[#159e5e] transition-colors underline-offset-2 hover:underline"
                >
                  Sign up
                </Link>
              </p>
              <div className="mt-4">
                <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Terms & Conditions</a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side - Carousel */}
        <div className="hidden lg:block w-1/2 p-4">
          <ImageCarousel />
        </div>

      </div>
    </div>
  );
}
