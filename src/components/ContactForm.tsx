import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your EmailJS values
    const serviceID = "service_byf1g03";
    const templateID = "template_kxh3jhj";
    const publicKey = "VWZzBFlwsGJ2ktiLP";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      () => {
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      },
      (error) => {
        console.error(error);
        setIsSubmitting(false);
      }
    );
  };

  return (
    <section className="py-16  bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-research-navy mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-research-gray">Get in Touch</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-research-navy font-medium"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-research-gray/30 focus:border-research-blue"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-research-navy font-medium"
                  >
                    Email address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="border-research-gray/30 focus:border-research-blue"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className="text-research-navy font-medium"
                >
                  Message or Query
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="border-research-gray/30 focus:border-research-blue resize-none"
                  placeholder="Please describe your message or query in detail..."
                />
              </div>

              <div className="flex justify-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-research-blue hover:bg-research-blue/90 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
