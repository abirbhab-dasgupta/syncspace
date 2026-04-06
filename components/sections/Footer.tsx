"use client";

export function Footer() {
    return (
        <footer style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "28px 40px", borderTop: "1px solid var(--border)", flexWrap: "wrap", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 20, height: 20, borderRadius: 4, background: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg viewBox="0 0 14 14" fill="none" width="10" height="10">
                        <rect x="1" y="1" width="5" height="5" rx="1.2" fill="white" opacity="0.9" />
                        <rect x="8" y="1" width="5" height="5" rx="1.2" fill="white" opacity="0.6" />
                        <rect x="1" y="8" width="5" height="5" rx="1.2" fill="white" opacity="0.6" />
                        <rect x="8" y="8" width="5" height="5" rx="1.2" fill="white" opacity="0.35" />
                    </svg>
                </div>
                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>SyncSpace · Portfolio project · Built with Next.js 15</span>
            </div>
            <div style={{ display: "flex", gap: 20 }}>
                {["GitHub", "Docs", "Changelog"].map(l => (
                    <a key={l} href="#" style={{ fontSize: 13, color: "var(--text-muted)", textDecoration: "none", transition: "color 0.15s" }}
                        onMouseOver={e => (e.currentTarget as HTMLElement).style.color = "var(--text-sec)"}
                        onMouseOut={e => (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"}>
                        {l}
                    </a>
                ))}
            </div>
        </footer>
    );
}