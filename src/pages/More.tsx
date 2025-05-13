
import React from 'react';
import { ArrowLeft, Megaphone, HelpCircle, Languages, Bell, Info, MessageCircle, LockKeyhole, LogOut, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MobileNavbar } from '@/components/MobileNavbar';

type MenuItem = {
  id: string;
  icon: React.ElementType;
  label: string;
  path: string;
  right?: React.ReactNode;
};

type MenuSectionProps = {
  items: MenuItem[];
};

const MenuSection = ({ items }: MenuSectionProps) => {
  return (
    <div className="bg-white mb-2">
      {items.map((item) => (
        <Link key={item.id} to={item.path}>
          <div className="flex items-center justify-between px-4 py-4 border-b">
            <div className="flex items-center">
              <div className="bg-gray-100 rounded-full p-2.5 mr-4">
                <item.icon className="h-5 w-5 text-gray-600" />
              </div>
              <span>{item.label}</span>
            </div>
            <div className="flex items-center">
              {item.right}
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

const More = () => {
  const infoMenuItems: MenuItem[] = [
    {
      id: '1',
      icon: Megaphone,
      label: '공지사항',
      path: '/announcements',
    },
    {
      id: '2',
      icon: HelpCircle,
      label: 'Q&A',
      path: '/faq',
    },
  ];
  
  const settingsMenuItems: MenuItem[] = [
    {
      id: '3',
      icon: Languages,
      label: '언어설정',
      path: '/language-settings',
      right: <span className="text-red-500 mr-2">한글</span>,
    },
    {
      id: '4',
      icon: Bell,
      label: '알림설정',
      path: '/notification-settings',
    },
    {
      id: '5',
      icon: Info,
      label: '프로그램 정보',
      path: '/program-info',
    },
    {
      id: '6',
      icon: MessageCircle,
      label: '문의하기',
      path: '/contact',
    },
  ];
  
  const accountMenuItems: MenuItem[] = [
    {
      id: '7',
      icon: LockKeyhole,
      label: '본인인증관리',
      path: '/account-verification',
    },
    {
      id: '8',
      icon: LogOut,
      label: '로그아웃',
      path: '/logout',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-16">
      <div className="bg-kmublue-700 text-white p-4 flex items-center justify-center relative">
        <Link to="/" className="absolute left-4">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-medium">더보기</h1>
      </div>
      
      <div className="mt-2">
        <MenuSection items={infoMenuItems} />
        <MenuSection items={settingsMenuItems} />
        <MenuSection items={accountMenuItems} />
      </div>
      
      <MobileNavbar />
    </div>
  );
};

export default More;
