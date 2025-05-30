import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Team } from "@/components/Team";
import { About } from "@/components/About";
import { ProductUsers } from "@/components/ProductUsers";
import { Benefits } from "@/components/Benefits";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { MarqueeSection } from "@/components/MarqueeSection";
import { ProjectScope } from "@/components/ProjectScope";
import { KeyTechnologies } from "@/components/KeyTechnologies";
import { ResearchGap } from "@/components/ResearchGap";
import { ProposedSolution } from "@/components/ProposedSolution";
import { ResearchObjectives } from "@/components/ResearchObjectives";
import { Methodology } from "@/components/Methodology";
import { Timeline } from "@/components/Timeline";
import { Documents } from "@/components/Documents";
import { ContactForm } from "@/components/ContactForm";
import { MainComponents } from "@/components/MainComponents";

const Index = () => {
  const { scrollYProgress } = useScroll();

  // Create parallax effect for the second section
  const teamOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const teamY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  useEffect(() => {
    // Update the page title
    document.title = "InsureGeini - AI-Powered Vehicle Insurance Claims";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      <MainComponents />

      {/* Project Scope Section */}
      <ProjectScope />

      {/* About Section */}
      <About />

      {/* Key Technologies Section */}
      <KeyTechnologies />

      {/* Research Gap Section */}
      <ResearchGap />

      {/* Proposed Solution Section */}
      <ProposedSolution />

      {/* Research Objectives Section */}
      <ResearchObjectives />

      {/* Methodology Section */}
      <Methodology />

      {/* Timeline Section */}
      <Timeline />

      {/* Product Users Section */}
      <ProductUsers />

      {/* Benefits Section */}
      <Benefits />

      {/* Features Section */}
      <Features />

      {/* Image Carousel */}
      {/*  <ImageCarousel /> */}

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Documents Section */}
      <Documents />

      {/* Team Section with Parallax */}
      <motion.div
        style={{
          opacity: teamOpacity,
          y: teamY,
        }}
      >
        <Team />
      </motion.div>

      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
