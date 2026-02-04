import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    // Base Layout & Theme
                    "flex min-h-[120px] w-full rounded-xl border border-white/10 bg-[#161b22] px-4 py-3 text-sm text-gray-100 shadow-sm transition-all duration-200",

                    // Placeholder & Typography
                    "placeholder:text-gray-500 focus-visible:outline-none",

                    // Focus States: Green Glow & Border Highlight
                    "focus-visible:border-[#1fdf64] focus-visible:ring-2 focus-visible:ring-[#1fdf64]/20 focus-visible:ring-offset-0",

                    // Disabled State
                    "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-white/5 disabled:border-white/5",

                    // Resize options
                    "resize-y",

                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Textarea.displayName = "Textarea";

export { Textarea };