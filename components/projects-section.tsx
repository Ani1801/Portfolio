"use client"
import Image from "next/image"
import { projects } from "@/lib/data"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

const projectCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          My Projects
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8" // Changed lg:grid-cols-3 to lg:grid-cols-2
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={projectCardVariants}>
              <Card className="h-full flex flex-col bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 group border border-gray-200 dark:border-gray-700">
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    layout="fill"
                    objectFit="contain"
                    className="transition-transform duration-500 group-hover:scale-105 p-2"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    {project.name}
                    {project.status && (
                      <span className="text-sm font-medium px-2 py-1 rounded-full bg-purple-600 text-white dark:bg-purple-400 dark:text-gray-900">
                        {project.status}
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-gray-700 dark:text-gray-300">
                  <p className="mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-3 pt-4">
                  {project.liveLink && (
                    <Button
                      asChild
                      variant="outline"
                      className="text-purple-600 dark:text-purple-400 border-purple-600 dark:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900 bg-transparent"
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
