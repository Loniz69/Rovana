"use client";

import { cn } from "@/lib/utils";

const VARIANTS = {
  solid: "bg-black text-white border border-black hover:bg-white hover:text-black",
  outline: "bg-transparent text-white border border-white hover:bg-white hover:text-black",
  pink: "bg-pink text-white border border-pink hover:opacity-90",
};

export function Button({
  variant = "solid",
  className,
  children,
  comingSoon,
  onClick,
  ...props
}: {
  variant?: keyof typeof VARIANTS;
  className?: string;
  children: React.ReactNode;
  comingSoon?: boolean;
} & React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 text-sm font-medium uppercase tracking-[0.1em] transition-colors duration-200",
        VARIANTS[variant],
        className
      )}
      onClick={
        comingSoon
          ? (e) => {
              e.preventDefault();
              alert("This will open a new page in the future.");
            }
          : onClick
      }
      {...props}
    >
      {children}
    </a>
  );
}
