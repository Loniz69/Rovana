"use client";

export function ComingSoonLink({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      onClick={(e) => {
        e.preventDefault();
        alert("This will open a new page in the future.");
      }}
    >
      {children}
    </a>
  );
}
