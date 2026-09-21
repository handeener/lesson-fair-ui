import { Home, Users, Settings } from "lucide-react";
import type { JSX } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="  w-64  border-r  border-white/10  bg-white/5  backdrop-blur-xl  p-4">
      <h1 className="text-xl font-bold mb-8 text-accent">HR Panel</h1>

      <nav className="space-y-2">
        <SidebarItem icon={<Home />} label="Dashboard" to = "/" />
        <SidebarItem icon={<Users />} label="Employees" to= "/employees" />
        <SidebarItem icon={<Settings />} label="Settings" to= "/settings" />
      </nav>
    </div>
  );
}

interface SidebarItemProps {
  icon: JSX.Element;
  label: string;
  active?: boolean;
}

function SidebarItem({
  icon,
  label,
  to,
}: {
  icon: React.ReactNode;
  label: string;
  to: string;
}) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <motion.div
          whileHover={{ x: 4 }}
          className={`
            flex items-center gap-3
            p-3 rounded-2xl
            transition-all
            ${
              isActive
                ? "bg-accent/20 text-accent"
                : "hover:bg-white/5"
            }
          `}
        >
          {icon}
          <span>{label}</span>
        </motion.div>
      )}
    </NavLink>
  );
}

function AddEmployee() {
  return (
    <button className="bg-accent px-4 py-2 rounded-lg hover:opacity-90">
      + Add Employee
    </button>
  );
}