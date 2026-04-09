"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";


export function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="ss-nav">
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
                <div style={{ width: 26, height: 26, borderRadius: 6, background: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 14 14" fill="none" width="14" height="14">
                        <rect x="1" y="1" width="5" height="5" rx="1.2" fill="white" opacity="0.9" />
                        <rect x="8" y="1" width="5" height="5" rx="1.2" fill="white" opacity="0.6" />
                        <rect x="1" y="8" width="5" height="5" rx="1.2" fill="white" opacity="0.6" />
                        <rect x="8" y="8" width="5" height="5" rx="1.2" fill="white" opacity="0.35" />
                    </svg>
                </div>
                <span style={{ fontSize: 15, fontWeight: 500, color: "var(--text-pri)", letterSpacing: "-0.01em" }}>SyncSpace</span>
            </Link>

            {/* Nav links */}
            <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden md:flex">
                {["Agents", "Features", "Stack"].map(l => (
                    <Link key={l} href={`#${l.toLowerCase()}`}
                        style={{ fontSize: 13.5, padding: "6px 12px", borderRadius: 8, color: "var(--text-sec)", textDecoration: "none", transition: "all 0.15s" }}
                        onMouseOver={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-pri)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)" }}
                        onMouseOut={e => { (e.currentTarget as HTMLElement).style.color = "var(--text-sec)"; (e.currentTarget as HTMLElement).style.background = "transparent" }}>
                        {l}
                    </Link>
                ))}
            </div>

            {/* Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <a href="#" style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12.5, color: "var(--text-sec)", textDecoration: "none", padding: "6px 12px", borderRadius: 8, border: "1px solid var(--border)", background: "rgba(255,255,255,0.02)", transition: "all 0.15s" }}>
                    <Image src="/github.svg" alt="Github" width={16} height={16} />
                    <span className="hidden sm:inline">Open source</span>
                </a>
                <button onClick={toggleTheme} aria-label="Toggle theme"
                    style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid var(--border)", background: "transparent", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-sec)", transition: "all 0.15s" }}>
                    {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
                </button>
                <button style={{ height: 36, padding: "0 14px", fontSize: 13.5, color: "var(--text-sec)", borderRadius: 8, border: "1px solid var(--border)", background: "transparent", cursor: "pointer", transition: "all 0.15s" }}>
                    Sign in
                </button>
                <button style={{ height: 36, padding: "0 16px", fontSize: 13.5, fontWeight: 500, color: "#fff", borderRadius: 8, border: "none", background: "#10b981", cursor: "pointer", transition: "all 0.15s" }}
                    onMouseOver={e => (e.currentTarget as HTMLElement).style.background = "#059669"}
                    onMouseOut={e => (e.currentTarget as HTMLElement).style.background = "#10b981"}>
                    Get started
                </button>
            </div>
        </nav>
    );
}