'use client';

import { useMemo, useState } from "react";
import {
  Activity, ArrowUp, Bell, Bot, CalendarDays, Check, ChevronRight, CircleHelp,
  ClipboardList, FileText, FolderOpen, Globe2, Image, LayoutDashboard, Mail,
  Mic, Moon, Paperclip, Plus, Search, Send, Settings, Sparkles, Sun, Users,
  Workflow, NotebookPen, ChartNoAxesCombined, ConciergeBell, Menu, X
} from "lucide-react";

const apps = [
  { name: "Calendar", icon: CalendarDays, description: "Appointments, meetings and daily schedule", links: ["Today's schedule", "Upcoming appointments", "Create an event", "Weekly calendar"] },
  { name: "Reminders", icon: Bell, description: "Deadlines and personal reminders", links: ["Upcoming reminders", "Overdue tasks", "Recurring reminders", "Create reminder"] },
  { name: "Contacts", icon: Users, description: "Personal and professional contacts", links: ["All contacts", "Recent contacts", "Professional network", "Add contact"] },
  { name: "Notes", icon: NotebookPen, description: "Ideas and personal knowledge", links: ["Quick notes", "Ideas and inspiration", "Meeting notes", "Create note"] },
  { name: "Documents", icon: FolderOpen, description: "Files and document intelligence", links: ["Recent documents", "PDF analysis", "Spreadsheets", "Upload document"] },
  { name: "Email", icon: Mail, description: "Correspondence and communication", links: ["Inbox", "Drafts", "Important messages", "Compose email"] },
  { name: "Tasks", icon: ClipboardList, description: "Projects and priorities", links: ["My tasks", "In progress", "Completed", "Create task"] },
  { name: "Research", icon: Globe2, description: "Research and information retrieval", links: ["Web research", "Research history", "Saved resources", "New research"] },
  { name: "Analytics", icon: ChartNoAxesCombined, description: "Data analysis and reporting", links: ["Reports", "Data visualization", "Financial analysis", "New analysis"] },
  { name: "Automations", icon: Workflow, description: "Intelligent workflows", links: ["Active workflows", "Scheduled actions", "Create automation", "Activity history"] },
  { name: "Concierge", icon: ConciergeBell, description: "Travel, reservations and lifestyle", links: ["Travel planning", "Restaurant reservations", "Recommendations", "Personal planning"] },
  { name: "Settings", icon: Settings, description: "Personalize your assistant", links: ["Assistant personality", "Appearance", "Integrations", "Privacy and permissions"] }
];

type Message = { role: "assistant" | "user"; text: string };

