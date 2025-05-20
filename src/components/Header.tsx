
import React, { useState } from 'react';
import { Bell, Settings, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NotificationPanel } from './NotificationPanel';
import { Link } from 'react-router-dom';

export const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <header className="bg-[#7E69AB] text-white p-3 flex items-center justify-between sticky top-0 z-50 shadow-md">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-white p-1 md:hidden" onClick={toggleSidebar}>
          <Menu size={24} />
        </Button>
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/c5db53ef-2309-43eb-9247-0d22c3c8c4b6.png" 
            alt="국민대학교 로고" 
            className="h-12 w-12 object-contain"
          />
        </Link>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Button 
            variant="ghost" 
            className="text-white p-1 relative" 
            onClick={toggleNotifications}
          >
            <Bell size={24} />
            <span className="notification-dot important"></span>
          </Button>
          
          {showNotifications && <NotificationPanel />}
        </div>
        
        <Link to="/notification-settings">
          <Button variant="ghost" className="text-white p-1">
            <Settings size={24} />
          </Button>
        </Link>
        
        <Avatar className="h-9 w-9 border-2 border-white">
          <AvatarImage src="/placeholder.svg" alt="사용자" />
          <AvatarFallback>학생</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
