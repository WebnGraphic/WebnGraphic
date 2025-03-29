"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Hero Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Elevate Your Brand with{" "}
            <span className="text-[#00b1dc]"> Stunning Designs</span>
          </h1>
          <p className="text-lg text-gray-300">
            High-impact graphic & web design solutions tailored to your
            business. Stand out, engage, and convert effortlessly.
          </p>
          <button className="mt-4 px-6 py-3 bg-[#00b1dc] text-white font-semibold rounded-lg hover:bg-[#0091c4] transition">
            View Portfolio
          </button>
        </motion.div>

        {/* Right Side: Lead Capture Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/3 bg-white p-8 rounded-2xl shadow-lg text-black"
        >
          <h3 className="text-xl font-bold text-center">
            Get a Free Consultation
          </h3>
          <p className="text-gray-600 text-sm text-center mb-4">
            Let’s bring your vision to life!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b1dc]"
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b1dc]"
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="3"
              placeholder="Tell us about your project"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#00b1dc]"
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#00b1dc] text-white font-semibold py-3 rounded-md hover:bg-[#0091c4] transition"
            >
              Get Started
            </button>
          </form>
        </motion.div>
      </div>

      {/* Background Graphic */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <Image
          src="/try.jpg"
          alt="Background Design"
          layout="fill"
          objectFit="cover"
          className="pointer-events-none"
        />
      </div>
    </section>
  );
}
