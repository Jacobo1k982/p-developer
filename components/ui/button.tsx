import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1fdf64] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117]",
    {
        variants: {
            variant: {
                // Primario: Verde de marca con Glow
                default:
                    "bg-[#1fdf64] text-[#0d1117] hover:bg-[#1fdf64]/90 hover:shadow-[0_0_20px_rgba(29,223,100,0.3)] hover:-translate-y-0.5",

                // Destrucción: Rojo tenue con efecto hover suave
                destructive:
                    "bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)] hover:text-red-300",

                // Borde: Estilo Glass con borde que brilla en verde
                outline:
                    "border border-white/10 bg-transparent text-gray-300 hover:border-[#1fdf64]/50 hover:text-[#1fdf64] hover:bg-[#1fdf64]/5",

                // Secundario: Fondo gris oscuro sólido
                secondary:
                    "bg-[#161b22] text-gray-300 hover:bg-gray-800 hover:text-white border border-white/5",

                // Fantasma: Solo efecto de fondo
                ghost:
                    "text-gray-400 hover:bg-white/5 hover:text-white",

                // Link: Subrayado animado
                link: "text-gray-400 underline-offset-4 hover:text-[#1fdf64] hover:underline decoration-[#1fdf64]/50",
            },
            size: {
                default: "h-10 px-6 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-12 rounded-xl px-8 text-base font-semibold tracking-wide",
                icon: "h-9 w-9 rounded-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

function Button({ className, variant, size, ...props }: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };