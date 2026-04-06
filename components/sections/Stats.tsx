"use client";

const stats = [
    { num: "5", unit: "×", label: "Specialized AI agents" },
    { num: "<180", unit: "ms", label: "p99 response (cached)" },
    { num: "3", unit: "+", label: "LLM providers routed" },
    { num: "0", unit: "", label: "IDE or plugin needed" },
];

export function Stats() {
    return (
        <div style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            <div className="ss-container">
                <div className="ss-stats-grid">
                    {stats.map((s, i) => (
                        <div key={i} style={{ padding: "32px 24px", textAlign: "center", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
                            <div style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--text-pri)" }}>
                                {s.num}<span style={{ color: "#10b981" }}>{s.unit}</span>
                            </div>
                            <div style={{ fontSize: 13, marginTop: 8, color: "var(--text-muted)" }}>{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}