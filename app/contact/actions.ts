"use server";

import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  country: z.string().min(2, "Country is required"),
  subject: z.enum([
    "undergraduate",
    "masters",
    "phd",
    "general",
  ]),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

export async function submitContactForm(data: ContactFormData) {
  try {
    // Validate the data
    const validated = ContactFormSchema.parse(data);

    // TODO: Integrate with email service (e.g., SendGrid, Resend, etc.)
    // For now, we'll just log the submission
    console.log("Contact form submitted:", validated);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      success: true,
      message:
        "Thank you for your inquiry! We'll get back to you within 24 hours.",
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Please check your input and try again.",
        errors: error.flatten().fieldErrors,
      };
    }

    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
}
