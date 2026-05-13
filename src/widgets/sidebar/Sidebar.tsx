import { Home, Users, Settings } from "lucide-react";
import type { JSX } from "react";
import Employees from "../../pages/Employee";

export default function Sidebar() {
  return (
    <div className="w-64 bg-card border-r border-white/10 p-4">
      <h1 className="text-xl font-bold mb-8 text-accent">HR Panel</h1>

      <nav className="space-y-2">
        <SidebarItem icon={<Home />} label="Dashboard" active />
        <SidebarItem icon={<Users />} label="Employees" />
        <SidebarItem icon={<Settings />} label="Settings" />
        <SidebarItem icon={<Employees />} label="Emplıee" />
      </nav>
    </div>
  );
}

interface SidebarItemProps {
  icon: JSX.Element;
  label: string;
  active?: boolean;
}

function SidebarItem({ icon, label, active }: SidebarItemProps) {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition
      ${active ? "bg-accent/20 text-accent" : "hover:bg-sky-600 "}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function AddEmployee() {
  return (
    <button className="bg-accent px-4 py-2 rounded-lg hover:opacity-90">
      + Add Employee
    </button>
  );
}