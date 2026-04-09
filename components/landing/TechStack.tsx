"use client";

import { useState } from "react";

const stacks = {
    frontend: [
        { label: "Next.js 15", color: "#ffffff" }, { label: "Tailwind CSS 4", color: "#38bdf8" },
        { label: "shadcn/ui", color: "#a78bfa" }, { label: "Framer Motion", color: "#10b981" },
        { label: "Zustand", color: "#e2e8f0" }, { label: "React Query", color: "#f97316" }, { label: "next-themes", color: "#a3e635" },
    ],
    ai: [
        { label: "Vercel AI SDK", color: "#a855f7" }, { label: "Groq", color: "#818cf8" },
        { label: "Gemini 1.5 Flash", color: "#60a5fa" }, { label: "GPT-4o-mini", color: "#9ca3af" }, { label: "Tavily Search", color: "#fb923c" },
    ],
    infra: [
        { label: "BetterAuth v1", color: "#ec4899" }, { label: "Drizzle ORM", color: "#34d399" },
        { label: "Neon Postgres", color: "#4ade80" }, { label: "Upstash Redis", color: "#ff4c4c" },
        { label: "t3-env + Zod", color: "#c084fc" }, { label: "Pino Logging", color: "#a3e635" }, { label: "Vercel", color: "#ffffff" },
    ],
};
type TabKey = keyof typeof stacks;

export function TechStack() {
    const [active, setActive] = useState<TabKey>("frontend");
    const tabs: { key: TabKey, label: string }[] = [{ key: "frontend", label: "Frontend" }, { key: "ai", label: "AI & Agents" }, { key: "infra", label: "Infrastructure" }];

    return (
        <section id="stack" className="ss-section">
            <div className="ss-container">
                <span className="ss-eyebrow">Tech Stack</span>
                <h2 className="ss-heading">Production-grade from day one</h2>
                <p className="ss-subheading" style={{ marginBottom: 32 }}>Every technology chosen for correctness, performance, and developer experience — not hype.</p>

                {/* Tabs */}
                <div style={{ display: "inline-flex", gap: 4, padding: 4, borderRadius: 10, background: "var(--bg-elevated)", border: "1px solid var(--border)", marginBottom: 24 }}>
                    {tabs.map(t => (
                        <button key={t.key} onClick={() => setActive(t.key)}
                            style={{
                                padding: "6px 16px", borderRadius: 6, fontSize: 13, cursor: "pointer", transition: "all 0.15s",
                                background: active === t.key ? "var(--bg-card)" : "transparent",
                                color: active === t.key ? "var(--text-pri)" : "var(--text-sec)",
                                border: active === t.key ? "1px solid var(--border-hover)" : "1px solid transparent"
                            }}>
                            {t.label}
                        </button>
                    ))}
                </div>

                {/* Pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {stacks[active].map(p => (
                        <span key={p.label}
                            style={{
                                display: "inline-flex", alignItems: "center", gap: 7, fontFamily: "monospace", fontSize: 13, padding: "6px 14px",
                                borderRadius: 99, background: "var(--bg-card)", color: "var(--text-sec)", border: "1px solid var(--border)", cursor: "default", transition: "all 0.15s"
                            }}
                            onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-pri)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)" }}
                            onMouseOut={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-sec)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)" }}>
                            <span style={{ width: 6, height: 6, borderRadius: "50%", flexShrink: 0, background: p.color }} />
                            {p.label}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}