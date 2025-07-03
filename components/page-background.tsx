"use client"

import { motion, useScroll, useTransform } from "framer-motion"

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

export function PageBackground() {
  const { scrollYProgress } = useScroll()
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-cyan-100 via-blue-50 to-pink-100 -z-10">
      <motion.div style={{ y: yBackground }} className="absolute inset-0 pointer-events-none">
        <motion.div
          {...floatingAnimation}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          {...floatingAnimation}
          transition={{ delay: 2, duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          {...floatingAnimation}
          transition={{ delay: 4, duration: 10, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"
        />
      </motion.div>
    </div>
  )
}
