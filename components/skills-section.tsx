"use client"
import { skills } from "@/lib/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress" // Import Progress component
import { motion } from "framer-motion"

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-white mb-12"
        >
          My Skills
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={skillVariants}>
              <Card className="h-full flex flex-col items-center text-center p-6 bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-gray-700">
                <CardHeader className="pb-4">
                  {skill.icon && <skill.icon className="h-12 w-12 text-purple-400 mb-3" />}
                  <CardTitle className="text-xl font-semibold text-white">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow w-full">
                  <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-1 text-sm text-gray-300">
                      <span>Proficiency</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <Progress
                      value={skill.proficiency}
                      className="w-full h-2 bg-gray-700 [&::-webkit-progress-bar]:bg-gray-700 [&::-webkit-progress-value]:bg-purple-600 dark:[&::-webkit-progress-value]:bg-purple-400"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
