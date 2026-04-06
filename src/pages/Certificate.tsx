import { useState } from "react";
import { Download, ChevronDown, ChevronUp, BadgeCheck, ShieldCheck } from "lucide-react";

export default function Certificate() {
  const [howOpen, setHowOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* LEFT - Trust Status */}
      <div className="border border-border rounded-lg p-6 bg-background">
        <h2 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4">
          Vehicle Trust Status
        </h2>

        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm font-semibold text-foreground">MH02XY3344</span>
          <span className="text-sm text-muted-foreground">· 2020 Honda City</span>
        </div>

        <div className="flex gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 font-semibold text-xs px-3 py-1.5 rounded-full border border-green-200">
            <ShieldCheck className="h-3.5 w-3.5" />
            TRUSTED VEHICLE
          </span>
          <span className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 font-semibold text-xs px-3 py-1.5 rounded-full border border-green-200">
            <BadgeCheck className="h-3.5 w-3.5" />
            VERIFIED OWNER
          </span>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">OdoShield Trust Score</span>
            <span className="font-semibold text-green-700">97/100</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Current Verified Mileage</span>
            <span className="font-semibold text-foreground">34,200 km</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Certificate ID</span>
            <span className="font-mono text-xs text-foreground">ODOSH-2024-TVC-00812</span>
          </div>
        </div>

        <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-colors duration-150">
          <Download className="h-4 w-4" />
          Download Certificate
        </button>
      </div>

      {/* RIGHT - Verification Progress */}
      <div className="space-y-4">
        <div className="border border-border rounded-lg p-6 bg-background">
          <h2 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4">
            Next Verification Due
          </h2>
          <div className="h-2 rounded-full bg-muted overflow-hidden mb-2">
            <div className="h-full rounded-full bg-primary" style={{ width: "70%" }} />
          </div>
          <p className="text-xs text-muted-foreground">
            Last verified: Jan 2024 · Next due: Jul 2024
          </p>
        </div>

        <div className="border border-border rounded-lg p-6 bg-background">
          <h2 className="text-xs font-semibold tracking-wide uppercase text-muted-foreground mb-4">
            Resale Value Impact
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Without certificate</span>
              <span className="text-foreground font-medium">₹6.2L estimated</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">With OdoShield cert</span>
              <span className="text-green-700 font-semibold">₹6.7L–₹6.9L (+8%)</span>
            </div>
          </div>
        </div>

        <div className="border border-border rounded-lg bg-background">
          <button
            onClick={() => setHowOpen(!howOpen)}
            className="w-full flex items-center justify-between p-4 text-sm font-medium text-foreground hover:bg-muted transition-colors duration-150 rounded-lg"
          >
            How it works
            {howOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          {howOpen && (
            <div className="px-4 pb-4 text-sm text-muted-foreground space-y-2">
              <p>1. Vehicle data is aggregated from RTO records, insurance claims, service center logs, and blockchain-verified sources.</p>
              <p>2. Our graph-based anomaly detection engine identifies inconsistencies in mileage patterns across multiple data points.</p>
              <p>3. Vehicles that pass all checks receive an OdoShield Trust Certificate, increasing buyer confidence and resale value.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
