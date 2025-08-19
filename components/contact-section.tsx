"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, MessageCircle } from "lucide-react" // Changed imports: removed Linkedin, Twitter; added MessageCircle
import { motion } from "framer-motion"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const whatsappNumber = "919529212021" // Replace with your WhatsApp number, including country code without '+'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, message } = formData
    const prefilledMessage = `Hello Aniruddha,\n\nName: ${name}\nEmail: ${email}\n\nMessage: ${message}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(prefilledMessage)}`

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank")

    alert("Opening WhatsApp chat with your message. Please send it from WhatsApp to complete.")
    setFormData({ name: "", email: "", message: "" }) // Clear the form
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="mt-1 block w-full bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg rounded-md transition-colors duration-300"
              >
                Send Message via WhatsApp
              </Button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Connect with me</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Feel free to reach out for collaborations, project inquiries, or just to say hello!
            </p>
            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/Ani1801" // Updated GitHub link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              >
                <Github className="h-10 w-10" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`} // WhatsApp link
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
              >
                <MessageCircle className="h-10 w-10" />
                <span className="sr-only">WhatsApp</span>
              </a>
              {/* LinkedIn and Twitter icons removed */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
