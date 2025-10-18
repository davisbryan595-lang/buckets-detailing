"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Check } from "lucide-react"

export default function Pricing() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const plans = [
    {
      name: "Basic",
      price: "$99",
      description: "Perfect for regular maintenance",
      features: ["Exterior wash & wax", "Interior vacuum", "Window cleaning", "Tire shine"],
      popular: false,
    },
    {
      name: "Deluxe",
      price: "$199",
      description: "Most popular choice",
      features: [
        "Everything in Basic",
        "Paint correction",
        "Interior deep clean",
        "Leather conditioning",
        "Engine bay cleaning",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "$349",
      description: "Ultimate protection",
      features: [
        "Everything in Deluxe",
        "Ceramic coating",
        "Paint protection film",
        "Headlight restoration",
        "Lifetime warranty",
      ],
      popular: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="pricing" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Pricing Plans</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Transparent pricing with no hidden fees</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-lg border transition-all duration-300 ${
                plan.popular
                  ? "bg-background border-accent shadow-lg shadow-accent/20 md:scale-105"
                  : "bg-background border-border hover:border-accent"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-accent">{plan.price}</span>
                <span className="text-muted-foreground ml-2">per service</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all duration-200 ${
                  plan.popular
                    ? "bg-accent text-accent-foreground hover:shadow-lg hover:shadow-accent/50"
                    : "border-2 border-accent text-accent hover:bg-accent/10"
                }`}
              >
                Book Now
              </motion.button>

              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
