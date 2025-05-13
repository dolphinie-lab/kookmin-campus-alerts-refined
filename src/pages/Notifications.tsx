
import React from 'react';
import { ArrowLeft, CheckCircle, FileText, MessageSquare, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MobileNavbar } from '@/components/MobileNavbar';

type NotificationItemProps = {
  id: string;
  icon: React.ElementType;
  course: string;
  title: string;
  time: string;
};

const NotificationItem = ({ icon: Icon, course, title, time }: NotificationItemProps) => {
  return (
    <div className="border-b py-4 px-4">
      <div className="flex items-center space-x-4">
        <div className="bg-gray-100 rounded-full p-2.5">
          <Icon className="h-5 w-5 text-gray-600" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-blue-600">{course}</p>
          <p className="text-sm">{title}</p>
          <p className="text-xs text-gray-500 mt-1">{time}</p>
        </div>
      </div>
    </div>
  );
};

const Notifications = () => {
  const notifications = [
    { 
      id: '1', 
      icon: MessageSquare, 
      course: '고객관계관리 (0485104-01) : 강좌 개요', 
      title: '새 공지사항이 등록되었습니다.',
      time: '3시간전 (05/13 오후 5:48)'
    },
    { 
      id: '2', 
      icon: FileText, 
      course: '고객관계관리 (0485104-01) : 11주차 [5월13일 - 5월19일]', 
      title: '새 파일가(이) 등록되었습니다.',
      time: '3시간전 (05/13 오후 5:46)'
    },
    { 
      id: '3', 
      icon: CheckCircle, 
      course: '시스템분석및설계 (0034408-01) : 11주차 [5월13일 - 5월19일]', 
      title: '새 퀴즈가(이) 등록되었습니다.',
      time: '10시간전 (05/13 오전 10:53)'
    },
    { 
      id: '4', 
      icon: FileText, 
      course: '시스템분석및설계 (0034408-01) : 11주차 [5월13일 - 5월19일]', 
      title: '새 파일가(이) 등록되었습니다.',
      time: '10시간전 (05/13 오전 10:51)'
    },
    { 
      id: '5', 
      icon: FileText, 
      course: '기업가정신과직무역량 (1280600-01) : 11주차 [5월13일 - 5월19일]', 
      title: '새 파일가(이) 등록되었습니다.',
      time: '1일전 (05/12 오후 4:12)'
    }
  ];

  return (
    <div className="min-h-screen bg-white pb-16">
      <div className="bg-kmublue-700 text-white p-4 flex items-center justify-center relative">
        <Link to="/" className="absolute left-4">
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-xl font-medium">알림</h1>
      </div>
      
      <div>
        {notifications.map(notification => (
          <NotificationItem 
            key={notification.id} 
            id={notification.id} 
            icon={notification.icon}
            course={notification.course}
            title={notification.title}
            time={notification.time}
          />
        ))}
      </div>
      
      <MobileNavbar />
    </div>
  );
};

export default Notifications;
