"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const stats = [
    { label: "Cars Detailed", value: "500+" },
    { label: "Happy Clients", value: "450+" },
    { label: "Years Experience", value: "5+" },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src="/professional-car-detailing-work-in-progress.jpg"
                alt="Detailing work in progress"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants} className="space-y-6">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">About BUCK3TS</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                BUCK3TS Mobile Detailing was founded with a simple mission: to bring premium auto detailing services
                directly to your doorstep. We believe that every vehicle deserves professional care and attention to
                detail.
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="text-muted-foreground text-lg leading-relaxed">
              Our team of certified detailing professionals uses only the highest quality products and techniques to
              ensure your vehicle looks showroom-ready. From ceramic coatings to paint correction, we handle every
              detail with precision and care.
            </motion.p>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-background rounded-lg border border-border">
                  <div className="text-3xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
