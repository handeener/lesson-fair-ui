import './App.css'

import Sidebar from "./widgets/sidebar/Sidebar";
import Header from "./widgets/header/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex h-screen bg-bg">
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
