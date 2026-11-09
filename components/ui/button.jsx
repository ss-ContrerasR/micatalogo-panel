import { cn } from "@/lib/utils";

const variants = {
  default: "bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-sm",
  outline: "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
  ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  soft: "bg-blue-50 text-blue-700 hover:bg-blue-100",
};
export function Button({ className, variant = "default", size = "default", ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
        size === "sm" ? "h-9 px-3 text-xs" : size === "icon" ? "size-10" : "h-10 px-4 text-sm",
        variants[variant] || variants.default,
        className
      )}
      {...props}
    />
  );
}
