"use client"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <Image
              src="/images/aniruddha-yeole.jpeg" // Updated image path
              alt="Aniruddha Yeole" // Updated alt text
              width={300}
              height={300}
              className="rounded-full object-cover shadow-lg border-4 border-purple-200 dark:border-purple-700"
            />
          </motion.div>
          <div className="flex-grow text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
            >
              Hello! I'm Aniruddha Yeole, a passionate Frontend Developer with a knack for creating intuitive and
              visually appealing web applications. My journey into web development began with a fascination for how
              interactive experiences are built, leading me to dive deep into HTML, CSS, and JavaScript.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
            >
              I specialize in React, leveraging frameworks like Tailwind CSS to build modern, responsive, and performant
              user interfaces. I love solving complex problems and am always eager to learn new technologies to enhance
              my skillset.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800 shadow-md">
                <CardHeader>
                  <CardTitle className="text-purple-800 dark:text-purple-200">Fun Facts About Me</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-700 dark:text-gray-300">
                  <ul className="list-disc list-inside space-y-2">
                    <li>I'm a big fan of open-source projects and contribute whenever I can.</li>
                    <li>My favorite part of frontend development is seeing a design come to life in the browser.</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
