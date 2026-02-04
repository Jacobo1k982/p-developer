import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

function Input({ className, type, ...props }: InputProps) {
    return (
        <input
            type={type}
            className={cn(
                // Base Layout & Theme
                "flex h-10 w-full rounded-xl border border-white/10 bg-[#161b22] px-4 py-2 text-sm text-gray-100 shadow-sm transition-all duration-200",

                // Placeholder & Typography
                "placeholder:text-gray-500 focus-visible:outline-none",

                // Focus States: Green Glow & Border Highlight
                "focus-visible:border-[#1fdf64] focus-visible:ring-2 focus-visible:ring-[#1fdf64]/20 focus-visible:ring-offset-0",

                // Disabled State
                "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-white/5 disabled:border-white/5",

                // File Input Styling (Browser consistency)
                "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-gray-300",

                className
            )}
            {...props}
        />
    );
}

export { Input };