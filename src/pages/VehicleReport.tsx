import { Shield, FileText, Wrench, GitCommit } from "lucide-react";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

const gaugeData = [{ value: 85 }];

const timeline = [
  { year: "2021", km: "22,000 km", source: "RTO Record", status: "verified" },
  { year: "2022", km: "40,000 km", source: "Insurance Claim", status: "verified" },
  { year: "2023", km: "61,000 km", source: "Service Record", status: "verified" },
  { year: "2024", km: "20,000 km", source: "Mileage Rollback Detected", status: "anomaly" },
];

const sources = [
  { icon: Shield, name: "RTO Records", status: "Verified", ok: true },
  { icon: FileText, name: "Insurance Records", status: "Verified", ok: true },
  { icon: Wrench, name: "Service Center Log", status: "Conflict Detected", ok: false },
  { icon: GitCommit, name: "Blockchain Record", status: "Immutable", ok: true },
];

export default function VehicleReport() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between border border-border rounded-lg p-4 bg-background">
        <div>
          <h1 className="text-lg font-semibold text-foreground">
            MH12AB1234{" "}
            <span className="text-muted-foreground font-normal">
              · 2019 Maruti Swift · DZire VXI · Pune, MH
            </span>
          </h1>
        </div>
        <span className="bg-red-50 text-red-700 font-semibold text-xs px-3 py-1 rounded-full border border-red-200">
          FRAUD SUSPECTED
        </span>
      </div>

      {/* Fraud Score Gauge */}
      <div className="flex justify-center">
        <div className="border border-border rounded-lg p-6 bg-background max-w-sm w-full text-center">
          <p className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-2">
            Fraud Probability Score
          </p>
          <div className="flex justify-center">
            <RadialBarChart
              width={200}
              height={200}
              cx={100}
              cy={100}
              innerRadius={70}
              outerRadius={90}
              startAngle={180}
              endAngle={0}
              barSize={12}
              data={gaugeData}
            >
              <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
              <RadialBar
                dataKey="value"
                cornerRadius={6}
                fill="#dc2626"
                background={{ fill: "#f1f5f9" }}
                angleAxisId={0}
              />
            </RadialBarChart>
          </div>
          <p className="text-5xl font-bold text-red-600 -mt-16">85%</p>
          <p className="text-sm text-muted-foreground mt-3">
            High Risk — Mileage rollback pattern detected
          </p>
        </div>
      </div>

      {/* Two Column */}
      <div className="grid grid-cols-2 gap-6">
        {/* Mileage Timeline */}
        <div className="border border-border rounded-lg p-5 bg-background">
          <h2 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4">
            Mileage Timeline
          </h2>
          <div className="relative pl-6 space-y-6">
            <div className="absolute left-[9px] top-1 bottom-1 w-px bg-border" />
            {timeline.map((t, i) => (
              <div key={i} className="relative">
                <div
                  className={`absolute -left-6 top-0.5 h-4 w-4 rounded-full border-2 ${
                    t.status === "anomaly"
                      ? "bg-red-500 border-red-300"
                      : "bg-green-500 border-green-300"
                  }`}
                />
                <div className="flex items-baseline gap-3">
                  <span className="text-sm font-semibold text-foreground">{t.year}</span>
                  <span className="text-sm text-foreground">{t.km}</span>
                </div>
                <p className={`text-xs mt-0.5 ${t.status === "anomaly" ? "text-red-600 font-medium" : "text-muted-foreground"}`}>
                  {t.status === "anomaly" ? "⚠ ANOMALY" : "✓ Verified"} — {t.source}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-red-50 border border-red-200 rounded-md p-3 text-sm text-red-700">
            Mileage decreased by 41,000 km between 2023–2024. Impossible under normal conditions.
          </div>
        </div>

        {/* Data Source Verification + Graph Connections */}
        <div className="space-y-4">
          <div className="border border-border rounded-lg p-5 bg-background">
            <h2 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4">
              Data Source Verification
            </h2>
            <div className="space-y-3">
              {sources.map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <s.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="flex-1 text-sm text-foreground">{s.name}</span>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      s.ok
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-600 border border-red-200"
                    }`}
                  >
                    {s.ok ? "✓" : "✗"} {s.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-border rounded-lg p-5 bg-background">
            <h2 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4">
              Graph Connections
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Owner</span>
                <span className="text-foreground">Rajesh Kumar · <span className="text-red-600 text-xs">3 vehicles in fraud cluster</span></span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service Center</span>
                <span className="text-foreground">AutoFix Hub · <span className="text-red-600 text-xs">Risk Score 94</span></span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Insurance</span>
                <span className="text-foreground">Policy #MH-2023-44821</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Claim filed 2 days after last service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
