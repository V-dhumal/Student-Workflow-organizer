/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Link from "next/link";
import React from "react";

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
                        {["Sign Up", "Create Tasks", "Stay Organized"].map((step, index) => (
                            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                                <h4 className="text-xl font-semibold">{index + 1}. {step}</h4>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
