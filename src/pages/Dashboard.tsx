import { Link } from "react-router-dom";

const stats = [
  { label: "Vehicles Scanned", value: "1,24,847", sub: "+2.3% this week", subColor: "text-green-700" },
  { label: "Fraud Rings Detected", value: "312", sub: "14 new this month", subColor: "text-red-600" },
  { label: "Avg Loss Prevented", value: "₹1.24L", sub: "per flagged vehicle", subColor: "text-muted-foreground" },
  { label: "Trust Certificates Issued", value: "89,241", sub: "Active", subColor: "text-muted-foreground" },
];

const suspiciousCenters = [
  { name: "AutoFix Hub, Pune", score: 94, level: "high" },
  { name: "SpeedWheel Motors, Delhi", score: 81, level: "medium" },
  { name: "QuickLube Garage, Mumbai", score: 67, level: "medium" },
];

const flaggedVehicles = [
  { vin: "MH12AB1234", owner: "Rajesh K.", score: 91 },
  { vin: "DL3CAF9021", owner: "Anil S.", score: 87 },
  { vin: "KA01MX4532", owner: "Meera P.", score: 79 },
];

const riskDist = [
  { label: "High Risk", pct: 18, color: "bg-red-500" },
  { label: "Medium", pct: 34, color: "bg-amber-500" },
  { label: "Low", pct: 48, color: "bg-green-500" },
];

// SVG Graph data
const cx = 300, cy = 200, r = 140;
const centerNode = { x: cx, y: cy, label: "AutoFix Hub, Pune" };
const carNodes = [
  { id: "MH12AB1234", suspicious: true },
  { id: "MH14CD5678", suspicious: true },
  { id: "DL3CAF9021", suspicious: true },
  { id: "KA01MX4532", suspicious: true },
  { id: "MH02XY3344", suspicious: false },
  { id: "PB10EE9988", suspicious: false },
].map((n, i, arr) => {
  const angle = (2 * Math.PI * i) / arr.length - Math.PI / 2;
  return { ...n, x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
});

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="border border-border rounded-lg p-4 bg-background">
            <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground">{s.label}</p>
            <p className="text-2xl font-bold text-foreground mt-1">{s.value}</p>
            <p className={`text-xs mt-1 ${s.subColor}`}>{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Fraud Cluster Map */}
        <div className="col-span-2 border border-border rounded-lg p-5 bg-background">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
              Fraud Cluster Map
            </h2>
            <span className="inline-flex items-center gap-1 bg-red-50 text-red-600 text-xs font-medium px-2 py-0.5 rounded-full border border-red-200">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Live
            </span>
          </div>

          <svg viewBox="0 0 600 400" className="w-full" style={{ maxHeight: 360 }}>
            {/* Edges */}
            {carNodes.map((n) => (
              <line
                key={n.id}
                x1={centerNode.x}
                y1={centerNode.y}
                x2={n.x}
                y2={n.y}
                stroke={n.suspicious ? "#dc2626" : "#16a34a"}
                strokeWidth={1.5}
                strokeOpacity={0.5}
              />
            ))}
            {/* Center node (square) */}
            <rect
              x={centerNode.x - 14}
              y={centerNode.y - 14}
              width={28}
              height={28}
              rx={4}
              fill="#dc2626"
            />
            <text x={centerNode.x} y={centerNode.y + 32} textAnchor="middle" className="text-[10px]" fill="#64748b">
              {centerNode.label}
            </text>
            {/* Car nodes (circles) */}
            {carNodes.map((n) => (
              <g key={n.id}>
                <circle cx={n.x} cy={n.y} r={10} fill={n.suspicious ? "#dc2626" : "#16a34a"} />
                <text x={n.x} y={n.y + 22} textAnchor="middle" className="text-[9px]" fill="#64748b">
                  {n.id}
                </text>
              </g>
            ))}
          </svg>

          {/* Legend */}
          <div className="flex items-center gap-6 mt-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-foreground" /> Car Node</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-foreground" /> Service Center</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-red-500" /> Suspicious</span>
            <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-green-500" /> Verified</span>
          </div>
        </div>

        {/* Insights Panel */}
        <div className="col-span-1 space-y-4">
          {/* Top Suspicious Service Centers */}
          <div className="border border-border rounded-lg p-4 bg-background">
            <h3 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-3">
              Top Suspicious Service Centers
            </h3>
            <div className="space-y-2.5">
              {suspiciousCenters.map((c) => (
                <div key={c.name} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{c.name}</span>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      c.level === "high"
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {c.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recently Flagged Vehicles */}
          <div className="border border-border rounded-lg p-4 bg-background">
            <h3 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-3">
              Recently Flagged Vehicles
            </h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-muted-foreground">
                  <th className="text-left font-medium pb-2">VIN</th>
                  <th className="text-left font-medium pb-2">Owner</th>
                  <th className="text-left font-medium pb-2">Score</th>
                  <th className="text-right font-medium pb-2" />
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {flaggedVehicles.map((v) => (
                  <tr key={v.vin}>
                    <td className="py-2 font-mono text-xs text-foreground">{v.vin}</td>
                    <td className="py-2 text-foreground">{v.owner}</td>
                    <td className="py-2 text-red-600 font-medium">{v.score}</td>
                    <td className="py-2 text-right">
                      <Link to={`/report/${v.vin}`} className="text-primary text-xs font-medium hover:underline">
                        View Report
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Risk Distribution */}
          <div className="border border-border rounded-lg p-4 bg-background">
            <h3 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-3">
              Risk Distribution
            </h3>
            <div className="space-y-3">
              {riskDist.map((r) => (
                <div key={r.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-foreground">{r.label}</span>
                    <span className="text-muted-foreground">{r.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div className={`h-full rounded-full ${r.color}`} style={{ width: `${r.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
