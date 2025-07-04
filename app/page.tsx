"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  ExternalLink,
  Download,
  Code,
  Palette,
  Boxes,
  Zap,
  Users,
  Award,
  Calendar,
  CheckCircle,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRef, useEffect, useState } from "react"
import { Navigation } from "@/components/navigation"
import { PageBackground } from "@/components/page-background"

const floatingAnimation = {
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 6,
      repeat: Number.POSITIVE_INFINITY,
      ease: "easeInOut",
    },
  },
}

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

const skills = [
  {
    category: "Blockchain",
    icon: Boxes,
    technologies: [
      {
        name: "Solidity",
        level: 55,
    
      },
      {
        name: "Layer 1/2 Protocols",
        level: 50,
    
      },
      {
        name: "Vyper",
        level: 70,
    
      },
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    category: "Frontend",
    icon: Palette,
    technologies: [
      {
        name: "React",
        level: 65,
    
      },
      {
        name: "JavaScript",
        level: 60,
        
      },
      {
        name: "HTML",
        level: 95,
        certifications: [
          {
            name: "Responsive Web Design",
            issuer: "freeCodeCamp",
            date: "2025",
            verified: true,
            credentialId: "RWD-FCC-2020-456",
            link: "https://freecodecamp.org/certification",
          },
        ],
      },
      {
        name: "CSS",
        level: 90,
        certifications: [
          {
            name: "Responsive Web Design",
            issuer: "freeCodeCamp",
            date: "2025",
            verified: true,
            credentialId: "RWD-FCC-2020-456",
            link: "https://freecodecamp.org/certification",
          },
        ],
      },
      {
        name: "Tailwind CSS",
        level: 70,
        
      },
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    category: "Backend",
    icon: Code,
    technologies: [
      {
        name: "Firebase",
        level: 80,
        
      },
      {
        name: "PHP",
        level: 60,
        
      },
      {
        name: "MySQL",
        level: 80,
        certifications: [
          {
            name: "Responsive Web Design",
            issuer: "freeCodeCamp",
            date: "2025",
            verified: true,
            credentialId: "RWD-FCC-2020-456",
            link: "https://freecodecamp.org/certification",
          },
        ],
      },
      {
        name: "Go",
        level: 55,
        
      },
      {
        name: "C",
        level: 70,
        
      },
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Tools & Others",
    icon: Zap,
    technologies: [
      {
        name: "G-Developer",
        level: 75,
        certifications: [
          {
            name: "Responsive Game Development",
            issuer: "Skill Academy",
            date: "2022",
            verified: true,
            credentialId: "",
            link: "",
          },
        ],
      },
      {
        name: "Contruct 2",
        level: 65,
        certifications: [
          {
            name: "Responsive Game Development",
            issuer: "Skill Academy",
            date: "2023",
            verified: true,
            credentialId: "",
            link: "",
          },
        ],
      },
      {
        name: "Photoshop",
        level: 65,
        
      },
    ],
    color: "from-green-500 to-teal-500",
  },
]

const experience = [
  {
    title: "Junior Developer",
    company: "Synapgy",
    period: "2022 - 2024",
    description:
      "Started my journey in web development, working on various projects and learning modern technologies including React, PHP, and database management.",
    achievements: ["Completed 20+ projects", "Learned React & PHP", "Contributed to open source"],
  },
]

// Certification Modal Component
function CertificationModal({
  certifications,
  techName,
  isOpen,
  onClose,
}: {
  certifications: any[]
  techName: string
  isOpen: boolean
  onClose: () => void
}) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-800">{techName} Certifications</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            ✕
          </Button>
        </div>

        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              {/* Fixed: changed <3 to <div */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800 mb-1">{cert.name}</h4>
                  <p className="text-purple-600 font-medium">{cert.issuer}</p>
                </div>
                {cert.verified && (
                  <div className="flex items-center gap-1 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-xs font-medium">Verified</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>Issued: {cert.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>ID: {cert.credentialId}</span>
                </div>
              </div>

              <Button
                size="sm"
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => window.open(cert.link, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View Credential
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

// Skill Level Component
function SkillLevel({
  name,
  level,
  delay = 0,
  color,
  certifications = [],
}: {
  name: string
  level: number
  delay?: number
  color: string
  certifications?: any[]
}) {
  const skillRef = useRef(null)
  const skillInView = useInView(skillRef, { once: true, margin: "-50px" })
  const [showCertifications, setShowCertifications] = useState(false)

  const getSkillColor = (level: number) => {
    if (level >= 85) return "from-green-500 to-emerald-500"
    if (level >= 70) return "from-blue-500 to-cyan-500"
    if (level >= 60) return "from-yellow-500 to-orange-500"
    return "from-red-500 to-pink-500"
  }

  const getSkillLabel = (level: number) => {
    if (level >= 85) return "Expert"
    if (level >= 70) return "Advanced"
    if (level >= 60) return "Intermediate"
    return "Beginner"
  }

  return (
    <>
      <motion.div
        ref={skillRef}
        initial={{ opacity: 0, y: 20 }}
        animate={skillInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay, duration: 0.5 }}
        className="mb-4"
      >
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700">{name}</span>
            {certifications.length > 0 && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowCertifications(true)}
                className="flex items-center gap-1 text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full hover:shadow-md transition-shadow"
              >
                <Award className="w-3 h-3" />
                {certifications.length}
              </motion.button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">{getSkillLabel(level)}</span>
            <span className="text-sm font-semibold text-gray-800">{level}%</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${getSkillColor(level)} rounded-full relative`}
            initial={{ width: "0%" }}
            animate={skillInView ? { width: `${level}%` } : { width: "0%" }}
            transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              animate={{ x: [-100, 200] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: delay + 1.2,
              }}
            />
          </motion.div>
        </div>
      </motion.div>

      <CertificationModal
        certifications={certifications}
        techName={name}
        isOpen={showCertifications}
        onClose={() => setShowCertifications(false)}
      />
    </>
  )
}

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const experienceRef = useRef(null)
  const [isReady, setIsReady] = useState(false)

  const yHero = useTransform(scrollYProgress, [0, 1], [0, -50])
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  const skillsInView = useInView(skillsRef, { once: true, margin: "-100px" })
  const experienceInView = useInView(experienceRef, { once: true, margin: "-100px" })

  useEffect(() => {
    // Ensure animations start after component is fully mounted
    const timer = setTimeout(() => {
      setIsReady(true)
    }, 50) // Small delay to ensure proper mounting

    return () => clearTimeout(timer)
  }, [])

  // Calculate total certifications
  const totalCertifications = skills.reduce((total, skill) => {
    return (
      total +
      skill.technologies.reduce((techTotal, tech) => {
        return techTotal + (tech.certifications?.length || 0)
      }, 0)
    )
  }, 0)

  return (
    <div className="min-h-screen overflow-hidden">
      <PageBackground />
      <Navigation />

      {/* Hero Section */}
      <motion.main ref={heroRef} style={{ y: yHero }} className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Decorative Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
               I'm West
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              {...floatingAnimation}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -right-4 text-pink-400"
            >
              <Sparkles className="w-8 h-8" />
            </motion.div>
            <motion.div
              {...floatingAnimation}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -bottom-2 -left-6"
            >
              <div className="w-4 h-4 bg-blue-400 rounded-full opacity-60"></div>
            </motion.div>
            <motion.div
              {...floatingAnimation}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 5, repeat: Number.POSITIVE_INFINITY }}
              className="absolute top-1/2 -right-8"
            >
              <div className="w-3 h-3 bg-purple-400 rounded-full opacity-40"></div>
            </motion.div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight"
          >
            Blockchain Developer for{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              DApps
            </motion.span>
            <motion.div
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="inline-block ml-2"
            >
              <Sparkles className="w-8 h-8 text-purple-500" />
            </motion.div>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Building secure and decentralized experiences with{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
              smart contracts, blockchain protocols
            </span>
            , and Web3 technologies. Passionate about transparency, clean architecture, and pushing the boundaries of innovation.
          </motion.p>

          {/* Certification Summary */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-full px-4 py-2 mb-8"
          >
            <Award className="w-5 h-5 text-yellow-600" />
            <span className="text-sm font-medium text-gray-700">{totalCertifications} Professional Certifications</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/projects">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  View My Work
                </Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg font-mono text-sm"
            >
              <motion.span
                animate={{ color: ["#10b981", "#3b82f6", "#10b981"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                $
              </motion.span>
              <span>docker run ethereum/solc:stable  --awesome-developer</span>
              <motion.div whileHover={{ rotate: 45 }}>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-1">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-sm">Scroll to learn more</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-2xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </div>
      </motion.main>

      {/* About Section */}
      <motion.section ref={aboutRef} className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate developer with a love for creating beautiful, functional, and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="relative z-10">
                <Image
                  src="https://img2.pic.in.th/pic/Picsart_25-07-03_22-09-54-948.jpg"
                  alt="Bunyarak Jankaew"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl -z-10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={aboutInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-800">Hello, I'm Bunyarak Jankaew</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Over the past three years, I have immersed myself in the coding community through self-directed learning on the internet. I began by building simple websites using HTML and gradually enhanced their visual design with CSS. Through hands-on experimentation and trial-and-error, I discovered JavaScript, which allowed me to add interactivity and dynamic functionality to my websites.
              </p>
              <p>
                To further enhance my development skills, I explored front-end frameworks such as Bootstrap and Tailwind CSS. My interest in building full-featured systems led me to learn PHP, enabling me to create more complete web applications for project work. I later found that traditional approaches became visually limiting and time-consuming, which inspired me to transition to modern tools like React. I also explored deployment using Go, Docker, and studied databases in greater depth.
              </p>
              <p>
                Driven by a passion for innovation, I expanded my skillset beyond web development and began focusing on blockchain technology. I have studied platforms like Ethereum and Hathor, as well as smart contract development and related decentralized technologies. This shift represents my commitment to evolving as a developer and embracing cutting-edge solutions in the tech landscape.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section ref={skillsRef} className="container mx-auto px-4 py-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-4"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-gray-600 mb-12"
        >
          Click on the certification badges to view detailed credentials
        </motion.p>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={skillsInView ? "animate" : "initial"}
          className="grid lg:grid-cols-3 gap-8 mb-12"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white/70 backdrop-blur-sm border-0 hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}
                    >
                      <skill.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-800">{skill.category}</h3>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">
                        {skill.technologies.reduce((total, tech) => total + (tech.certifications?.length || 0), 0)}{" "}
                        Certifications
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {skill.technologies.map((tech, techIndex) => (
                      <SkillLevel
                        key={techIndex}
                        name={tech.name}
                        level={tech.level}
                        delay={index * 0.2 + techIndex * 0.1}
                        color={skill.color}
                        certifications={tech.certifications || []}
                      />
                    ))}
                  </div>

                  {/* Overall Category Level */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={skillsInView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <div className="text-center">
                      <span className="text-sm text-gray-600">Average Proficiency</span>
                      <div className="text-2xl font-bold text-gray-800">
                        {Math.round(
                          skill.technologies.reduce((acc, tech) => acc + tech.level, 0) / skill.technologies.length,
                        )}
                        %
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Overall Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">Skill Level Legend</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mb-2"></div>
                  <span className="text-sm font-medium text-gray-700">Expert</span>
                  <span className="text-xs text-gray-500">85-100%</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-2"></div>
                  <span className="text-sm font-medium text-gray-700">Advanced</span>
                  <span className="text-xs text-gray-500">70-84%</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mb-2"></div>
                  <span className="text-sm font-medium text-gray-700">Intermediate</span>
                  <span className="text-xs text-gray-500">60-69%</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mb-2"></div>
                  <span className="text-sm font-medium text-gray-700">Beginner</span>
                  <span className="text-xs text-gray-500">0-59%</span>
                </div>
              </div>

              {/* Certification Stats */}
              <div className="border-t border-gray-200 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{totalCertifications}</div>
                    <div className="text-sm text-gray-600">Total Certifications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">
                      {skills.reduce((total, skill) => total + skill.technologies.length, 0)}
                    </div>
                    <div className="text-sm text-gray-600">Technologies</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">
                      {Math.round(
                        skills.reduce((total, skill) => {
                          return total + skill.technologies.reduce((techTotal, tech) => techTotal + tech.level, 0)
                        }, 0) / skills.reduce((total, skill) => total + skill.technologies.length, 0),
                      )}
                      %
                    </div>
                    <div className="text-sm text-gray-600">Overall Proficiency</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section ref={experienceRef} className="container mx-auto px-4 py-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12"
        >
          Work Experience
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={experienceInView ? "animate" : "initial"}
          className="space-y-8 mb-16"
        >
          {experience.map((exp, index) => (
            <motion.div key={index} variants={fadeInUp} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              <Card className="bg-white/70 backdrop-blur-sm border-0 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
                      <p className="text-purple-600 font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="w-fit mt-2 md:mt-0">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-800">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={experienceInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to work together?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 rounded-full font-semibold bg-white/70 backdrop-blur-sm border-gray-200 hover:bg-white/90"
                >
                  View My Projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  )
}
