"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { X, Building2, Mail, Briefcase, MessageSquare, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Form validation schema
const partnerFormSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  industry: z.enum(["Construction", "Transport", "Tech"], {
    message: "Please select a valid industry",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type PartnerFormData = z.infer<typeof partnerFormSchema>;

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PartnerModal({ isOpen, onClose }: PartnerModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<PartnerFormData>({
    resolver: zodResolver(partnerFormSchema),
  });

  const onSubmit = async (data: PartnerFormData) => {
    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit partnership request");
      }

      // Success
      toast.success("Partnership request submitted!", {
        description: "We'll review your application and get back to you soon.",
      });
      
      reset();
      onClose();
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to submit request", {
        description: error instanceof Error ? error.message : "Please try again later.",
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-background border border-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
              {/* Header */}
              <div className="sticky top-0 bg-background/95 backdrop-blur-lg border-b border-gray-800 p-6 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-poppins">
                    Partner With Us
                  </h2>
                  <p className="text-gray-400 mt-1">
                    Let&apos;s build something amazing together
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-surface/50 border border-gray-800 flex items-center justify-center hover:bg-surface hover:border-primary/50 transition-all duration-300"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="flex items-center text-white font-medium mb-2">
                    <Building2 className="w-4 h-4 mr-2 text-primary" />
                    Company Name *
                  </label>
                  <Input
                    id="companyName"
                    type="text"
                    placeholder="Your Company Ltd."
                    className={errors.companyName ? "border-red-500" : ""}
                    {...register("companyName")}
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="flex items-center text-white font-medium mb-2">
                    <Mail className="w-4 h-4 mr-2 text-primary" />
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="contact@yourcompany.com"
                    className={errors.email ? "border-red-500" : ""}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Industry */}
                <div>
                  <label htmlFor="industry" className="flex items-center text-white font-medium mb-2">
                    <Briefcase className="w-4 h-4 mr-2 text-primary" />
                    Industry *
                  </label>
                  <select
                    id="industry"
                    className={`w-full px-4 py-3 bg-surface border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 ${
                      errors.industry ? "border-red-500" : "border-gray-700"
                    }`}
                    {...register("industry")}
                  >
                    <option value="">Select an industry</option>
                    <option value="Construction">Construction</option>
                    <option value="Transport">Transport & Logistics</option>
                    <option value="Tech">Technology</option>
                  </select>
                  {errors.industry && (
                    <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="flex items-center text-white font-medium mb-2">
                    <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                    Tell Us About Your Partnership Idea *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Describe how you'd like to partner with Santums Build..."
                    rows={5}
                    className={errors.message ? "border-red-500" : ""}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>

                <p className="text-gray-500 text-sm text-center">
                  * Required fields
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
