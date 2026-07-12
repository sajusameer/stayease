"use client";

import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff, Hotel } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginSchema,
  type LoginFormData,
} from "@/lib/validations/auth.schema";

import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });


  const onSubmit = async (data: LoginFormData) => {
    try {
      const result = await signIn.email({
        email: data.email,
        password: data.password,
      });

      if (result.error) {
        console.log(result.error.message);
        return;
      }
        toast.success("Login successful!");
      router.push("/");

    } catch (error) {
      console.log(error);
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

          <h1 className="text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-500">
            Login to your StayEase account
          </p>

        </div>


        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >

          {/* Email */}
          <div>

            <input
              {...register("email")}
              type="email"
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
                onClick={() => setShowPassword(!showPassword)}
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


          <button
            disabled={isSubmitting}
            className="btn w-full rounded-xl border-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
          >

            {isSubmitting ? "Logging in..." : "Login"}

          </button>


          {/* Demo Login */}
          <button
            type="button"
            className="btn btn-outline w-full rounded-xl"
          >
            Demo Login
          </button>


        </form>


        <p className="mt-6 text-center text-sm text-slate-600">

          Don't have an account?{" "}

          <Link
            href="/register"
            className="font-semibold text-blue-600"
          >
            Register
          </Link>

        </p>


      </div>

    </div>
  );
}