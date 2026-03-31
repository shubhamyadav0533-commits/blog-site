import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { createWebsiteLead } from "../utils/leadsApi";

interface RequestDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RequestDemoModal({ isOpen, onClose }: RequestDemoModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setSubmitError("");
      setSubmitMessage("");
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // ✅ Validation
  const validate = () => {
    const newErrors: Record<string, string> = {};

   if (formData.fullName.trim().length < 2) {
  newErrors.fullName = "Minimum 2 characters required";
}
     else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = "Only letters allowed";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter 10 digit number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length > 500) {
      newErrors.message = "Max 500 characters allowed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitError("");
    setSubmitMessage("");
    setIsSubmitting(true);

    try {
      await createWebsiteLead({
        fullName: formData.fullName.trim(),
        email: formData.email.trim(),
        mobile: formData.phoneNumber.trim(),
        message: formData.message.trim(),
      });

      setSubmitMessage("Request submitted successfully.");
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: "",
      });

      setTimeout(() => {
        onClose();
      }, 1000);
    } catch {
      setSubmitError("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ✅ Change handler (with restrictions)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    let updatedValue = value;

    if (name === "fullName") {
      updatedValue = value.replace(/[^A-Za-z\s]/g, "");
    }

    if (name === "phoneNumber") {
      updatedValue = value.replace(/\D/g, "").slice(0, 10);
    }

    setFormData((prev) => ({ ...prev, [name]: updatedValue }));

    // remove error while typing
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-purple-600 via-pink-500 to-pink-400" />
        
        {/* Header */}
        <div className="px-6 py-6 sm:px-10 sm:pt-10 sm:pb-6 flex justify-between items-center border-b border-gray-50">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Schedule Demo
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2.5 rounded-full hover:bg-gray-100 transition-all text-gray-400 hover:text-gray-600 group"
          >
            <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-6 sm:px-10 sm:py-8 space-y-6">
          {submitMessage && (
            <p className="text-green-600 text-sm font-medium">{submitMessage}</p>
          )}
          {submitError && (
            <p className="text-red-500 text-sm font-medium">{submitError}</p>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Full Name <span className="text-pink-500 font-bold">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 outline-none"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-100 focus:border-purple-500 outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs">{errors.phoneNumber}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 ml-1">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl"
            />
            <span className="text-xs text-gray-400">
              ({formData.message.length}/500)
            </span>
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-[2] bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-2xl font-bold disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </button>
            <button type="button" onClick={onClose} className="flex-1 px-8 py-4 rounded-2xl font-bold text-gray-600 bg-gray-100">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}