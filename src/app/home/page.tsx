/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function page() {
    return (
        <>
            <div className="p-4 sm:ml-64">
                {/* Hero Section */}
                

                {/* Features Section */}
                <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { title: "📅 Task Management", desc: "Plan and track assignments with ease." },
                        { title: "⏳ Deadline Alerts", desc: "Never miss an important deadline." },
                        { title: "🤝 Collaboration", desc: "Work with classmates on projects." },
                    ].map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold">{feature.title}</h3>
                            <p className="text-gray-600 mt-2">{feature.desc}</p>
                        </div>
                    ))}
                </section>

                {/* How It Works */}
                <section className="mt-10 text-center">
                    <h2 className="text-3xl font-bold">How It Works</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { step: "Sign Up", link: "/signup" },
                            { step: "Create Tasks", link: "/create-task" },
                            { step: "Stay Organized", link: "/dashboard" }
                        ].map((item, index) => (
                            <Link key={index} href={item.link}>
                                <div className="bg-gray-100 p-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-200">
                                    <h4 className="text-xl font-semibold">{index + 1}. {item.step}</h4>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* User Reviews - Slider */}
                <section className="mt-12 text-center">
                    <h2 className="text-3xl font-bold">What Our Users Say</h2>
                    <Swiper spaceBetween={20} slidesPerView={1} loop={true} autoplay={{ delay: 3000 }}>
                        {[
                            { name: "Alex Johnson", review: "This app has completely transformed how I manage my assignments! Highly recommend." },
                            { name: "Emily Smith", review: "Great tool for keeping track of deadlines and collaborating with peers." },
                            { name: "Michael Brown", review: "Easy to use and very effective in organizing tasks." }
                        ].map((user, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white p-6 rounded-lg shadow-md mx-4">
                                    <p className="text-gray-600 italic">"{user.review}"</p>
                                    <h4 className="mt-3 text-lg font-semibold">- {user.name}</h4>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </section>
            </div>
        </>
    );
}
