"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ChevronLeft, ChevronRight } from "lucide-react"

function BeforeAfterCard({ before, after, title }: { before: string; after: string; title: string }) {
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const updatePosition = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, pct)))
  }

  return (
    <div className="relative group cursor-pointer">
      <div
        ref={containerRef}
        className="relative h-64 rounded-lg overflow-hidden bg-card border border-border"
        onMouseMove={(e) => dragging && updatePosition(e.clientX)}
        onMouseEnter={(e) => updatePosition(e.clientX)}
        onMouseLeave={() => setDragging(false)}
        onPointerDown={(e) => {
          setDragging(true)
          ;(e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId)
          updatePosition(e.clientX)
        }}
        onPointerUp={() => setDragging(false)}
        onTouchMove={(e) => updatePosition(e.touches[0].clientX)}
      >
        {/* Before Image */}
        <img src={before || "/placeholder.svg"} alt="Before" className="w-full h-full object-cover select-none" />

        {/* After Image Overlay */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img src={after || "/placeholder.svg"} alt="After" className="w-full h-full object-cover select-none" />
        </div>

        {/* Slider Handle */}
        <div className="absolute top-0 bottom-0 w-1 bg-accent cursor-col-resize" style={{ left: `${position}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent rounded-full p-2 shadow-lg">
            <ChevronLeft className="w-4 h-4 text-accent-foreground" />
            <ChevronRight className="w-4 h-4 text-accent-foreground" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-3 py-1 rounded text-sm font-semibold text-foreground">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-background/80 backdrop-blur px-3 py-1 rounded text-sm font-semibold text-foreground">
          After
        </div>
      </div>

      <h4 className="text-center mt-4 font-semibold text-foreground">{title}</h4>
    </div>
  )
}

export default function Gallery() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const beforeAfterPairs = [
    {
      before: "/dirty-car-before.png",
      after: "/shiny-clean-car-after-detailing.jpg",
      title: "Full Exterior Detail",
    },
    {
      before: "/dirty-car-interior-before.jpg",
      after: "/clean-car-interior-after.jpg",
      title: "Interior Deep Clean",
    },
    {
      before: "/oxidized-car-paint-before.jpg",
      after: "/restored-car-paint-after.jpg",
      title: "Paint Correction",
    },
  ]

  const galleryImages = [
    "/luxury-car-detailing-1.jpg",
    "/luxury-car-detailing-2.jpg",
    "/luxury-car-detailing-3.jpg",
    "/luxury-car-detailing-4.jpg",
    "/luxury-car-detailing-5.jpg",
    "/luxury-car-detailing-6.jpg",
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Gallery</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the transformation our detailing services bring to vehicles
          </p>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Before & After</h3>

          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-8">
            {beforeAfterPairs.map((pair, index) => (
              <BeforeAfterCard key={index} before={pair.before} after={pair.after} title={pair.title} />
            ))}
          </motion.div>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Recent Work</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedImage(index)}
                className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              >
                <img src={image || "/placeholder.svg"} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <motion.div initial={{ scale: 0 }} whileHover={{ scale: 1 }} className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">+</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={galleryImages[selectedImage]}
              alt="Enlarged"
              className="max-w-2xl max-h-96 rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
