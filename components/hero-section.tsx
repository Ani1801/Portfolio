"use client"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight"
        >
          Hi, I'm <span className="text-purple-400">Aniruddha Yeole</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-xl sm:text-2xl text-gray-300"
        >
          Frontend Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-2 text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Crafting beautiful and functional web experiences with a passion for clean code and innovative design.
        </motion.p>
        {/* The download resume button has been removed */}
      </div>
    </section>
  )
}
