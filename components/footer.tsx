"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <a href="#home" aria-label="BUCK3TS Home" className="inline-block mb-2">
              <div className="rounded-lg animate-float hover:animate-glow inline-block">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5c758e804cba4fa3a488e9088887877b%2F2702803553474174889b867138816310?format=webp&width=240"
                  alt="BUCK3TS Mobile Detailing Logo"
                  className="h-12 w-auto drop-shadow-[0_0_12px_rgba(94,165,255,0.45)]"
                />
              </div>
            </a>
            <p className="text-muted-foreground">Premium mobile auto detailing in Des Moines Metro</p>
          </motion.div>

          {/* Links */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 underline-offset-2 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="tel:+16416806890" className="hover:text-accent transition-colors">
                  (641) 680-6890
                </a>
              </li>
              <li>
                <a href="mailto:info@buck3ts.com" className="hover:text-accent transition-colors">
                  info@buck3ts.com
                </a>
              </li>
              <li>Des Moines Metro & Surrounding Areas</li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center text-muted-foreground text-sm"
          >
            © {currentYear} BUCK3TS Mobile Detailing. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
