import { useState } from "react";
import EmployeeTable from "../features/employees/EmployeeTable";
import { employees } from "../features/employees/data";

export default function Employees() {
  const [search, setSearch] = useState("");

  const filtered = employees.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      <h2 className="text-2xl font-semibold">Employees</h2>

      {/* SEARCH */}
      <input
        placeholder="Search employee..."
        className="bg-soft px-4 py-2 rounded-lg w-80 outline-none"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <EmployeeTable data={filtered} />

    </div>
  );
}