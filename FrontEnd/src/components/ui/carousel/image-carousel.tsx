"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    { src: '/images/destination1.jpg', location: 'Sigiriya', temp: '30°C' },
    { src: '/images/destination2.jpg', location: 'Ella', temp: '24°C' },
    { src: '/images/destination3.jpg', location: 'Mirissa', temp: '28°C' },
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden rounded-[2rem] shadow-2xl">
            {images.map((img, index) => (
                <div
                    key={img.src}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <Image
                        src={img.src}
                        alt={img.location}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                    {/* Dark gradient overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </div>
            ))}

            {/* Weather Widget (Top Left) */}
            <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl px-4 py-2 flex items-center gap-2 shadow-lg">
                <span className="text-2xl">☀️</span>
                <span className="text-xl font-bold text-white drop-shadow-md">{images[currentIndex].temp}</span>
            </div>

            {/* Location Card (Bottom Left) */}
            <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 shadow-lg max-w-sm transform transition-all duration-500 hover:scale-[1.02]">
                    <p className="text-white/80 text-sm font-medium mb-1">Next Trip:</p>
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-wide drop-shadow-md">
                        {images[currentIndex].location}
                    </h3>
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div
                                key={i}
                                className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600 relative overflow-hidden"
                            >
                                U{i}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;
