import { cn } from "@/lib/utils";

const styles = {
  green: "bg-emerald-50 text-emerald-700 ring-emerald-600/15",
  blue: "bg-blue-50 text-blue-700 ring-blue-600/15",
  amber: "bg-amber-50 text-amber-700 ring-amber-600/15",
  slate: "bg-slate-100 text-slate-600 ring-slate-500/10",
  red: "bg-rose-50 text-rose-700 ring-rose-600/10",
};
export function Badge({ className, tone = "slate", ...props }) {
  return <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ring-inset", styles[tone] || styles.slate, className)} {...props} />;
}
