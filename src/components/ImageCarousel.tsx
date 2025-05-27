
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const images = [
  {
    url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "AI-powered document processing",
    caption: "Advanced document analysis and verification"
  },
  {
    url: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Insurance claim processing",
    caption: "Streamlined claim processing with AI"
  },
  {
    url: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Vehicle damage assessment",
    caption: "Accurate vehicle damage assessment"
  },
  {
    url: "https://images.unsplash.com/photo-1616469829526-7057a1427626?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "Customer experience",
    caption: "Enhanced customer experience"
  },
  {
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=800&q=80",
    alt: "AI technology",
    caption: "Cutting-edge AI technology integration"
  },
];

export function ImageCarousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section id="showcase" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-research-navy mb-4">
            InsureGeini in Action
          </h2>
          <div className="h-1 w-20 bg-research-accent mx-auto mb-6"></div>
          <p className="text-gray-600">
            See how our AI-powered platform transforms vehicle insurance claims processing
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Carousel className="mx-auto max-w-5xl">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden aspect-video">
                        <img 
                          src={image.url} 
                          alt={image.alt} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-research-navy/70 to-transparent flex items-end">
                          <p className="text-white p-4 font-medium">{image.caption}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8">
              <CarouselPrevious className={`relative ${isMobile ? 'left-0' : '-left-4'} mx-2`} />
              <CarouselNext className={`relative ${isMobile ? 'right-0' : '-right-4'} mx-2`} />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
