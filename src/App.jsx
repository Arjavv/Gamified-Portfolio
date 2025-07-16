import { Outlet } from 'react-router-dom';
import TerminalHeader from './components/TerminalHeader';
import NavTabs from './components/NavTabs';
import Sidebar from './components/Sidebar';
import ActiveQuestPanel from './components/ActiveQuestPanel';

function App() {
  return (
    <div className="flex flex-col h-screen bg-black text-white font-iceland overflow-hidden">
      <TerminalHeader />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        {/* Main content and ActiveQuestPanel side by side */}
        <div className="flex flex-1 h-full">
          <div className="flex-1 relative">
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
