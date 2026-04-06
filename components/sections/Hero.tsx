"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export function Hero() {
    return (
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", overflow: "hidden", padding: "120px 24px 80px" }}>

            {/* Grid lines */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
                backgroundSize: "40px 40px",
                maskImage: "radial-gradient(ellipse 80% 55% at 50% 30%,black 0%,transparent 80%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 55% at 50% 30%,black 0%,transparent 80%)"
            }} />

            {/* Radial glow */}
            <div style={{
                position: "absolute", top: "15%", left: "50%", transform: "translateX(-50%)", width: 600, height: 400, pointerEvents: "none", zIndex: 0,
                background: "radial-gradient(ellipse at center,rgba(16,185,129,0.1) 0%,transparent 70%)",
                animation: "glow-pulse 6s ease-in-out infinite"
            }} />

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: 900 }}>
                {/* Badge */}
                <div style={{
                    display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 99, padding: "4px 12px", marginBottom: 28,
                    fontSize: 12, fontWeight: 500, color: "#10b981", background: "#064e3b", border: "1px solid rgba(16,185,129,0.3)"
                }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#10b981", animation: "dot-pulse 2s ease-in-out infinite", flexShrink: 0 }} />
                    Agents now remember context across sessions
                </div>

                {/* H1 */}
                <h1 style={{ fontSize: "clamp(40px,6vw,72px)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.08, color: "var(--text-pri)", marginBottom: 24, maxWidth: 820 }}>
                    One room where AI handles<br />
                    <span style={{ color: "#10b981" }}>the tedious parts</span>
                </h1>

                {/* Sub */}
                <p style={{ fontSize: 17, color: "var(--text-pri)", opacity: 0.78, lineHeight: 1.65, maxWidth: 520, marginBottom: 40 }}>
                    SyncSpace gives your team a shared workspace where AI agents fix bugs, break down tasks,
                    research topics, design layouts, and write docs — entirely in the browser.
                </p>

                {/* CTAs */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 72, flexWrap: "wrap", justifyContent: "center" }}>
                    <button style={{
                        display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 24px", borderRadius: 10,
                        fontSize: 14.5, fontWeight: 500, color: "#fff", background: "#10b981", border: "none", cursor: "pointer",
                        boxShadow: "0 8px 32px rgba(16,185,129,0.25)", transition: "all 0.2s"
                    }}
                        onMouseOver={e => (e.currentTarget as HTMLElement).style.background = "#059669"}
                        onMouseOut={e => (e.currentTarget as HTMLElement).style.background = "#10b981"}>
                        Open a room <ArrowRight size={14} />
                    </button>
                    <Link href="#agents" style={{
                        display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 22px", borderRadius: 10,
                        fontSize: 14.5, color: "var(--text-sec)", background: "var(--bg-elevated)", border: "1px solid var(--border)",
                        textDecoration: "none", transition: "all 0.2s"
                    }}
                        onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-pri)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)" }}
                        onMouseOut={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-sec)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)" }}>
                        <Clock size={14} /> Explore agents
                    </Link>
                </div>

                {/* Preview window */}
                <div style={{ position: "relative", width: "100%", maxWidth: 860 }}>
                    <div style={{
                        position: "absolute", bottom: -40, left: "50%", transform: "translateX(-50%)", width: 500, height: 120, pointerEvents: "none", zIndex: 0, borderRadius: "50%",
                        background: "radial-gradient(ellipse,rgba(16,185,129,0.2) 0%,transparent 70%)", filter: "blur(24px)"
                    }} />
                    <div style={{
                        position: "relative", zIndex: 1, borderRadius: 20, overflow: "hidden", background: "var(--bg-surface)",
                        border: "1px solid var(--border)", boxShadow: "0 40px 80px rgba(0,0,0,0.5),0 0 0 1px var(--border)"
                    }}>

                        {/* Browser chrome */}
                        <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 16px", background: "var(--bg-elevated)", borderBottom: "1px solid var(--border)" }}>
                            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                            <div style={{
                                flex: 1, marginLeft: 8, textAlign: "center", fontSize: 11.5, fontFamily: "monospace",
                                padding: "3px 12px", borderRadius: 4, background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border)"
                            }}>
                                app.syncspace.dev/room/project-alpha
                            </div>
                        </div>

                        {/* Body */}
                        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", minHeight: 300 }}>
                            {/* Sidebar */}
                            <div style={{ borderRight: "1px solid var(--border)", padding: "12px 10px", display: "flex", flexDirection: "column", gap: 2 }}>
                                {[{ section: "Rooms" }, { label: "project-alpha", color: "#10b981", active: true }, { label: "design-review", color: "#6366f1" }, { label: "research-q4", color: "#f59e0b" },
                                { section: "Agents" }, { label: "CodeBuddy", color: "#10b981" }, { label: "ClarityAgent", color: "#6366f1" }, { label: "ResearchBot", color: "#f59e0b" }
                                ].map((item, i) => "section" in item ? (
                                    <div key={i} style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.07em", textTransform: "uppercase", color: "var(--text-muted)", padding: "8px 8px 4px" }}>{item.section}</div>
                                ) : (
                                    <div key={i} style={{
                                        display: "flex", alignItems: "center", gap: 8, padding: "6px 8px", borderRadius: 6, fontSize: 12.5, cursor: "pointer",
                                        background: "active" in item && item.active ? "rgba(16,185,129,0.08)" : "transparent",
                                        color: "active" in item && item.active ? "#10b981" : "var(--text-sec)"
                                    }}>
                                        <div style={{ width: 7, height: 7, borderRadius: "50%", flexShrink: 0, background: item.color }} />
                                        {item.label}
                                    </div>
                                ))}
                            </div>

                            {/* Chat */}
                            <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", gap: 14 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, fontWeight: 500, color: "var(--text-pri)" }}>
                                    project-alpha
                                    <span style={{ fontSize: 11, fontWeight: 500, padding: "2px 8px", borderRadius: 99, background: "rgba(16,185,129,0.1)", color: "#10b981", border: "1px solid rgba(16,185,129,0.25)" }}>● Live</span>
                                </div>
                                {/* Bubble 1 */}
                                <div style={{ display: "flex", gap: 10 }}>
                                    <div style={{ width: 26, height: 26, borderRadius: 6, background: "rgba(16,185,129,0.12)", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontFamily: "monospace", fontWeight: 500, flexShrink: 0 }}>CB</div>
                                    <div>
                                        <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }}>CodeBuddy · just now</div>
                                        <div style={{ fontSize: 12.5, lineHeight: 1.55, padding: "8px 12px", borderRadius: "0 10px 10px 10px", background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-sec)", maxWidth: 380 }}>
                                            Found the issue — null check missing on line 47. Here&apos;s the fix:
                                        </div>
                                        <div style={{ marginTop: 6, padding: "8px 14px", borderRadius: 10, fontFamily: "monospace", fontSize: 11, lineHeight: 1.7, background: "var(--bg-base)", border: "1px solid var(--border)", color: "#6ee7b7" }}>
                                            <span style={{ color: "var(--text-muted)" }}>47  </span><span style={{ color: "#818cf8" }}>const</span><span style={{ color: "#10b981" }}> user</span><span style={{ color: "var(--text-sec)" }}> = session?.</span><span style={{ color: "#60a5fa" }}>user</span><span style={{ color: "var(--text-sec)" }}> ?? </span><span style={{ color: "#f87171" }}>null</span>;<br />
                                            <span style={{ color: "var(--text-muted)" }}>48  </span><span style={{ color: "#818cf8" }}>if</span><span style={{ color: "var(--text-sec)" }}> (!user) </span><span style={{ color: "#818cf8" }}>return</span><span style={{ color: "#f59e0b" }}> redirect</span><span style={{ color: "var(--text-sec)" }}>(</span><span style={{ color: "#a3e635" }}>&apos;/login&apos;</span><span style={{ color: "var(--text-sec)" }}>);</span>
                                        </div>
                                    </div>
                                </div>
                                {/* Bubble 2 */}
                                <div style={{ display: "flex", gap: 10 }}>
                                    <div style={{ width: 26, height: 26, borderRadius: 6, background: "rgba(99,102,241,0.12)", color: "#818cf8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontFamily: "monospace", fontWeight: 500, flexShrink: 0 }}>CA</div>
                                    <div>
                                        <div style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }}>ClarityAgent · 1 min ago</div>
                                        <div style={{ fontSize: 12.5, lineHeight: 1.55, padding: "8px 12px", borderRadius: "0 10px 10px 10px", background: "var(--bg-card)", border: "1px solid var(--border)", color: "var(--text-sec)", maxWidth: 420 }}>
                                            Breaking the auth flow into 4 steps. Step 1: Validate → Step 2: Fetch user → Step 3: Check permissions → Step 4: Redirect.<span className="cursor" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}