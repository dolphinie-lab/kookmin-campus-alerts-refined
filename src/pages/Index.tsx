
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { SideCalendar } from '@/components/SideCalendar';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        
        <main className={`flex-1 p-6 md:ml-64 transition-all duration-300`}>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <Dashboard />
            </div>
            <div className="w-full lg:w-80 shrink-0">
              <SideCalendar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
