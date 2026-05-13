import type { Employee } from "./types";

export default function EmployeeTable({
  data,
}: {
  data: Employee[];
}) {
  return (
    <div className="bg-card rounded-2xl border border-white/10 overflow-hidden">
      <table className="w-full text-left">
        
        <thead className="bg-soft text-gray-400 text-sm">
          <tr>
            <th className="p-4">Name</th>
            <th>Role</th>
            <th>Department</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((emp) => (
            <tr
              key={emp.id}
              className="border-t border-white/5 hover:bg-white/5 transition"
            >
              <td className="p-4">{emp.name}</td>
              <td>{emp.role}</td>
              <td>{emp.department}</td>
              <td>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    emp.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {emp.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}