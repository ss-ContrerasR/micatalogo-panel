"use client";

import { useState } from "react";
import {
  LayoutDashboard, Package, ShoppingBag, Tags, Palette, PanelsTopLeft,
  Image as ImageIcon, Settings, HelpCircle, Search, Bell, ChevronDown,
  ChevronRight, Menu, X, ArrowUpRight, ArrowDownRight, Plus, MoreHorizontal,
  Eye, ExternalLink, Store, CalendarDays, Clock3, CheckCircle2, Truck,
  CircleDollarSign, ShoppingCart, Users, Sparkles, Monitor, Smartphone,
  Type, Paintbrush, LayoutTemplate, Check, SlidersHorizontal, ArrowRight,
  MessageCircle, CircleHelp, ChartNoAxesCombined, Boxes, FileImage, Globe,
  Upload, WandSparkles, Laptop, ShieldCheck, CreditCard, ChevronLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const navGroups = [
  { label: "GENERAL", items: [
    { id: "inicio", label: "Resumen", icon: LayoutDashboard },
    { id: "pedidos", label: "Pedidos", icon: ShoppingBag, count: "8" },
    { id: "productos", label: "Productos", icon: Package },
    { id: "categorias", label: "Categorías", icon: Tags },
  ]},
  { label: "DISEÑO DE TIENDA", items: [
    { id: "personalizar", label: "Personalizar tienda", icon: Palette },
    { id: "inicio-tienda", label: "Página de inicio", icon: PanelsTopLeft },
    { id: "banners", label: "Banners e imágenes", icon: ImageIcon },
  ]},
  { label: "CONFIGURACIÓN", items: [
    { id: "configuracion", label: "Configuración", icon: Settings },
  ]},
];

const products = [
  { name: "Camiseta Essential", category: "Ropa", price: "$59.900", stock: 24, status: "Publicado", color: "blue", initials: "CE", bg: "bg-violet-100 text-violet-700" },
  { name: "Tenis Urban Pro", category: "Calzado", price: "$189.900", stock: 8, status: "Publicado", color: "blue", initials: "TU", bg: "bg-orange-100 text-orange-700" },
  { name: "Bolso Mini Daily", category: "Accesorios", price: "$79.900", stock: 0, status: "Agotado", color: "red", initials: "BD", bg: "bg-pink-100 text-pink-700" },
  { name: "Gorra Classic", category: "Accesorios", price: "$39.900", stock: 16, status: "Publicado", color: "blue", initials: "GC", bg: "bg-emerald-100 text-emerald-700" },
];

const orders = [
  { id: "#MC-1082", customer: "Valentina Rojas", date: "Hoy, 10:42 a. m.", total: "$249.800", status: "Pendiente", tone: "amber", items: "3 productos" },
  { id: "#MC-1081", customer: "Andrés Martínez", date: "Hoy, 9:18 a. m.", total: "$189.900", status: "Confirmado", tone: "blue", items: "1 producto" },
  { id: "#MC-1080", customer: "Camila Torres", date: "Ayer, 4:36 p. m.", total: "$99.800", status: "En entrega", tone: "blue", items: "2 productos" },
  { id: "#MC-1079", customer: "Daniel Herrera", date: "Ayer, 1:05 p. m.", total: "$59.900", status: "Entregado", tone: "green", items: "1 producto" },
];

const templates = [
  { id: "minimal", name: "Minimal", desc: "Limpia y elegante", style: "bg-[#f7f4ee]", accent: "bg-[#d8a477]", cards: "rounded-sm" },
  { id: "moderna", name: "Moderna", desc: "Actual y versátil", style: "bg-[#eef3f8]", accent: "bg-[#537da5]", cards: "rounded-xl" },
  { id: "bold", name: "Bold", desc: "Colorida y llamativa", style: "bg-[#f5edf7]", accent: "bg-[#a34eab]", cards: "rounded-2xl" },
];

function Logo() {
  return <div className="flex items-center gap-2.5"><div className="flex size-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-600/20"><Store size={19}/></div><div className="leading-tight"><div className="text-[17px] font-extrabold tracking-tight text-slate-900">Mi<span className="text-blue-600">Catálogo</span></div><div className="text-[9px] font-semibold uppercase tracking-[.16em] text-slate-400">Tu tienda, tu estilo</div></div></div>;
}

function PageTitle({ eyebrow, title, description, action }) {
  return <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="mb-1 text-[11px] font-bold uppercase tracking-[.15em] text-blue-600">{eyebrow}</div><h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[27px]">{title}</h1><p className="mt-1 text-sm text-slate-500">{description}</p></div>{action}</div>;
}

function StatCard({ title, value, delta, positive = true, icon: Icon, iconBg }) {
  return <Card className="min-w-0"><CardContent className="p-4 sm:p-5"><div className="flex items-start justify-between gap-2"><div className="min-w-0"><p className="truncate text-xs font-medium text-slate-500">{title}</p><div className="mt-2 text-[23px] font-bold tracking-tight text-slate-900 sm:text-[27px]">{value}</div></div><div className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${iconBg}`}><Icon size={19}/></div></div><div className="mt-3 flex items-center gap-1 text-[11px]"><span className={`inline-flex items-center gap-0.5 font-bold ${positive ? "text-emerald-600" : "text-rose-600"}`}>{positive ? <ArrowUpRight size={13}/> : <ArrowDownRight size={13}/>} {delta}</span><span className="text-slate-400">vs. mes anterior</span></div></CardContent></Card>;
}

function Dashboard({ setPage }) {
  return <>
    <PageTitle eyebrow="LUNES, 9 DE NOVIEMBRE DE 2026" title="¡Hola, Carlos! 👋" description="Este es el resumen de lo que está pasando en tu tienda." action={<Button variant="outline"><Eye size={15}/> Ver mi tienda <ExternalLink size={13}/></Button>}/>
    <div className="stat-grid mb-5">
      <StatCard title="Ventas del mes" value="$4.850.000" delta="12,8%" icon={CircleDollarSign} iconBg="bg-emerald-50 text-emerald-600"/>
      <StatCard title="Pedidos recibidos" value="86" delta="8,2%" icon={ShoppingBag} iconBg="bg-blue-50 text-blue-600"/>
      <StatCard title="Productos activos" value="42" delta="4 nuevos" icon={Package} iconBg="bg-violet-50 text-violet-600"/>
      <StatCard title="Visitas a la tienda" value="2.340" delta="18,4%" icon={Users} iconBg="bg-amber-50 text-amber-600"/>
    </div>
    <div className="mb-5 grid gap-4 lg:grid-cols-[1.5fr_1fr]">
      <Card><CardHeader className="flex-row items-center justify-between"><div><CardTitle className="text-base">Rendimiento de ventas</CardTitle><CardDescription>Comportamiento de tus ventas durante la semana</CardDescription></div><Button variant="outline" size="sm">Esta semana <ChevronDown size={13}/></Button></CardHeader><CardContent><div className="mb-3 flex items-end justify-between"><div><div className="text-2xl font-bold text-slate-900">$1.284.500</div><div className="mt-1 text-xs text-emerald-600">↑ 14,6% respecto a la semana pasada</div></div><Badge tone="green">+14,6%</Badge></div><div className="flex h-40 items-end gap-2 border-b border-slate-100 pb-1 sm:gap-4">{[42,65,51,78,59,92,72].map((h,i)=><div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-2"><div className="w-full max-w-10 rounded-t-lg bg-blue-500/90 transition-all hover:bg-blue-600" style={{height:`${h}%`}}/><span className="text-[10px] text-slate-400">{["Lun","Mar","Mié","Jue","Vie","Sáb","Dom"][i]}</span></div>)}</div></CardContent></Card>
      <Card><CardHeader><CardTitle className="text-base">Estado de pedidos</CardTitle><CardDescription>Resumen de pedidos recibidos</CardDescription></CardHeader><CardContent><div className="mb-5 flex items-center gap-4"><div className="relative flex size-28 shrink-0 items-center justify-center rounded-full" style={{background:"conic-gradient(#2563eb 0 42%, #f59e0b 42% 66%, #10b981 66% 86%, #e2e8f0 86% 100%)"}}><div className="flex size-[82px] flex-col items-center justify-center rounded-full bg-white"><span className="text-2xl font-bold text-slate-900">86</span><span className="text-[10px] text-slate-400">Pedidos</span></div></div><div className="flex-1 space-y-3">{[["Pendientes","21","bg-amber-400"],["Confirmados","36","bg-blue-500"],["Entregados","25","bg-emerald-500"],["Cancelados","4","bg-slate-300"]].map(([l,v,c])=><div key={l} className="flex items-center justify-between text-xs"><span className="flex items-center gap-2 text-slate-500"><i className={`size-2 rounded-full ${c}`}/>{l}</span><b className="text-slate-800">{v}</b></div>)}</div></div><Button variant="outline" className="w-full" onClick={()=>setPage("pedidos")}>Gestionar pedidos <ArrowRight size={14}/></Button></CardContent></Card>
    </div>
    <div className="grid gap-4 lg:grid-cols-[1.5fr_1fr]">
      <Card><CardHeader className="flex-row items-center justify-between"><div><CardTitle className="text-base">Pedidos recientes</CardTitle><CardDescription>Los últimos pedidos de tus clientes</CardDescription></div><Button variant="ghost" size="sm" onClick={()=>setPage("pedidos")}>Ver todos <ArrowRight size={14}/></Button></CardHeader><CardContent className="overflow-x-auto"><table className="w-full min-w-[510px] text-left text-xs"><thead><tr className="border-b border-slate-100 text-[10px] uppercase tracking-wider text-slate-400"><th className="pb-3 font-semibold">Pedido</th><th className="pb-3 font-semibold">Cliente</th><th className="pb-3 font-semibold">Total</th><th className="pb-3 font-semibold">Estado</th></tr></thead><tbody>{orders.slice(0,3).map(o=><tr key={o.id} className="border-b border-slate-50 last:border-0"><td className="py-3 font-bold text-blue-700">{o.id}</td><td className="py-3 text-slate-600">{o.customer}</td><td className="py-3 font-semibold text-slate-800">{o.total}</td><td className="py-3"><Badge tone={o.tone}>{o.status}</Badge></td></tr>)}</tbody></table></CardContent></Card>
      <Card><CardHeader><CardTitle className="text-base">Tu tienda está en línea</CardTitle><CardDescription>Comparte tu catálogo con tus clientes</CardDescription></CardHeader><CardContent><div className="rounded-xl border border-blue-100 bg-blue-50/70 p-4"><div className="mb-3 flex items-center gap-2 text-blue-700"><Globe size={17}/><span className="text-xs font-bold">TU DIRECCIÓN WEB</span></div><div className="break-all text-sm font-semibold text-slate-800">tienda01.micatalogo.com</div><div className="mt-3 flex items-center gap-2 text-[11px] text-emerald-700"><CheckCircle2 size={13}/> Dominio conectado</div></div><div className="mt-4 flex items-center justify-between text-xs"><span className="text-slate-500">Diseño actual</span><span className="font-semibold text-slate-800">Moderna</span></div><Button variant="outline" className="mt-3 w-full" onClick={()=>setPage("personalizar")}>Personalizar tienda <Palette size={14}/></Button></CardContent></Card>
    </div>
  </>;
}

function ProductsPage() {
  return <><PageTitle eyebrow="CATÁLOGO" title="Productos" description="Administra los productos que aparecen en tu tienda." action={<Button><Plus size={16}/> Nuevo producto</Button>}/><Card><CardContent className="p-4 sm:p-5"><div className="mb-4 flex flex-col gap-3 sm:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-2.5 text-slate-400" size={16}/><input placeholder="Buscar productos..." className="h-10 w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3 text-sm outline-none focus:border-blue-400"/></div><Button variant="outline"><SlidersHorizontal size={15}/> Filtros</Button></div><div className="overflow-x-auto"><table className="w-full min-w-[650px] text-left text-sm"><thead><tr className="border-b text-[10px] uppercase tracking-wider text-slate-400"><th className="pb-3">Producto</th><th className="pb-3">Categoría</th><th className="pb-3">Precio</th><th className="pb-3">Inventario</th><th className="pb-3">Estado</th><th className="pb-3"></th></tr></thead><tbody>{products.map(p=><tr key={p.name} className="border-b border-slate-50 last:border-0"><td className="py-3"><div className="flex items-center gap-3"><div className={`flex size-10 items-center justify-center rounded-xl text-xs font-bold ${p.bg}`}>{p.initials}</div><span className="font-semibold text-slate-800">{p.name}</span></div></td><td className="text-slate-500">{p.category}</td><td className="font-semibold text-slate-800">{p.price}</td><td className="text-slate-500">{p.stock} unidades</td><td><Badge tone={p.stock===0?"red":"green"}>{p.status}</Badge></td><td><Button variant="ghost" size="icon"><MoreHorizontal size={17}/></Button></td></tr>)}</tbody></table></div><div className="mt-4 flex items-center justify-between text-xs text-slate-400"><span>Mostrando 4 de 42 productos</span><div className="flex gap-1"><Button variant="outline" size="icon"><ChevronLeft size={14}/></Button><Button variant="soft" size="icon">1</Button><Button variant="outline" size="icon">2</Button><Button variant="outline" size="icon"><ChevronRight size={14}/></Button></div></div></CardContent></Card></>;
}

function OrdersPage() {
  return <><PageTitle eyebrow="VENTAS" title="Pedidos" description="Consulta los pedidos que tus clientes han enviado." action={<Button variant="outline"><CalendarDays size={15}/> Últimos 30 días</Button>}/><div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">{[["Todos","86"],["Pendientes","21"],["En proceso","36"],["Entregados","25"]].map(([a,b],i)=><Card key={a}><CardContent className="p-4"><div className="text-xs text-slate-500">{a}</div><div className="mt-1 text-2xl font-bold text-slate-900">{b}</div></CardContent></Card>)}</div><Card><CardContent className="p-4 sm:p-5"><div className="mb-4 flex flex-col gap-3 sm:flex-row"><div className="relative flex-1"><Search className="absolute left-3 top-2.5 text-slate-400" size={16}/><input placeholder="Buscar por pedido o cliente..." className="h-10 w-full rounded-xl border border-slate-200 pl-9 text-sm outline-none focus:border-blue-400"/></div><Button variant="outline">Todos los estados <ChevronDown size={14}/></Button></div><div className="space-y-2">{orders.map(o=><div key={o.id} className="flex flex-col justify-between gap-3 rounded-xl border border-slate-100 p-4 sm:flex-row sm:items-center"><div><div className="flex items-center gap-2"><b className="text-sm text-blue-700">{o.id}</b><Badge tone={o.tone}>{o.status}</Badge></div><div className="mt-1 text-sm font-medium text-slate-800">{o.customer}</div><div className="mt-1 flex flex-wrap gap-3 text-xs text-slate-400"><span className="flex items-center gap-1"><Clock3 size={12}/>{o.date}</span><span>{o.items}</span></div></div><div className="flex items-center justify-between gap-4 sm:justify-end"><b className="text-sm text-slate-900">{o.total}</b><Button variant="outline" size="sm">Ver detalle <ChevronRight size={13}/></Button></div></div>)}</div></CardContent></Card></>;
}

function Customizer() {
  const [template, setTemplate] = useState("moderna");
  const [font, setFont] = useState("Inter");
  const [accent, setAccent] = useState("#2563eb");
  const [view, setView] = useState("desktop");
  const active = templates.find(t=>t.id===template);
  const colors = ["#2563eb","#0f766e","#7c3aed","#db2777","#ea580c","#1f2937"];
  return <><PageTitle eyebrow="DISEÑO DE TU NEGOCIO" title="Personaliza tu tienda" description="Dale a tu catálogo la identidad de tu marca. Sin programar." action={<div className="flex gap-2"><Button variant="outline"><Eye size={15}/> Vista previa</Button><Button><Check size={15}/> Guardar cambios</Button></div>}/>
    <div className="mb-5 flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/70 p-3 text-xs text-blue-800"><Sparkles size={16} className="shrink-0"/><span>Estás editando la apariencia de <b>tienda01.micatalogo.com</b>. Los cambios de esta demostración son locales y no se guardan en un servidor.</span></div>
    <div className="customizer-grid">
      <div className="space-y-4">
        <Card><CardHeader><div className="flex items-center gap-2"><LayoutTemplate size={17} className="text-blue-600"/><CardTitle className="text-base">Plantilla de tienda</CardTitle></div><CardDescription>Elige la estructura visual que mejor representa tu negocio.</CardDescription></CardHeader><CardContent><div className="grid grid-cols-1 gap-3 sm:grid-cols-3">{templates.map(t=><button key={t.id} onClick={()=>setTemplate(t.id)} className={`rounded-xl border-2 p-2 text-left transition ${template===t.id?"border-blue-500 bg-blue-50/40":"border-slate-100 hover:border-slate-300"}`}><div className={`mb-2 h-24 overflow-hidden p-2 ${t.style} ${t.cards}`}><div className="mb-2 h-3 w-1/2 rounded bg-slate-800/15"/><div className="grid grid-cols-2 gap-1.5"><div className={`h-12 ${t.cards} bg-white/90 p-1`}><div className={`h-6 ${t.cards} ${t.accent} opacity-80`}/><div className="mt-1 h-1 w-3/4 rounded bg-slate-300"/></div><div className={`h-12 ${t.cards} bg-white/90 p-1`}><div className={`h-6 ${t.cards} ${t.accent} opacity-50`}/><div className="mt-1 h-1 w-3/4 rounded bg-slate-300"/></div></div></div><div className="flex items-center justify-between"><span className="text-xs font-bold text-slate-800">{t.name}</span>{template===t.id&&<span className="flex size-5 items-center justify-center rounded-full bg-blue-600 text-white"><Check size={12}/></span>}</div><div className="mt-0.5 text-[10px] text-slate-400">{t.desc}</div></button>)}</div></CardContent></Card>
        <Card><CardHeader><div className="flex items-center gap-2"><Type size={17} className="text-blue-600"/><CardTitle className="text-base">Tipografía</CardTitle></div><CardDescription>Selecciona la fuente principal de tu tienda.</CardDescription></CardHeader><CardContent><div className="grid grid-cols-2 gap-2 sm:grid-cols-4">{["Inter","Roboto","Poppins","Lato"].map(f=><button key={f} onClick={()=>setFont(f)} className={`rounded-xl border p-3 text-left ${font===f?"border-blue-500 bg-blue-50":"border-slate-200 hover:border-slate-300"}`}><div className="text-base font-semibold" style={{fontFamily:f}}>{f}</div><div className="mt-1 text-[10px] text-slate-400">Aa Bb 123</div></button>)}</div></CardContent></Card>
        <Card><CardHeader><div className="flex items-center gap-2"><Paintbrush size={17} className="text-blue-600"/><CardTitle className="text-base">Colores de marca</CardTitle></div><CardDescription>Define el color principal de botones y elementos destacados.</CardDescription></CardHeader><CardContent><div className="flex flex-wrap items-center gap-3">{colors.map(c=><button key={c} onClick={()=>setAccent(c)} aria-label={`Seleccionar color ${c}`} className={`flex size-9 items-center justify-center rounded-full ring-offset-2 ${accent===c?"ring-2 ring-slate-400":""}`} style={{background:c}}>{accent===c&&<Check size={16} className="text-white"/>}</button>)}<div className="ml-1 flex items-center gap-2 rounded-lg border border-slate-200 px-2 py-1.5"><span className="size-5 rounded" style={{background:accent}}/><span className="text-xs font-medium text-slate-600">{accent}</span></div></div></CardContent></Card>
        <Card><CardHeader><div className="flex items-center gap-2"><PanelsTopLeft size={17} className="text-blue-600"/><CardTitle className="text-base">Diseño de tarjetas</CardTitle></div><CardDescription>Controla cómo se muestran tus productos.</CardDescription></CardHeader><CardContent><div className="grid grid-cols-2 gap-3"><div className="rounded-xl border border-blue-200 bg-blue-50/40 p-3"><div className="mb-2 flex h-16 items-center justify-center rounded-lg bg-white"><Boxes className="text-slate-300" size={27}/></div><div className="text-xs font-bold">Imagen arriba</div><div className="mt-1 text-[10px] text-slate-400">Formato clásico de catálogo</div></div><div className="rounded-xl border border-slate-200 p-3"><div className="mb-2 flex h-16 items-center justify-center rounded-lg bg-white"><Boxes className="text-slate-300" size={27}/></div><div className="text-xs font-bold">Imagen lateral</div><div className="mt-1 text-[10px] text-slate-400">Formato compacto</div></div></div></CardContent></Card>
      </div>
      <div className="min-w-0"><Card className="overflow-hidden"><CardHeader className="border-b border-slate-100"><div className="flex items-center justify-between"><div><CardTitle className="text-base">Vista previa</CardTitle><CardDescription>Así podría verse tu tienda</CardDescription></div><div className="flex rounded-lg bg-slate-100 p-1"><button onClick={()=>setView("desktop")} className={`rounded-md p-2 ${view==="desktop"?"bg-white text-blue-600 shadow-sm":"text-slate-400"}`}><Monitor size={15}/></button><button onClick={()=>setView("mobile")} className={`rounded-md p-2 ${view==="mobile"?"bg-white text-blue-600 shadow-sm":"text-slate-400"}`}><Smartphone size={15}/></button></div></div></CardHeader><CardContent className="bg-slate-50 p-3 sm:p-5"><div className={`mx-auto overflow-hidden border border-slate-200 bg-white shadow-sm transition-all ${view==="mobile"?"max-w-[290px] rounded-[25px]":"w-full rounded-xl"}`} style={{fontFamily:font}}><div className="flex items-center justify-between border-b border-slate-100 px-4 py-3"><div className="text-sm font-extrabold text-slate-800">MI TIENDA<span style={{color:accent}}>.</span></div><div className="flex gap-2 text-slate-400"><Search size={14}/><ShoppingCart size={14}/></div></div><div className={`relative ${active.style} px-4 py-7 ${view==="mobile"?"text-center":"sm:px-6"}`}><div className="max-w-[230px]"><div className="mb-2 text-[9px] font-bold uppercase tracking-[.18em]" style={{color:accent}}>NUEVA COLECCIÓN</div><div className="text-xl font-extrabold leading-tight text-slate-900">Encuentra tu próximo favorito</div><p className="mt-2 text-[10px] leading-relaxed text-slate-500">Productos seleccionados para acompañar tu estilo.</p><button className="mt-3 rounded-lg px-3 py-2 text-[10px] font-bold text-white" style={{background:accent}}>Explorar catálogo</button></div></div><div className="p-4"><div className="mb-3 flex items-center justify-between"><div className="text-xs font-bold text-slate-800">Productos destacados</div><div className="text-[9px]" style={{color:accent}}>Ver todos</div></div><div className="grid grid-cols-2 gap-2"><div><div className={`flex h-24 items-center justify-center ${active.style} ${active.cards}`}><div className="text-2xl">👕</div></div><div className="mt-2 text-[10px] font-semibold text-slate-700">Camiseta Essential</div><div className="mt-1 text-[10px] font-bold" style={{color:accent}}>$59.900</div></div><div><div className={`flex h-24 items-center justify-center ${active.style} ${active.cards}`}><div className="text-2xl">👟</div></div><div className="mt-2 text-[10px] font-semibold text-slate-700">Tenis Urban Pro</div><div className="mt-1 text-[10px] font-bold" style={{color:accent}}>$189.900</div></div></div></div><div className="border-t border-slate-100 px-4 py-3 text-center text-[9px] text-slate-400">© 2026 MiCatálogo · Tienda de demostración</div></div><div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400"><ShieldCheck size={14}/> Vista demostrativa. No publica cambios reales.</div></CardContent></Card><div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-white p-4"><div className="flex items-center gap-2 text-sm font-semibold text-slate-800"><WandSparkles size={16} className="text-blue-600"/> Próximamente</div><p className="mt-1 text-xs leading-relaxed text-slate-500">Editor de secciones, banners, orden de bloques y configuración avanzada de la página de inicio.</p></div></div>
    </div>
  </>;
}

function SimpleSection({ page }) {
  const config = {
    categorias: ["Categorías","Organiza tus productos para que tus clientes encuentren lo que buscan.","Crear categoría",Tags],
    "inicio-tienda": ["Página de inicio","Organiza las secciones que verán tus clientes al entrar a la tienda.","Agregar sección",PanelsTopLeft],
    banners: ["Banners e imágenes","Administra las imágenes promocionales de tu tienda.","Agregar banner",ImageIcon],
    configuracion: ["Configuración","Administra los datos y preferencias generales de tu negocio.","Editar información",Settings],
  }[page] || ["Mi tienda","Administra la información de tu negocio.","Agregar",Store];
  const Icon = config[3];
  return <><PageTitle eyebrow="MI NEGOCIO" title={config[0]} description={config[1]} action={<Button><Plus size={15}/>{config[2]}</Button>}/><Card><CardContent className="flex min-h-[300px] flex-col items-center justify-center p-8 text-center"><div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><Icon size={25}/></div><h3 className="text-base font-bold text-slate-900">Tu espacio de {config[0].toLowerCase()}</h3><p className="mt-2 max-w-md text-sm leading-relaxed text-slate-500">Esta sección ya está preparada visualmente. La administración real se conectará cuando estén disponibles los endpoints correspondientes.</p><Badge tone="blue" className="mt-4">Interfaz demostrativa</Badge></CardContent></Card></>;
}

export default function Home() {
  const [page, setPage] = useState("inicio");
  const [mobileOpen, setMobileOpen] = useState(false);
  const pageNames = {inicio:"Resumen",pedidos:"Pedidos",productos:"Productos",categorias:"Categorías",personalizar:"Personalizar tienda","inicio-tienda":"Página de inicio",banners:"Banners e imágenes",configuracion:"Configuración"};
  const content = () => {
    if(page==="inicio") return <Dashboard setPage={setPage}/>;
    if(page==="productos") return <ProductsPage/>;
    if(page==="pedidos") return <OrdersPage/>;
    if(page==="personalizar") return <Customizer/>;
    return <SimpleSection page={page}/>;
  };
  const sidebar = <div className="flex h-full flex-col">
    <div className="flex h-[76px] items-center justify-between border-b border-slate-100 px-5"><Logo/><button className="lg:hidden" onClick={()=>setMobileOpen(false)}><X size={19}/></button></div>
    <div className="border-b border-slate-100 p-4"><div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"><div className="flex size-9 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm"><Store size={17}/></div><div className="min-w-0 flex-1"><div className="truncate text-xs font-bold text-slate-800">Mi Tienda</div><div className="truncate text-[10px] text-slate-400">tienda01.micatalogo.com</div></div><ChevronDown size={14} className="text-slate-400"/></div></div>
    <nav className="scrollbar-none flex-1 space-y-6 overflow-y-auto px-3 py-5">{navGroups.map(group=><div key={group.label}><div className="mb-2 px-3 text-[9px] font-bold tracking-[.16em] text-slate-400">{group.label}</div><div className="space-y-1">{group.items.map(item=>{const Icon=item.icon;return <button key={item.id} aria-current={page===item.id?"page":undefined} onClick={()=>{setPage(item.id);setMobileOpen(false)}} className="sidebar-link flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[13px] font-medium text-slate-500 hover:bg-slate-50 hover:text-slate-800"><Icon className="nav-icon text-slate-400" size={17}/><span className="flex-1">{item.label}</span>{item.count&&<span className="rounded-md bg-blue-50 px-1.5 py-0.5 text-[10px] font-bold text-blue-700">{item.count}</span>}</button>})}</div></div>)}</nav>
    <div className="border-t border-slate-100 p-3"><div className="mb-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-3.5 text-white"><div className="flex items-center gap-2"><Sparkles size={15}/><span className="text-xs font-bold">Haz crecer tu tienda</span></div><p className="mt-1.5 text-[10px] leading-relaxed text-blue-100">Descubre nuevas formas de personalizar tu catálogo.</p><button onClick={()=>{setPage("personalizar");setMobileOpen(false)}} className="mt-3 flex items-center gap-1 text-[10px] font-bold">Explorar opciones <ArrowRight size={12}/></button></div><button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-xs text-slate-500 hover:bg-slate-50"><CircleHelp size={16}/> Centro de ayuda</button></div>
  </div>;
  return <div className="min-h-screen bg-[#f7f8fc]">
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-[258px] border-r border-slate-200/80 bg-white lg:block">{sidebar}</aside>
    {mobileOpen&&<div className="fixed inset-0 z-40 lg:hidden"><button aria-label="Cerrar menú" className="absolute inset-0 bg-slate-950/35" onClick={()=>setMobileOpen(false)}/><aside className="absolute inset-y-0 left-0 w-[285px] bg-white shadow-2xl">{sidebar}</aside></div>}
    <div className="min-h-screen lg:pl-[258px]">
      <header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-slate-200/80 bg-white/90 px-4 backdrop-blur-xl sm:px-7">
        <div className="flex min-w-0 items-center gap-3"><button onClick={()=>setMobileOpen(true)} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"><Menu size={20}/></button><div className="min-w-0"><div className="truncate text-sm font-bold text-slate-800">{pageNames[page]}</div><div className="hidden text-[11px] text-slate-400 sm:block">Panel de administración <span className="px-1">/</span> {pageNames[page]}</div></div></div>
        <div className="flex items-center gap-2 sm:gap-4"><div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex"><Search size={14} className="text-slate-400"/><span className="text-xs text-slate-400">Buscar...</span><kbd className="rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[9px] text-slate-400">⌘ K</kbd></div><button className="relative rounded-xl p-2 text-slate-500 hover:bg-slate-100"><Bell size={18}/><span className="absolute right-1.5 top-1.5 size-2 rounded-full border-2 border-white bg-rose-500"/></button><div className="h-8 w-px bg-slate-200"/><button className="flex items-center gap-2 rounded-xl p-1.5 hover:bg-slate-50"><div className="flex size-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">CR</div><div className="hidden text-left sm:block"><div className="text-xs font-bold text-slate-800">Carlos R.</div><div className="text-[10px] text-slate-400">Administrador</div></div><ChevronDown size={13} className="hidden text-slate-400 sm:block"/></button></div>
      </header>
      <main className="mx-auto max-w-[1500px] px-4 py-6 sm:px-7 sm:py-8 lg:px-9">{content()}<footer className="mt-9 flex flex-col justify-between gap-2 border-t border-slate-200/70 pt-5 text-[10px] text-slate-400 sm:flex-row"><span>© 2026 MiCatálogo. Todos los derechos reservados.</span><span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-emerald-500"/> Sistema de demostración · Frontend sin conexión a API</span></footer></main>
    </div>
  </div>;
}
