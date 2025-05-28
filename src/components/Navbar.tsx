import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface NavbarProps {
  className?: string;
}

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Team", href: "#team" },
  { name: "Review", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Navbar({ className }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 z-50 w-full transition-all  duration-300",
        isScrolled ? "bg-white backdrop-blur-md shadow-sm" : " bg-transparent",
        className
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-research-navy to-research-blue">
            InsureGeini
          </span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <Button
                variant="ghost"
                className="text-sm font-medium transition-colors hover:text-research-accent"
                onClick={() => scrollToSection(item.href)}
              >
                {item.name}
              </Button>
            </motion.div>
          ))}
        </nav>

        <div className="md:hidden">
          {/* Mobile menu can be added here if needed */}
          <Button variant="ghost" size="icon">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