export default function Home() {
  const [active, setActive] = useState("Overview");
  const [input, setInput] = useState("");
  const [dark, setDark] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [tasks, setTasks] = useState(["Review upcoming appointments", "Organize project documents", "Plan priorities for tomorrow"]);
  const [checked, setChecked] = useState<number[]>([]);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", text: "Good evening. I'm your personal AI assistant. I can help organize your schedule, analyze documents, conduct research, manage tasks and coordinate your day. What would you like to work on?" }
  ]);
  const selectedApp = useMemo(() => apps.find(a => a.name === active), [active]);

  function sendMessage() {
    const value = input.trim();
    if (!value) return;
    setMessages(old => [...old, { role: "user", text: value }, {
      role: "assistant",
      text: "I've received your request. This starter currently demonstrates the conversation experience. Connect an AI provider and server-side tool calling to enable real reasoning and actions."
    }]);
    setInput("");
    setActive("Overview");
  }

  const shell = dark ? "bg-[#101827] text-slate-100" : "bg-slate-100 text-slate-900";
  const panel = dark ? "bg-[#1b293d] border-slate-700" : "bg-white border-slate-200";
  const muted = dark ? "text-slate-400" : "text-slate-500";

  return (
    <main className={`min-h-screen ${shell}`}>
      <header className={`sticky top-0 z-20 flex h-[72px] items-center justify-between border-b px-5 ${dark ? "border-slate-700 bg-[#182438]" : "border-slate-200 bg-white"}`}>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#334c70]"><Bot size={23} /></div>
          <div><div className="font-semibold tracking-[.18em]">CONCIERGE</div><div className={`text-[10px] tracking-[.2em] ${muted}`}>PERSONAL INTELLIGENCE</div></div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs text-emerald-400">Prototype</span>
          <button aria-label="Toggle theme" onClick={() => setDark(!dark)} className="rounded-lg p-2 hover:bg-slate-500/10">{dark ? <Sun size={19}/> : <Moon size={19}/>}</button>
          <button aria-label="Toggle applications" onClick={() => setSidebarOpen(!sidebarOpen)} className="rounded-lg p-2 hover:bg-slate-500/10">{sidebarOpen ? <X size={19}/> : <Menu size={19}/>}</button>
        </div>
      </header>

      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-5 p-4 lg:grid-cols-[minmax(0,1fr)_340px] lg:p-6">
        <section className="min-w-0 space-y-5">
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-2 text-xs tracking-[.16em] ${muted}`}><Activity size={14} className="text-sky-400"/> PERSONAL COMMAND CENTER</div>
            <div className={`text-xs ${muted}`}>Your workspace</div>
          </div>

          {active === "Overview" ? <>
            <div><h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Your assistant.</h1><p className={`mt-2 ${muted}`}>One place for your work, life and ideas.</p></div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className={`rounded-2xl border p-4 ${panel}`}><div className="flex items-center justify-between text-sm"><CalendarDays className="text-sky-400"/> <span className={muted}>SCHEDULE</span></div><div className="mt-3 text-3xl font-semibold">—</div><div className={`text-xs ${muted}`}>Connect calendar</div></div>
              <div className={`rounded-2xl border p-4 ${panel}`}><div className="flex items-center justify-between text-sm"><ClipboardList className="text-emerald-400"/> <span className={muted}>TASKS</span></div><div className="mt-3 text-3xl font-semibold">{tasks.length - checked.length}</div><div className={`text-xs ${muted}`}>Outstanding tasks</div></div>
            </div>
            <section className={`rounded-2xl border p-4 sm:p-5 ${panel}`}>
              <div className="mb-4 flex items-center justify-between"><div className="font-semibold">AI ASSISTANT</div><span className="rounded-full bg-emerald-500/15 px-2.5 py-1 text-xs text-emerald-400">Ready</span></div>
              <div className="mb-4 flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-full bg-[#334c70]"><Bot size={20}/></div><div><div className="text-sm font-medium">Your concierge</div><div className={`text-xs ${muted}`}>How may I assist you?</div></div></div>
              <div className="max-h-[390px] space-y-3 overflow-y-auto border-y border-slate-500/20 py-4">
                {messages.map((m, i) => <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}><div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${m.role === "user" ? "bg-[#344e72]" : dark ? "bg-[#26364c]" : "bg-slate-100 text-slate-800"}`}>{m.text}<div className={`mt-2 text-[9px] tracking-widest ${m.role === "user" ? "text-blue-100/60" : muted}`}>{m.role === "user" ? "YOU" : "CONCIERGE AI"}</div></div></div>)}
              </div>
              <div className={`mt-4 rounded-xl border p-3 ${dark ? "border-slate-600 bg-[#111c2d]" : "border-slate-300 bg-slate-50"}`}>
                <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }} placeholder="Ask me anything..." rows={2} className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-slate-500"/>
                <div className="mt-2 flex items-center justify-between"><div className={`flex items-center gap-4 ${muted}`}><Paperclip size={17}/><Image size={17}/><Mic size={17}/><Sparkles size={17}/></div><button onClick={sendMessage} disabled={!input.trim()} className="flex items-center gap-2 rounded-lg bg-[#35557f] px-4 py-2 text-sm text-white hover:bg-[#426995] disabled:opacity-40">Send <Send size={14}/></button></div>
              </div>
              <p className={`mt-3 text-[11px] ${muted}`}>Demo chat · Connect a model API to enable live AI responses.</p>
            </section>
            <section className={`rounded-2xl border p-4 ${panel}`}>
              <div className="mb-3 flex items-center justify-between"><h2 className="font-semibold">Priority tasks</h2><span className={`text-xs ${muted}`}>{tasks.length - checked.length} remaining</span></div>
              <div className="space-y-3">{tasks.map((task, i) => <label key={i} className="flex cursor-pointer items-center gap-3 text-sm"><input type="checkbox" checked={checked.includes(i)} onChange={e => setChecked(old => e.target.checked ? [...old, i] : old.filter(x => x !== i))} className="h-4 w-4 accent-sky-500"/><span className={checked.includes(i) ? "text-slate-500 line-through" : ""}>{task}</span></label>)}</div>
              <button onClick={() => setTasks(old => [...old, "New personal task"])} className="mt-4 inline-flex items-center gap-2 rounded-lg border border-slate-500/30 px-3 py-2 text-xs hover:bg-slate-500/10"><Plus size={14}/> Add task</button>
            </section>
          </> : <section className={`min-h-[500px] rounded-2xl border p-5 ${panel}`}>
            <button onClick={() => setActive("Overview")} className={`mb-5 flex items-center gap-2 text-xs ${muted}`}>← Back to assistant</button>
            <div className="mb-6 flex items-center gap-3"><div className="rounded-xl bg-sky-500/10 p-3"><selectedApp.icon className="text-sky-400"/></div><div><h1 className="text-2xl font-semibold">{active}</h1><p className={`text-sm ${muted}`}>{selectedApp.description}</p></div></div>
            <div className="space-y-2">{selectedApp.links.map(link => <button key={link} onClick={() => setMessages(old => [...old, {role:"assistant",text:`You selected “${link}” in ${active}. Connect the relevant service to load live data and actions.`}])} className={`flex w-full items-center justify-between rounded-xl p-4 text-left text-sm ${dark ? "bg-[#26364c] hover:bg-[#30445f]" : "bg-slate-100 hover:bg-slate-200"}`}>{link}<ChevronRight size={17} className={muted}/></button>)}</div>
            <p className={`mt-6 text-xs ${muted}`}>Workspace prototype. Live data and actions require service integrations.</p>
          </section>}
        </section>

        {sidebarOpen && <aside className={`h-fit rounded-2xl border p-4 ${panel}`}>
          <div className="mb-4 flex items-center justify-between"><h2 className="text-sm font-semibold tracking-wide">APPLICATIONS</h2><span className={`text-[10px] ${muted}`}>12 WORKSPACES</span></div>
          <div className="grid grid-cols-3 gap-2">{apps.map(app => { const Icon = app.icon; return <button key={app.name} onClick={() => setActive(app.name)} className={`flex min-h-[88px] flex-col items-start justify-between rounded-xl p-3 text-left transition ${active === app.name ? "bg-[#344e72] text-white" : dark ? "bg-[#26364c] hover:bg-[#30445f]" : "bg-slate-100 hover:bg-slate-200"}`}><Icon size={20} className={active === app.name ? "text-sky-300" : "text-slate-400"}/><span className="text-[11px] font-medium">{app.name}</span></button>})}</div>
          <div className={`mt-5 border-t pt-4 text-xs ${muted}`}><div className="flex items-center gap-2"><CircleHelp size={14}/> Help & support</div><div className="mt-3 flex items-center gap-2"><Search size={14}/> Search workspace</div></div>
        </aside>}
      </div>
      <footer className={`border-t px-6 py-4 text-center text-[10px] tracking-[.18em] ${dark ? "border-slate-700 text-slate-500" : "border-slate-200 text-slate-500"}`}>CONCIERGE AI · PERSONAL INTELLIGENCE & EXECUTIVE ASSISTANT · V0.1</footer>
    </main>
  );
}
