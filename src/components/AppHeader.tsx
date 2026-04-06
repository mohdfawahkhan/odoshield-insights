import { Search, Bell } from "lucide-react";

export function AppHeader() {
  return (
    <header className="h-14 border-b border-border flex items-center justify-between px-6 bg-background shrink-0">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search VIN, Registration, Owner ID…"
          className="w-96 h-9 pl-9 pr-4 text-sm rounded-md border border-border bg-card focus:outline-none focus:ring-1 focus:ring-ring placeholder:text-muted-foreground"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-1.5 rounded-md hover:bg-muted transition-colors duration-150">
          <Bell className="h-5 w-5 text-muted-foreground" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-destructive" />
        </button>
        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-semibold">
          PM
        </div>
      </div>
    </header>
  );
}
