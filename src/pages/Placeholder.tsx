import { useLocation } from "react-router-dom";

export default function Placeholder() {
  const location = useLocation();
  const name = location.pathname.replace("/", "").replace(/-/g, " ");

  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <p className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">
          {name || "Page"}
        </p>
        <p className="text-xs text-muted-foreground mt-1">Coming soon</p>
      </div>
    </div>
  );
}
