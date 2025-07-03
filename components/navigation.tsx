"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin, Menu, X, Home, Briefcase, Mail, PackageCheck } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Projects", href: "/projects", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
]

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-50 flex items-center justify-between p-4 md:p-6"
      >
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <PackageCheck className="w-5 h-5 text-white" />
              </motion.div>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-800 text-lg">Bunyarak Jankaew</span>
              <span className="text-xs text-gray-500 -mt-1">Blockchain Developer</span>
            </div>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 relative group ${
                  pathname === item.href
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <item.icon className="w-4 h-4" />
                </motion.div>
                <span className="font-medium">{item.name}</span>

                {/* Hover effect for non-active items */}
                {pathname !== item.href && (
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            {[
              { Icon: Github, href: "https://github.com", color: "hover:text-gray-900" },
              { Icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-500" },
              { Icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-600" },
            ].map(({ Icon, href, color }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link
                  href={href}
                  className={`w-10 h-10 rounded-full bg-gray-100 hover:bg-white flex items-center justify-center text-gray-600 ${color} transition-all duration-300 shadow-sm hover:shadow-md`}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-10 h-10 rounded-full bg-gray-100 hover:bg-white shadow-sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200/50 overflow-hidden shadow-lg"
      >
        <div className="p-6 space-y-4">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                x: isMenuOpen ? 0 : -20,
              }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                  pathname === item.href
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                    : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <item.icon className="w-5 h-5" />
                </motion.div>
                <span className="font-medium text-lg">{item.name}</span>
              </Link>
            </motion.div>
          ))}

          <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-200">
            {[
              { Icon: Github, href: "https://github.com", color: "hover:text-gray-900", label: "GitHub" },
              { Icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-500", label: "Twitter" },
              { Icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-600", label: "LinkedIn" },
            ].map(({ Icon, href, color, label }, index) => (
              <motion.div key={index} whileHover={{ scale: 1.2, y: -2 }} whileTap={{ scale: 0.9 }} className="group">
                <Link
                  href={href}
                  className={`w-12 h-12 rounded-full bg-gray-100 hover:bg-white flex items-center justify-center text-gray-600 ${color} transition-all duration-300 shadow-sm hover:shadow-md relative`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />

                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    {label}
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  )
}
