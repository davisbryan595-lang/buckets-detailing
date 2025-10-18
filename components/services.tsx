"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Droplet, Sparkles, Wrench, Shield, Wind, Zap } from "lucide-react"

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Wind,
      title: "Interior Detailing",
      description: "Deep cleaning of seats, carpets, and interior surfaces",
    },
    {
      icon: Sparkles,
      title: "Exterior Detailing",
      description: "Professional wash, wax, and polish for a mirror finish",
    },
    {
      icon: Droplet,
      title: "Full Detailing",
      description: "Complete interior and exterior detailing package",
    },
    {
      icon: Shield,
      title: "Ceramic Coating",
      description: "Long-lasting protective coating for ultimate shine",
    },
    {
      icon: Wrench,
      title: "Paint Correction",
      description: "Remove swirls, scratches, and oxidation",
    },
    {
      icon: Zap,
      title: "Premium Package",
      description: "All services combined for maximum protection",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="services" className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive detailing solutions tailored to your vehicle's needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(94, 165, 255, 0.2)" }}
                className="group relative p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 blur"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-accent" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-accent font-semibold text-sm hover:text-accent/80 transition-colors"
                  >
                    Book Now →
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
