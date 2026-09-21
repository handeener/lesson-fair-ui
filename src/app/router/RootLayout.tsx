import { Outlet } from "react-router-dom";
import Sidebar from "../../widgets/sidebar/Sidebar";
import Header from "../../widgets/header/Header";

import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function RootLayout() {

  const location = useLocation();  
  return (
    <div className="
      flex
      h-screen
      bg-[#0b1120]
      text-white
      overflow-hidden
      relative
    ">

      {/* Glow BG */}
      <div className="
        absolute top-[-200px]
        right-[-100px]
        h-[500px]
        w-[500px]
        rounded-full
        bg-purple-600/20
        blur-3xl
      "/>

      <div className="
        absolute bottom-[-200px]
        left-[-100px]
        h-[400px]
        w-[400px]
        rounded-full
        bg-blue-600/20
        blur-3xl
      "/>

      <Sidebar />

      <div className="flex-1 flex flex-col z-10">
        <Header />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
          <AnimatePresence mode="wait">
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}