export default function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="relative bg-card p-5 rounded-2xl border border-white/10 overflow-hidden group">
      
      {/* glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-accent2/10 opacity-0 group-hover:opacity-100 transition "></div>

      <p className="text-sm text-gray-400">{title}</p>
      <h3 className="text-3xl font-bold mt-2">{value}</h3>

      <div className="mt-2 text-green-400 text-sm">+12%</div>
    </div>
  );
}
