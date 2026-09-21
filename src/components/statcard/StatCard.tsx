import { motion } from "framer-motion";

export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="
        relative
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-white/5
        backdrop-blur-xl
        p-5
        shadow-[0_0_30px_rgba(99,102,241,0.08)]
      "
    >
      {/* Glow */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-br
        from-accent/10
        to-accent2/5
        opacity-50
      " />

      <div className="relative z-10">
        <p className="text-sm text-gray-400">
          {title}
        </p>

        <h3 className="text-3xl font-bold mt-3">
          {value}
        </h3>

        <div className="mt-3 flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-green-400" />
          <span className="text-green-400 text-sm">
            +12% this month
          </span>
        </div>
      </div>
    </motion.div>
  );
}