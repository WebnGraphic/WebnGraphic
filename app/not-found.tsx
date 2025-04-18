"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, Palette } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-md w-full mx-auto">
        <div className="relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-75 blur"></div>
          <div className="relative bg-white dark:bg-gray-950 p-6 rounded-lg shadow-xl">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative w-40 h-40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Palette className="h-20 w-20 text-gray-200 dark:text-gray-800" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeDasharray="60, 300"
                      className="text-purple-600 animate-[spin_3s_linear_infinite]"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeDasharray="60, 300"
                      className="text-pink-600 animate-[spin_2s_linear_infinite_reverse]"
                    />
                  </svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-5xl font-bold">404</span>
                </div>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl font-extrabold tracking-tight">
                  Page Not Found
                </h1>
                <p className="text-gray-500 dark:text-gray-400">
                  Oops! It seems the page you&apos;re looking for has been moved
                  or doesn&apos;t exist.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button asChild className="flex-1">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="flex-1"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
