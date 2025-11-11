import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

// Use Node.js runtime for Nodemailer compatibility
// Cloudflare Pages supports Node.js runtime for API routes
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Validation schema
const partnerSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  industry: z.enum(["Construction", "Transport", "Tech"], {
    message: "Please select a valid industry",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 2; // 2 requests per minute for partner submissions

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || 
               request.headers.get("x-real-ip") || 
               "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = partnerSchema.parse(body);

    // Sanitize inputs
    const sanitizedData = {
      companyName: sanitizeInput(validatedData.companyName),
      email: sanitizeInput(validatedData.email),
      industry: validatedData.industry,
      message: sanitizeInput(validatedData.message),
    };

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || "smtp.gmail.com",
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "contact@santums.com",
      subject: `New Partnership Request from ${sanitizedData.companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF6B00;">New Partnership Request</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Company Name:</strong> ${sanitizedData.companyName}</p>
            <p><strong>Email:</strong> ${sanitizedData.email}</p>
            <p><strong>Industry:</strong> ${sanitizedData.industry}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
          </div>
          <p style="color: #666; font-size: 12px;">
            This email was sent from the Santums Build partner sign-up form.
          </p>
        </div>
      `,
      text: `
        New Partnership Request
        
        Company Name: ${sanitizedData.companyName}
        Email: ${sanitizedData.email}
        Industry: ${sanitizedData.industry}
        Message: ${sanitizedData.message}
      `,
    });

    return NextResponse.json(
      { message: "Partnership request submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Partner form error:", error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Validation error", details: error.issues },
        { status: 400 }
      );
    }

    // Handle email sending errors
    return NextResponse.json(
      { error: "Failed to submit partnership request. Please try again later." },
      { status: 500 }
    );
  }
}
