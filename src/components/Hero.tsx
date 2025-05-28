import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced parallax background with more colors */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay on video */}
        <div
          className="absolute inset-0 bg-black/60  opacity-25"
          style={{ zIndex: 3 }}
        ></div>

        <video
          className="w-full absolute h-full object-cover"
          src="/mobileapp/cover.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ maxHeight: "100vh", zIndex: 2 }}
        />
        {/* other background elements */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-[9999]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-research-navy via-research-blue to-research-accent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Remote Insurance Claiming System
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Our interdisciplinary team is pioneering breakthrough solutions at
            the intersection of technology and scientific discovery.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
