import { cn } from "@/lib/utils";

export function Card({ className, ...props }) {
  return <div className={cn("rounded-2xl border border-slate-200/80 bg-white shadow-[0_2px_10px_rgba(15,23,42,0.03)]", className)} {...props} />;
}
export function CardHeader({ className, ...props }) {
  return <div className={cn("flex flex-col gap-1.5 p-5 pb-3", className)} {...props} />;
}
export function CardTitle({ className, ...props }) {
  return <h3 className={cn("font-semibold tracking-tight text-slate-900", className)} {...props} />;
}
export function CardDescription({ className, ...props }) {
  return <p className={cn("text-sm text-slate-500", className)} {...props} />;
}
export function CardContent({ className, ...props }) {
  return <div className={cn("p-5 pt-2", className)} {...props} />;
}
