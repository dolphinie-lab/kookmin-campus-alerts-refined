
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CourseCard } from './CourseCard';
import { FileText, Calendar, Bell } from 'lucide-react';

export const Dashboard = () => {
  const courses = [
    {
      id: '1',
      title: '컴퓨터 프로그래밍',
      professor: '김교수',
      progress: 65,
      hasNewMaterials: false,
      hasNewAssignments: true,
      hasNewAnnouncements: false,
    },
    {
      id: '2',
      title: '데이터 구조',
      professor: '이교수',
      progress: 78,
      hasNewMaterials: false,
      hasNewAssignments: false,
      hasNewAnnouncements: true,
    },
    {
      id: '3',
      title: '알고리즘',
      professor: '박교수',
      progress: 42,
      hasNewMaterials: true,
      hasNewAssignments: false,
      hasNewAnnouncements: false,
    },
    {
      id: '4',
      title: '운영체제',
      professor: '최교수',
      progress: 30,
      hasNewMaterials: false,
      hasNewAssignments: false,
      hasNewAnnouncements: false,
    },
  ];
  
  const upcomingAssignments = [
    { id: '1', title: '프로그래밍 과제 제출', course: '컴퓨터 프로그래밍', dueDate: '2025.10.15' },
    { id: '2', title: '데이터 구조 구현 과제', course: '데이터 구조', dueDate: '2025.10.18' },
    { id: '3', title: '알고리즘 설계 과제', course: '알고리즘', dueDate: '2025.10.20' },
  ];
  
  const upcomingEvents = [
    { id: '1', title: '중간고사', date: '2025.10.16 - 2025.10.20' },
    { id: '2', title: '학과 MT', date: '2025.10.28 - 2025.10.29' },
    { id: '3', title: '수강 철회 기간', date: '2025.10.30 - 2025.11.03' },
  ];
  
  const recentAnnouncements = [
    { id: '1', title: '중간고사 일정 공지', course: '데이터 구조', date: '2025.10.09' },
    { id: '2', title: '학과 MT 신청', course: '학과 공지', date: '2025.10.08' },
    { id: '3', title: '수강신청 기간 안내', course: '학사 공지', date: '2025.10.05' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">대시보드</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-md font-medium">
              <FileText className="h-5 w-5 mr-2 inline-block text-notification-assignment" />
              예정된 과제
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {upcomingAssignments.map(assignment => (
                <li key={assignment.id} className="border-b pb-2 last:border-b-0 last:pb-0">
                  <p className="font-medium text-sm">{assignment.title}</p>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{assignment.course}</span>
                    <span>마감: {assignment.dueDate}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-md font-medium">
              <Calendar className="h-5 w-5 mr-2 inline-block text-notification-important" />
              일정
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {upcomingEvents.map(event => (
                <li key={event.id} className="border-b pb-2 last:border-b-0 last:pb-0">
                  <p className="font-medium text-sm">{event.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-md font-medium">
              <Bell className="h-5 w-5 mr-2 inline-block text-notification-announcement" />
              최근 공지사항
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {recentAnnouncements.map(announcement => (
                <li key={announcement.id} className="border-b pb-2 last:border-b-0 last:pb-0">
                  <p className="font-medium text-sm">{announcement.title}</p>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{announcement.course}</span>
                    <span>{announcement.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">내 강의실</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map(course => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};
