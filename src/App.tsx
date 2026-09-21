import './App.css'

import Sidebar from "./widgets/sidebar/Sidebar";
import Header from "./widgets/header/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (

    <div className="flex h-screen bg-[#0b1120]  text-white  overflow-hidden">

<div className="
  absolute
  top-[-200px]
  right-[-100px]
  h-[500px]
  w-[500px]
  rounded-full
  bg-purple-600/20
  blur-3xl
"/>     
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
