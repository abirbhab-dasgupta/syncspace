"use client";

import { useRef } from "react";

const agents = [
    {
        id: "code", icon: "💻", name: "CodeBuddy", colClass: "ss-col-5",
        title: "Debug, fix, and improve code",
        desc: "Paste any snippet — CodeBuddy identifies bugs, explains root causes, and returns corrected code with inline comments. Powered by GPT-4o-mini with Groq fallback.",
        chips: ["error-solving", "bug-finding", "refactoring"],
        color: "#10b981", tagBg: "rgba(16,185,129,0.1)", tagBorder: "rgba(16,185,129,0.2)", iconBg: "rgba(16,185,129,0.12)", glowColor: "rgba(16,185,129,0.08)"
    },
    {
        id: "clarity", icon: "🧭", name: "ClarityAgent", colClass: "ss-col-4",
        title: "Break complexity into steps",
        desc: "Transforms any complex task into a clear, step-by-step procedure — for developers, writers, and designers alike.",
        chips: ["task-breakdown", "planning"],
        color: "#818cf8", tagBg: "rgba(99,102,241,0.1)", tagBorder: "rgba(99,102,241,0.2)", iconBg: "rgba(99,102,241,0.12)", glowColor: "rgba(99,102,241,0.08)"
    },
    {
        id: "research", icon: "🔍", name: "ResearchBot", colClass: "ss-col-3",
        title: "Live web research",
        desc: "Tavily-powered real-time search. Returns structured, cited reports.",
        chips: ["tavily-api", "citations"],
        color: "#f59e0b", tagBg: "rgba(245,158,11,0.1)", tagBorder: "rgba(245,158,11,0.2)", iconBg: "rgba(245,158,11,0.12)", glowColor: "rgba(245,158,11,0.08)"
    },
    {
        id: "design", icon: "🎨", name: "DesignExpert", colClass: "ss-col-7",
        title: "UI, PPT, and visual design guidance",
        desc: "Generates ASCII wireframes, layout critiques, color palette suggestions, and presentation structure — no design tool required.",
        chips: ["wireframes", "ui-review", "presentations", "color-theory"],
        color: "#ec4899", tagBg: "rgba(236,72,153,0.1)", tagBorder: "rgba(236,72,153,0.2)", iconBg: "rgba(236,72,153,0.12)", glowColor: "rgba(236,72,153,0.08)"
    },
    {
        id: "docs", icon: "📝", name: "DocWriter", colClass: "ss-col-5",
        title: "Auto-detected documentation",
        desc: "Paste a code snippet → JSDoc (Mode A). Paste a repo description → full README (Mode B). Auto-detected.",
        chips: ["jsdoc", "readme-gen", "auto-detect"],
        color: "#94a3b8", tagBg: "rgba(100,116,139,0.1)", tagBorder: "rgba(100,116,139,0.2)", iconBg: "rgba(100,116,139,0.12)", glowColor: "rgba(100,116,139,0.08)"
    },
];

