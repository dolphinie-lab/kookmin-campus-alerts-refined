import React, { useState } from 'react';
import { Bell, BookOpen, FileText, MessageSquare, Settings, X } from 'lucide-react';
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
        return <MessageSquare className="h-5 w-5 text-notification-announcement" />;
      case 'lecture':
        return <BookOpen className="h-5 w-5 text-notification-lecture" />;
      case 'important':
        return <Bell className="h-5 w-5 text-notification-important" />;
      default:
        return <Bell className="h-5 w-5" />;
    }
  };

  return (
    <div className={`p-3 border-b last:border-b-0 ${!isRead ? "bg-gray-50" : ""}`}>
      <div className="flex items-start space-x-3">
        <div className="bg-gray-100 rounded-full p-3 flex-shrink-0">
          {getIcon()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium text-gray-900 truncate">{course}</p>
            <button className="text-red-500">
              <X size={16} />
            </button>
          </div>
          <p className="text-xs text-gray-700">{title}</p>
          <p className="text-xs text-gray-400">{time}</p>
        </div>
      </div>
    </div>
  );
};

export const NotificationPanel = () => {
  const [activeTab, setActiveTab] = useState("lecture");
  const [showAllNotifications, setShowAllNotifications] = useState(false);
  
  const notifications = {
    all: [
      { id: '1', type: 'assignment' as NotificationType, title: '새 과제가 등록되었습니다', course: '고객관계관리 (0485104-01)', time: '2025-05-13 17:46:27', isRead: false },
      { id: '2', type: 'announcement' as NotificationType, title: '새 공지사항이 등록되었습니다', course: '고객관계관리 (0485104-01)', time: '2025-05-13 17:48:04', isRead: false },
    ],
    assignments: [
      { id: '1', type: 'assignment' as NotificationType, title: '새 과제가 등록되었습니다', course: '고객관계관리 (0485104-01)', time: '2025-05-13 17:46:27', isRead: false },
    ],
    announcements: [
      { id: '2', type: 'announcement' as NotificationType, title: '새 공지사항이 등록되었습니다', course: '고객관계관리 (0485104-01)', time: '2025-05-13 17:48:04', isRead: false },
    ],
    lectures: [],
  };

  const handleViewAllNotifications = () => {
    setShowAllNotifications(true);
  };

  return (
    <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border w-[400px] animate-fade-in z-50">
      <div className="p-3 border-b">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-lg">알림</h3>
          <span className="text-sm text-gray-500">새 알림이 {notifications.all.length}개 있습니다.</span>
        </div>
      </div>
      
      <div className="p-2">
        <div className="grid grid-cols-2 gap-2 mb-2">
          <Button variant="outline" size="sm" className="w-full text-gray-700">메시지 모두보기</Button>
          <Button variant="outline" size="sm" className="w-full text-gray-700" onClick={handleViewAllNotifications}>알림 모두보기</Button>
        </div>
        
        <Button variant="outline" size="sm" className="w-full mb-4 text-gray-700">알림 모두 읽기</Button>
        
        {showAllNotifications ? (
          <div>
            <h4 className="font-medium mb-2 text-sm">모든 알림</h4>
            <ScrollArea className="h-[300px]">
              {notifications.all.map(notification => (
                <NotificationItem key={notification.id} {...notification} />
              ))}
            </ScrollArea>
          </div>
        ) : (
          
          <Tabs defaultValue="lecture" className="w-full">
            <TabsList className="w-full grid grid-cols-3">
              <TabsTrigger value="lecture">강의 자료</TabsTrigger>
              <TabsTrigger value="assignment">과제</TabsTrigger>
              <TabsTrigger value="announcement">공지</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lecture" className="mt-0">
              <ScrollArea className="h-[300px]">
                {notifications.lectures.length > 0 ? (
                  notifications.lectures.map(notification => (
                    <NotificationItem key={notification.id} {...notification} />
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500">
                    새로운 강의 자료가 없습니다.
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="assignment" className="mt-0">
              <ScrollArea className="h-[300px]">
                {notifications.assignments.map(notification => (
                  <NotificationItem key={notification.id} {...notification} />
                ))}
              </ScrollArea>
            </TabsContent>
            
            <TabsContent value="announcement" className="mt-0">
              <ScrollArea className="h-[300px]">
                {notifications.announcements.map(notification => (
                  <NotificationItem key={notification.id} {...notification} />
                ))}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};
