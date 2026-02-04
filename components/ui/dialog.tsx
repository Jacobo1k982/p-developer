"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface DialogProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children: React.ReactNode;
}

const Dialog = ({ open = false, onOpenChange, children }: DialogProps) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Fondo oscuro desenfocado (Overlay) */}
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={() => onOpenChange?.(false)}
                aria-hidden="true"
            />

            {/* Contenedor del Diálogo */}
            <div className="relative z-50 w-full max-w-lg animate-in fade-in zoom-in-95 duration-200">
                {children}
            </div>
        </div>
    );
};

const DialogContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & {
        showClose?: boolean;
        onClose?: () => void;
    }
>(({ className, children, showClose = true, onClose, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            // Estilo Base: Fondo oscuro, Borde sutil, Desenfoque
            "relative rounded-2xl border border-white/10 bg-[#161b22]/95 text-gray-100 p-6 shadow-2xl backdrop-blur-xl",
            className
        )}
        {...props}
    >
        {/* Botón de Cerrar Mejorado */}
        {showClose && (
            <button
                onClick={onClose}
                className="
          absolute right-4 top-4 flex h-8 w-8 items-center justify-center 
          rounded-full text-gray-400 
          transition-all duration-200 
          hover:bg-white/10 hover:text-white hover:rotate-90 
          focus:outline-none focus:ring-2 focus:ring-[#1fdf64] focus:ring-offset-2 focus:ring-offset-[#161b22]
        "
            >
                <X className="h-4 w-4" strokeWidth={2.5} />
                <span className="sr-only">Cerrar</span>
            </button>
        )}

        {/* Contenido con padding derecho para no chocar con el botón de cerrar */}
        <div className="pr-6">{children}</div>
    </div>
));
DialogContent.displayName = "DialogContent";

const DialogHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex flex-col space-y-1.5 text-center sm:text-left mb-4",
            className
        )}
        {...props}
    />
));
DialogHeader.displayName = "DialogHeader";

const DialogFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-6",
            className
        )}
        {...props}
    />
));
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn(
            "text-lg font-bold leading-none tracking-tight text-white",
            className
        )}
        {...props}
    />
));
DialogTitle.displayName = "DialogTitle";

const DialogDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn(
            "text-sm text-gray-400 leading-relaxed font-light",
            className
        )}
        {...props}
    />
));
DialogDescription.displayName = "DialogDescription";

export {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
};