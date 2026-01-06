"use client";
import React, { useState } from 'react';
import Image from 'next/image';
// import Link from 'next/link'; // Not strictly needed if we toggle state, but good for routing if separate pages.
// Using state for toggle as per "Login?Signup" request which implies a single page with toggle or shared layout.
import GlassInput from '@/components/GlassInput';
import ImageCarousel from '@/components/ImageCarousel';
import { FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(false); // Default to Signup as per image "Create an account"
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
    console.log('Form submitted:', formData, isLogin ? 'Login' : 'Signup');
  };

  return (
    <div className="fixed inset-0 z-50 w-full flex items-center justify-center bg-[url('/images/UI.jpg')] bg-cover bg-center p-4 pt-20 lg:pt-28">
      {/* Background Overlay for better contrast if needed, currently relying on the image */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-sm z-0"></div>

      <div className="w-full max-w-6xl h-full max-h-[85vh] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden flex relative z-10 flex-col lg:flex-row">

        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative">

          {/* Logo */}
          <div className="absolute top-8 left-8 lg:left-12 flex items-center gap-2">
            <div className="relative w-10 h-10">
              <Image src="/images/view-me-high-resolution-logo-transparent.png" alt="View Me" fill className="object-contain" />
            </div>
          </div>

          <div className="max-w-md mx-auto w-full">
            <div className="mb-8 text-center lg:text-left">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Welcome back' : 'Create an account'}
              </h1>
              <p className="text-gray-600 text-sm">
                {isLogin ? 'Enter your details to sign in' : 'Sign up and explore the world'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <GlassInput
                  id="fullName"
                  name="fullName"
                  label="Full name"
                  placeholder="Amélie Laurent" // Placeholder from image
                  value={formData.fullName}
                  onChange={handleChange}
                />
              )}

              <GlassInput
                id="email"
                name="email"
                label="Email"
                type="email"
                placeholder="amelielaurent7622@gmail.com"
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
                {isLogin ? 'Sign In' : 'Submit'}
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
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 font-semibold text-[#1dbf73] hover:text-[#159e5e] transition-colors underline-offset-2 hover:underline"
                >
                  {isLogin ? 'Sign up' : 'Log in'}
                </button>
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