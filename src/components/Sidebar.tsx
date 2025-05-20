
import React from 'react';
import { Home, BookOpen, Calendar, FileText, MessageCircle, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar?: () => void;
}

export const Sidebar = ({ isOpen, closeSidebar }: SidebarProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const menuItems = [
    {
      icon: Home,
      label: '대시보드',
      path: '/',
    },
    {
      icon: BookOpen,
      label: '강의실',
      path: '/courses',
    },
    {
      icon: Calendar,
      label: '일정',
      path: '/calendar',
    },
    {
      icon: FileText,
      label: '과제',
      path: '/assignments',
    },
    {
      icon: MessageCircle,
      label: '메시지',
      path: '/messages',
    },
    {
      icon: User,
      label: '내 정보',
      path: '/profile',
    }
  ];

  const handleClick = () => {
    if (isMobile && closeSidebar) {
      closeSidebar();
    }
  };

  return (
    <aside 
      className={cn(
        "bg-[#7E69AB] fixed inset-y-0 left-0 z-40 w-64 transform transition-transform duration-300 md:translate-x-0 border-r border-[#9b87f5]/20",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="p-5">
        <div className="flex items-center justify-center mb-8">
          <Link to="/" className="text-white font-bold text-2xl">
            E-Campus
          </Link>
        </div>
        
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} onClick={handleClick}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start text-white/80 hover:text-white hover:bg-white/10",
                      location.pathname === item.path && "bg-white/20 text-white font-semibold"
                    )}
                  >
                    <item.icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="bg-white/10 p-4 rounded-lg border border-white/10">
          <h3 className="font-medium text-white">학기 안내</h3>
          <p className="text-sm text-white/80 mt-1">2025-1학기</p>
          <p className="text-xs text-white/70 mt-1">남은 기간: 6주</p>
        </div>
      </div>
    </aside>
  );
};
