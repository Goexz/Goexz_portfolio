"use client"

import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
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

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio website with modern design and smooth animations.",
    longDescription:
      "A modern portfolio website showcasing projects and skills with beautiful animations and responsive design.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "https://th.bing.com/th/id/R.9c14aac36866ebb75d03cea2475c4ba7?rik=pCVdtuxP4Kq9PA&pid=ImgRaw&r=0",
    github: "https://github.com/Goexz/Goexz_portfolio",
    featured: true,
  },
  {
    title: "Blog Platform",
    description: "Full-featured blog platform with CMS capabilities and SEO optimization.",
    longDescription:
      "A complete blog platform with content management system, SEO optimization, and social sharing features.",
    tech: ["Go", "Docker", "Html", "CSS", "JavaScript"],
    image: "https://th.bing.com/th/id/R.9c14aac36866ebb75d03cea2475c4ba7?rik=pCVdtuxP4Kq9PA&pid=ImgRaw&r=0",
    github: "https://github.com/Goexz/Ngl-uuid-go",
    featured: false,
  },
]

export default function Projects() {
  const projectsRef = useRef(null)
  const projectsInView = useInView(projectsRef, { once: true, margin: "-100px" })

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

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
            My{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.section ref={projectsRef} className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-800 mb-8"
          >
            Featured Projects
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={projectsInView ? "animate" : "initial"}
            className="grid lg:grid-cols-2 gap-8"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.4 }}>
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={500}
                          height={300}
                          className="w-full h-64 object-cover"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ delay: 0.1 }}
                          className="text-white text-sm font-medium"
                        >
                          View Project Details
                        </motion.div>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-xl text-gray-800 mb-3">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.longDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <motion.div key={techIndex} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                            <Badge variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                          <Button size="sm" variant="outline" className="w-full bg-transparent">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                          <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Other Projects */}
        <motion.section>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl font-bold text-gray-800 mb-8"
          >
            Other Projects
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={projectsInView ? "animate" : "initial"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm border-0 overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.tech.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.tech.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.tech.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                          <Button size="sm" variant="outline" className="w-full bg-transparent text-xs">
                            <Github className="w-3 h-3 mr-1" />
                            Code
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                          <Button
                            size="sm"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Demo
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-16 py-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Interested in working together?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold"
              >
                Get In Touch
              </Button>
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}
