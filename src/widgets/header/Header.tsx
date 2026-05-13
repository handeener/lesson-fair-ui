import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <div className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-card">
      
      <div className="flex items-center gap-3 bg-soft px-3 py-2 rounded-lg w-96">
        <Search size={18} />
        <input
          className="bg-transparent outline-none w-full"
          placeholder="Search..."
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell className="cursor-pointer hover:text-accent" />

        <div className="w-9 h-9 bg-accent rounded-full"></div>
      </div>
    </div>
  );
}