
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
        
        <main className="flex-1 transition-all duration-300 md:ml-64">
          <div className="mx-auto max-w-[1400px] p-4">
            <div className="mb-6 rounded-xl bg-white p-6 shadow-sm">
              <h1 className="mb-2 text-3xl font-bold text-[#6E59A5]">My Dashboard</h1>
              <p className="text-gray-600">현재 나의 상태를 확인해 보고 학업계획과 진로계획을 점검해 보세요.</p>
            </div>
            
            <div className="flex flex-col gap-6 lg:flex-row">
              <div className="flex-1">
                <Dashboard />
              </div>
              <div className="w-full lg:w-80 shrink-0">
                <SideCalendar />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
