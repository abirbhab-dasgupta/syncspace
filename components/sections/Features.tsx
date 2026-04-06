"use client";

const features = [
    { num: "01", title: "Multi-LLM routing", desc: "Cost-first routing across Groq, Gemini 1.5 Flash, and GPT-4o-mini. Automatic fallback, zero downtime." },
    { num: "02", title: "Upstash Redis caching", desc: "Agent responses, search results, and room state cached at the edge. Sub-50ms repeat queries." },
    { num: "03", title: "Real-time rooms", desc: "Create a room, invite collaborators, and start working. Persistent message history with agent logs." },
    { num: "04", title: "BetterAuth v1", desc: "Production-grade authentication with Drizzle ORM and Neon Postgres. Sessions, roles, and rate limiting built in." },
    { num: "05", title: "Browser-native agents", desc: "No IDE plugin, no extension. Paste your input directly into the room. Agents operate autonomously on text." },
    { num: "06", title: "Focus sessions", desc: "Built-in focus timer with Pomodoro support. Session history tracked per user. Designed to protect deep work." },
];

export function Features() {
    return (
        <section id="features" className="ss-section-sm">
            <div className="ss-container">
                <span className="ss-eyebrow">Platform</span>
                <h2 className="ss-heading">Built for how teams actually work</h2>
                <div className="ss-features-grid">
                    {features.map(f => (
                        <div key={f.num}
                            style={{ padding: "28px 28px 32px", background: "var(--bg-surface)", transition: "background 0.2s", cursor: "default" }}
                            onMouseOver={e => (e.currentTarget as HTMLElement).style.background = "var(--bg-elevated)"}
                            onMouseOut={e => (e.currentTarget as HTMLElement).style.background = "var(--bg-surface)"}>
                            <div style={{ fontFamily: "monospace", fontSize: 11, color: "var(--text-muted)", marginBottom: 16 }}>{f.num}</div>
                            <div style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em", color: "var(--text-pri)", marginBottom: 8 }}>{f.title}</div>
                            <div style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--text-sec)" }}>{f.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}