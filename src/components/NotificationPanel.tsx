
import React from 'react';
import { Bell, BookOpen, Calendar, FileText, MessageCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

type NotificationType = 'assignment' | 'announcement' | 'lecture' | 'important';
type NotificationItemProps = {
  id: string;
  type: NotificationType;
  title: string;
  course: string;
  time: string;
  isRead: boolean;
};

const NotificationItem = ({ id, type, title, course, time, isRead }: NotificationItemProps) => {
  const getIcon = () => {
    switch (type) {
      case 'assignment':
        return <FileText className="h-5 w-5 text-notification-assignment" />;
      case 'announcement':
        return <Bell className="h-5 w-5 text-notification-announcement" />;
      case 'lecture':
        return <BookOpen className="h-5 w-5 text-notification-lecture" />;
      case 'important':
        return <Calendar className="h-5 w-5 text-notification-important" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  return (
    <div className={`p-3 border-b last:border-b-0 ${!isRead ? "bg-gray-50" : ""}`}>
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{title}</p>
          <p className="text-xs text-gray-500 truncate">{course}</p>
          <p className="text-xs text-gray-400">{time}</p>
        </div>
        {!isRead && (
          <div className={`h-2 w-2 rounded-full bg-notification-${type}`}></div>
        )}
      </div>
    </div>
  );
};

export const NotificationPanel = () => {
  const notifications = {
    all: [
      { id: '1', type: 'assignment', title: '프로그래밍 과제 제출', course: '컴퓨터 프로그래밍', time: '1시간 전', isRead: false },
      { id: '2', type: 'announcement', title: '중간고사 일정 공지', course: '데이터 구조', time: '3시간 전', isRead: false },
      { id: '3', type: 'lecture', title: '강의자료 업로드됨', course: '알고리즘', time: '어제', isRead: true },
      { id: '4', type: 'important', title: '수강신청 기간 안내', course: '학사 공지', time: '2일 전', isRead: true },
      { id: '5', type: 'announcement', title: '학과 MT 신청', course: '학과 공지', time: '3일 전', isRead: true },
    ],
    assignments: [
      { id: '1', type: 'assignment', title: '프로그래밍 과제 제출', course: '컴퓨터 프로그래밍', time: '1시간 전', isRead: false },
      { id: '6', type: 'assignment', title: '보고서 제출', course: '공학 설계', time: '3일 전', isRead: true },
    ],
    announcements: [
      { id: '2', type: 'announcement', title: '중간고사 일정 공지', course: '데이터 구조', time: '3시간 전', isRead: false },
      { id: '5', type: 'announcement', title: '학과 MT 신청', course: '학과 공지', time: '3일 전', isRead: true },
    ],
    lectures: [
      { id: '3', type: 'lecture', title: '강의자료 업로드됨', course: '알고리즘', time: '어제', isRead: true },
      { id: '7', type: 'lecture', title: '보충 강의 영상', course: '운영체제', time: '4일 전', isRead: true },
    ],
    important: [
      { id: '4', type: 'important', title: '수강신청 기간 안내', course: '학사 공지', time: '2일 전', isRead: true },
      { id: '8', type: 'important', title: '등록금 납부 기간', course: '학사 공지', time: '7일 전', isRead: true },
    ],
  };

  return (
    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border w-80 animate-fade-in z-50">
      <div className="p-4 border-b">
        <h3 className="font-medium text-lg">알림</h3>
      </div>
      
      <Tabs defaultValue="all">
        <div className="p-2">
          <TabsList className="w-full grid grid-cols-5">
            <TabsTrigger value="all" className="text-xs">전체</TabsTrigger>
            <TabsTrigger value="assignments" className="text-xs">과제</TabsTrigger>
            <TabsTrigger value="announcements" className="text-xs">공지</TabsTrigger>
            <TabsTrigger value="lectures" className="text-xs">강의</TabsTrigger>
            <TabsTrigger value="important" className="text-xs">중요</TabsTrigger>
          </TabsList>
        </div>
        
        <ScrollArea className="h-[300px]">
          <TabsContent value="all" className="m-0">
            {notifications.all.map(notification => (
              <NotificationItem key={notification.id} {...notification} />
            ))}
          </TabsContent>
          
          <TabsContent value="assignments" className="m-0">
            {notifications.assignments.map(notification => (
              <NotificationItem key={notification.id} {...notification} />
            ))}
          </TabsContent>
          
          <TabsContent value="announcements" className="m-0">
            {notifications.announcements.map(notification => (
              <NotificationItem key={notification.id} {...notification} />
            ))}
          </TabsContent>
          
          <TabsContent value="lectures" className="m-0">
            {notifications.lectures.map(notification => (
              <NotificationItem key={notification.id} {...notification} />
            ))}
          </TabsContent>
          
          <TabsContent value="important" className="m-0">
            {notifications.important.map(notification => (
              <NotificationItem key={notification.id} {...notification} />
            ))}
          </TabsContent>
        </ScrollArea>
      </Tabs>
      
      <div className="p-3 border-t">
        <Link to="/notification-settings">
          <Button variant="outline" size="sm" className="w-full text-sm">
            <Settings className="mr-2 h-4 w-4" />
            알림 설정
          </Button>
        </Link>
      </div>
    </div>
  );
};
