const accounts = [
  { name: "Northwind Retail", arr: "$48k ARR", health: 86, tone: "good" },
  { name: "Corex Logistics", arr: "$36k ARR", health: 71, tone: "good" },
  { name: "Hexal Insurance", arr: "$62k ARR", health: 44, tone: "warn" },
  { name: "Marrow Health", arr: "$27k ARR", health: 23, tone: "risk" },
] as const;

const toneColor: Record<string, string> = {
  good: "#4c9a6e",
  warn: "#e0a63c",
  risk: "#d15249",
};

const adoption = [42, 55, 48, 62, 58, 70, 66, 78, 74, 84, 80, 90];

export function PulseboardMock({ caption }: { caption?: string }) {
  return (
    <figure className="my-12">
      <div
        className="overflow-hidden rounded-2xl border border-black/5"
        style={{
          backgroundColor: "#f4f2ec",
          boxShadow:
            "0 1px 2px rgba(0,0,0,0.06), 0 12px 32px -8px rgba(20,40,30,0.25)",
        }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-3 border-b border-black/5 bg-white/60 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e0655a]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#e5b046]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#4c9a6e]" />
          </div>
          <div className="mx-auto rounded-full bg-black/5 px-4 py-1 text-[11px] text-black/50">
            app.pulseboard.io/portfolio
          </div>
          <div className="w-10" />
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div
            className="hidden w-44 flex-col gap-1 p-4 text-[12px] font-medium sm:flex"
            style={{ backgroundColor: "#24493a", color: "#cfe0d5" }}
          >
            <p className="mb-4 text-sm font-semibold text-white">
              ● PulseBoard
            </p>
            {["Portfolio", "Accounts", "Renewals", "Playbooks", "Reports"].map(
              (nav, i) => (
                <span
                  key={nav}
                  className="rounded-lg px-3 py-2"
                  style={
                    i === 0
                      ? { backgroundColor: "#44805a", color: "#ffffff" }
                      : undefined
                  }
                >
                  {nav}
                </span>
              )
            )}
          </div>

          {/* Main panel */}
          <div className="flex-1 p-5 md:p-6">
            <div className="mb-5 flex items-baseline justify-between">
              <p className="text-sm font-semibold text-black/80">
                Portfolio Health
              </p>
              <p className="text-[11px] text-black/40">Q3 2026 · 132 accounts</p>
            </div>

            {/* Stat cards */}
            <div className="mb-5 grid grid-cols-3 gap-3">
              {[
                { label: "Healthy", value: "68%", tone: "good" },
                { label: "At Risk", value: "21%", tone: "warn" },
                { label: "Critical", value: "11%", tone: "risk" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-black/5 bg-white p-3 md:p-4"
                >
                  <div className="flex items-center gap-1.5 text-[11px] text-black/50">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: toneColor[stat.tone] }}
                    />
                    {stat.label}
                  </div>
                  <p className="mt-1 text-lg font-semibold text-black/85 md:text-xl">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-[1.2fr_1fr]">
              {/* Adoption trend bar chart */}
              <div className="rounded-xl border border-black/5 bg-white p-4">
                <p className="mb-3 text-[11px] font-medium text-black/50">
                  Product Adoption — last 12 weeks
                </p>
                <div className="flex h-24 items-end gap-1.5">
                  {adoption.map((v, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${v}%`,
                        backgroundColor: i >= 9 ? "#44805a" : "#b7cfc0",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Account list with health pills */}
              <div className="rounded-xl border border-black/5 bg-white p-4">
                <p className="mb-3 text-[11px] font-medium text-black/50">
                  Attention Needed
                </p>
                <div className="space-y-2.5">
                  {accounts.map((acc) => (
                    <div
                      key={acc.name}
                      className="flex items-center justify-between gap-2"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-medium text-black/80">
                          {acc.name}
                        </p>
                        <p className="text-[10px] text-black/40">{acc.arr}</p>
                      </div>
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-semibold text-white"
                        style={{ backgroundColor: toneColor[acc.tone] }}
                      >
                        {acc.health}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {caption && (
        <figcaption className="mt-3 text-center text-sm text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
