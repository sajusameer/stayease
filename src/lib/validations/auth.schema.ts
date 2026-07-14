// import { z } from "zod";

// export const registerSchema = z
//   .object({
//     name: z.string().min(3, "Name must be at least 3 characters"),

//     email: z.email("Invalid email address"),

//     password: z
//       .string()
//       .min(8, "Password must be at least 8 characters"),

//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     path: ["confirmPassword"],
//     message: "Passwords do not match",
//   });

// export type RegisterFormData = z.infer<typeof registerSchema>;


// export const loginSchema = z.object({
//   email: z.email("Invalid email address"),

//   password: z
//     .string()
//     .min(8, "Password must be at least 8 characters"),
// });

// export type LoginFormData = z.infer<typeof loginSchema>; 
import { z } from "zod";

// ==========================================
// 1. Register Schema
// ==========================================
export const registerSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),

    // ✅ z.email() এর পরিবর্তে z.string().email() ব্যবহার করা হয়েছে
    email: z.string().email("Invalid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export type RegisterFormData = z.infer<typeof registerSchema>;


// ==========================================
// 2. Login Schema
// ==========================================
export const loginSchema = z.object({
  // ✅ z.email() এর পরিবর্তে z.string().email() ব্যবহার করা হয়েছে
  email: z.string().email("Invalid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters"),
});

export type LoginFormData = z.infer<typeof loginSchema>;