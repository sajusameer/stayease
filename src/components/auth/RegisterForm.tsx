"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Hotel } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  registerSchema,
  type RegisterFormData,
} from "@/lib/validations/auth.schema";

import { signUp } from "@/lib/auth-client";

export default function RegisterForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const result = await signUp.email({
        name: data.name,
        email: data.email,
        password: data.password,
      });

   if (result.error) {
        toast.error(result.error.message);
        return;
      }

      toast.success("Account created successfully!");
      router.push("/login");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-50 via-white to-cyan-50 px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">

        <div className="mb-8 flex flex-col items-center">
          <div className="mb-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white">
            <Hotel size={30} />
          </div>

          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="mt-2 text-slate-500">
            Join StayEase today
          </p>
        </div>


        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          {/* Name */}
          <div>
            <input
              {...register("name")}
              placeholder="Full Name"
              className="input input-bordered w-full rounded-xl"
            />

            {errors.name && (
              <p className="mt-1 text-sm text-red-500">
                {errors.name.message}
              </p>
            )}
          </div>


          {/* Email */}
          <div>
            <input
              {...register("email")}
              placeholder="Email"
              className="input input-bordered w-full rounded-xl"
            />

            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>


          {/* Password */}
          <div>
            <div className="relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input input-bordered w-full rounded-xl pr-12"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>


          {/* Confirm Password */}
          <div>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered w-full rounded-xl"
            />

            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>


          <button
            disabled={isSubmitting}
            className="btn w-full rounded-xl border-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
          >
            {isSubmitting ? "Creating..." : "Create Account"}
          </button>

        </form>


        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-semibold text-blue-600"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}