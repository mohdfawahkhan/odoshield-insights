import { useLocation, Link } from "react-router-dom";
import {
  Shield,
  LayoutDashboard,
  Search,
  FileText,
  Network,
  BadgeCheck,
  Settings,
} from "lucide-react";

const navItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Vehicle Lookup", url: "/lookup", icon: Search },
  { title: "Risk Reports", url: "/report/MH12AB1234", icon: FileText },
  { title: "Fraud Rings", url: "/fraud-rings", icon: Network },
  { title: "Trust Certificates", url: "/certificate", icon: BadgeCheck },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const location = useLocation();

  const isActive = (url: string) => {
    if (url === "/") return location.pathname === "/";
    return location.pathname.startsWith(url);
  };

  return (
    <aside className="w-60 shrink-0 border-r border-border flex flex-col bg-background">
      <div className="h-14 flex items-center gap-2 px-5 border-b border-border">
        <Shield className="h-5 w-5 text-primary" />
        <span className="text-base font-semibold tracking-tight text-foreground">
          OdoShield
        </span>
      </div>

      <nav className="flex-1 py-3 px-3 space-y-0.5">
        {navItems.map((item) => {
          const active = isActive(item.url);
          return (
            <Link
              key={item.title}
              to={item.url}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors duration-150 ${
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border p-4 flex items-center gap-3">
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">
          PM
        </div>
        <div className="min-w-0">
          <p className="text-sm font-medium text-foreground truncate">Priya M.</p>
          <p className="text-xs text-muted-foreground">Analyst</p>
        </div>
      </div>
    </aside>
  );
}
