"use client"
import { experience } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const timelineItemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Experience
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-200 dark:bg-purple-700 rounded-full hidden md:block"></div>
          {experience.map((item, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex items-center w-full ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
              variants={timelineItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="hidden md:block w-1/2"></div> {/* Spacer for timeline line */}
              <div className="z-10 flex items-center justify-center w-10 h-10 bg-purple-600 dark:bg-purple-400 rounded-full shrink-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                {item.icon && <item.icon className="h-6 w-6 text-white" />}
              </div>
              <Card
                className={`w-full md:w-[calc(50%-20px)] p-6 shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</CardTitle>
                  <p className="text-lg text-purple-600 dark:text-purple-400">{item.company}</p>
                </CardHeader>
                <CardContent className="text-gray-700 dark:text-gray-300">
                  <div className="flex items-center text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span>{item.duration}</span>
                  </div>
                  <div className="flex items-center text-sm mb-4">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500 dark:text-gray-400" />
                    <span>{item.location}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    {Array.isArray(item.description) ? (
                      item.description.map((desc, descIndex) => <li key={descIndex}>{desc}</li>)
                    ) : (
                      <li>{item.description}</li>
                    )}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