const visuals: Record<string, React.ReactNode> = {
    code: (
        <div style={{ marginTop: 16, borderRadius: 10, padding: "10px 14px", fontFamily: "monospace", fontSize: 11, lineHeight: 1.7, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ color: "#52525b" }}>→ </span><span style={{ color: "#10b981" }}>No error found</span><span style={{ color: "#a1a1aa" }}> in auth.ts</span><br />
            <span style={{ color: "#52525b" }}>→ </span><span style={{ color: "#f59e0b" }}>Suggestion:</span><span style={{ color: "#a1a1aa" }}> add null guard on line 47</span><br />
            <span style={{ color: "#52525b" }}>→ </span><span style={{ color: "#818cf8" }}>Fixed</span><span style={{ color: "#a1a1aa" }}> 3 lint warnings</span>
        </div>
    ),
    clarity: (
        <div style={{ marginTop: 16, borderRadius: 10, padding: "10px 14px", fontFamily: "monospace", fontSize: 11, lineHeight: 1.7, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ color: "#818cf8" }}>Step 1</span><span style={{ color: "#a1a1aa" }}> Define scope</span><br />
            <span style={{ color: "#818cf8" }}>Step 2</span><span style={{ color: "#a1a1aa" }}> Draft outline</span><br />
            <span style={{ color: "#818cf8" }}>Step 3</span><span style={{ color: "#a1a1aa" }}> Execute &amp; review</span>
        </div>
    ),
    research: (
        <div style={{ marginTop: 16, borderRadius: 10, padding: "10px 14px", fontFamily: "monospace", fontSize: 11, lineHeight: 1.7, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ color: "#f59e0b" }}>● live</span><span style={{ color: "#a1a1aa" }}> search active</span><br />
            <span style={{ color: "#a1a1aa" }}>12 sources found</span>
        </div>
    ),
    design: (
        <div style={{ marginTop: 16, borderRadius: 10, padding: "10px 14px", fontFamily: "monospace", fontSize: 11, lineHeight: 1.6, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ color: "#ec4899" }}>┌─────────────────┐</span><br />
            <span style={{ color: "#ec4899" }}>│</span><span style={{ color: "#a1a1aa" }}> [ Logo ]  Nav  CTA </span><span style={{ color: "#ec4899" }}>│</span><br />
            <span style={{ color: "#ec4899" }}>├─────────────────┤</span><br />
            <span style={{ color: "#ec4899" }}>│</span><span style={{ color: "#a1a1aa" }}>   Hero · H1 · Sub   </span><span style={{ color: "#ec4899" }}>│</span><br />
            <span style={{ color: "#ec4899" }}>└─────────────────┘</span>
        </div>
    ),
    docs: (
        <div style={{ marginTop: 16, borderRadius: 10, padding: "10px 14px", fontFamily: "monospace", fontSize: 11, lineHeight: 1.7, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ color: "#94a3b8" }}>/**</span><br />
            <span style={{ color: "#94a3b8" }}> * @param</span><span style={{ color: "#a1a1aa" }}> {"{string}"} userId</span><br />
            <span style={{ color: "#94a3b8" }}> * @returns</span><span style={{ color: "#a1a1aa" }}> {"{Promise<User>}"}</span><br />
            <span style={{ color: "#94a3b8" }}> */</span>
        </div>
    ),
};

function Card({ a }: { a: typeof agents[0] }) {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <div ref={ref} className={a.colClass}
            style={{
                position: "relative", overflow: "hidden", borderRadius: 16, padding: 24, cursor: "default",
                background: "var(--bg-card)", border: "1px solid var(--border)", transition: "border-color 0.2s,transform 0.2s"
            }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)" }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)" }}
            onMouseMove={e => {
                const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
                const g = (e.currentTarget as HTMLElement).querySelector(".cg") as HTMLElement;
                if (g) { g.style.left = `${e.clientX - r.left}px`; g.style.top = `${e.clientY - r.top}px`; }
            }}>
            <div className="cg" style={{
                position: "absolute", pointerEvents: "none", opacity: 0, transition: "opacity 0.3s",
                transform: "translate(-50%,-50%)", width: 200, height: 200, borderRadius: "50%",
                background: `radial-gradient(circle,${a.glowColor} 0%,transparent 70%)`
            }} />
            <div style={{ width: 32, height: 32, borderRadius: 6, background: a.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, marginBottom: 14 }}>{a.icon}</div>
            <div style={{
                display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 99, padding: "3px 10px", fontSize: 11, fontWeight: 500, marginBottom: 14,
                background: a.tagBg, color: a.color, border: `1px solid ${a.tagBorder}`
            }}>{a.name}</div>
            <div style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em", marginBottom: 6, color: "var(--text-pri)" }}>{a.title}</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.6, marginBottom: 16, color: "var(--text-sec)" }}>{a.desc}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {a.chips.map(c => (
                    <span key={c} style={{
                        fontSize: 11, fontFamily: "monospace", padding: "3px 9px", borderRadius: 6,
                        background: "var(--bg-elevated)", border: "1px solid var(--border)", color: "var(--text-muted)"
                    }}>{c}</span>
                ))}
            </div>
            {visuals[a.id]}
        </div>
    );
}

export function AgentsBento() {
    return (
        <section id="agents" className="ss-section">
            <div className="ss-container">
                <div style={{ marginBottom: 56 }}>
                    <span className="ss-eyebrow">AI Agents</span>
                    <h2 className="ss-heading">Skip the tedious parts.<br />Your agents handle them.</h2>
                    <p className="ss-subheading">Five purpose-built agents, available instantly in any room. Paste your work — the right agent picks it up automatically.</p>
                </div>
                <div className="ss-bento">
                    {agents.map(a => <Card key={a.id} a={a} />)}
                </div>
            </div>
        </section>
    );
}