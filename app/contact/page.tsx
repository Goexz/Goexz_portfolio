"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, Phone, MapPin, Send, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import { useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { PageBackground } from "@/components/page-background"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "byby555999@gmail.com",
    href: "mailto:byby555999@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+66 (0) 988514758",
    href: "tel:+660988514758",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Prachuap Khiri Khan, Thailand",
    href: "#",
    color: "from-green-500 to-teal-500",
  },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/goexz", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
]

export default function Contact() {
  const contactRef = useRef(null)
  const formRef = useRef(null)

  const contactInView = useInView(contactRef, { once: true, margin: "-100px" })
  const formInView = useInView(formRef, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // You would typically send the form data to your backend here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen">
      <PageBackground />
      <Navigation />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work
            together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div ref={contactRef} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Let's start a conversation</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I'm always interested in new opportunities, whether that's a full-time position, freelance project, or
                just a chat about technology and development. Don't hesitate to reach out!
              </p>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate={contactInView ? "animate" : "initial"}
              className="space-y-4"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={info.href} className="block">
                    <Card className="bg-white/70 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-4 flex items-center gap-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <info.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{info.title}</h3>
                          <p className="text-gray-600">{info.value}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={contactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="pt-8"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow me on</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.2, rotate: 10 }} whileTap={{ scale: 0.9 }}>
                    <Link
                      href={social.href}
                      className="w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-500 hover:to-purple-600 rounded-full flex items-center justify-center transition-all duration-300 group"
                    >
                      <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div ref={formRef}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={formInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.1, duration: 0.6 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white/50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        placeholder="Your full name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2, duration: 0.6 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white/50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="bg-white/50 border-gray-200 focus:border-purple-500 focus:ring-purple-500"
                        placeholder="What's this about?"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="bg-white/50 border-gray-200 focus:border-purple-500 focus:ring-purple-500 resize-none"
                        placeholder="Tell me about your project or idea..."
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={formInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                          ) : (
                            <Send className="w-5 h-5 mr-2" />
                          )}
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-16 py-12"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Response Guaranteed</h2>
            <p className="text-gray-600 leading-relaxed">
              I typically respond to all inquiries within 24 hours. Whether you're looking to start a new project, need
              help with an existing one, or just want to say hello, I'd love to hear from you. Let's create something
              amazing together!
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
