
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, MessageSquare, Bell, Calendar, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

export const MobileNavbar = () => {
  const location = useLocation();

  const navItems = [
    {
      icon: Home,
      label: '홈',
      path: '/',
    },
    {
      icon: MessageSquare,
      label: '대화',
      path: '/messages',
    },
    {
      icon: Bell,
      label: '알림',
      path: '/notifications',
    },
    {
      icon: Calendar,
      label: '일정',
      path: '/calendar',
    },
    {
      icon: MoreHorizontal,
      label: '더보기',
      path: '/more',
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white z-50">
      <div className="grid grid-cols-5">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center py-2 text-gray-500",
              location.pathname === item.path && "text-kmublue-700"
            )}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
