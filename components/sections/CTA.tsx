"use client";

import { ArrowRight } from "lucide-react";

export function CTA() {
    return (
        <section className="ss-section" style={{ display: "flex", justifyContent: "center", padding: "96px 24px" }}>
            <div style={{
                position: "relative", overflow: "hidden", borderRadius: 24, padding: "64px 80px", textAlign: "center",
                maxWidth: 600, width: "100%", background: "var(--bg-surface)", border: "1px solid var(--border)"
            }}>
                <div style={{
                    position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)", width: 300, height: 200, pointerEvents: "none",
                    background: "radial-gradient(ellipse,rgba(16,185,129,0.13) 0%,transparent 70%)"
                }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                    <span className="ss-eyebrow" style={{ textAlign: "center" }}>Start now</span>
                    <h2 style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.2, color: "var(--text-pri)", marginBottom: 14 }}>
                        Ship faster, starting today
                    </h2>
                    <p style={{ fontSize: 15, color: "var(--text-sec)", lineHeight: 1.65, marginBottom: 32 }}>
                        Open a room, paste your first task, and let your AI teammates handle the rest. No setup, no extensions, no friction.
                    </p>
                    <button style={{
                        display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 24px", borderRadius: 10,
                        fontSize: 14.5, fontWeight: 500, color: "#fff", background: "#10b981", border: "none", cursor: "pointer",
                        boxShadow: "0 8px 32px rgba(16,185,129,0.25)", transition: "all 0.2s"
                    }}
                        onMouseOver={e => (e.currentTarget as HTMLElement).style.background = "#059669"}
                        onMouseOut={e => (e.currentTarget as HTMLElement).style.background = "#10b981"}>
                        Get started free <ArrowRight size={14} />
                    </button>
                    <p style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 14 }}>
                        No credit card required · <span style={{ color: "#10b981" }}>Open source</span> on GitHub · Vercel-deployed
                    </p>
                </div>
            </div>
        </section>
    );
}