import { Outlet } from 'react-router-dom';
import TerminalHeader from './components/TerminalHeader';
import NavTabs from './components/NavTabs';
import Sidebar from './components/Sidebar';
import ActiveQuestPanel from './components/ActiveQuestPanel';

function App() {
  return (
    <div className="flex flex-col h-screen bg-black text-white font-iceland overflow-hidden">
      <TerminalHeader />

      <div className="flex flex-col lg:flex-row flex-1 overflow-auto lg:overflow-hidden relative">
        <Sidebar />
        {/* Main content and ActiveQuestPanel side by side */}
        <div className="flex flex-col lg:flex-row w-full lg:flex-1 lg:h-full">
          <div className="w-full lg:flex-1 relative lg:pr-[350px]">
            <Outlet />
          </div>
          <ActiveQuestPanel />
        </div>
      </div>

      <NavTabs />
    </div>
  );
}

export default App;
