
import React from 'react';
import { MobileNavbar } from '@/components/MobileNavbar';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BookOpen, FileText, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

type CourseCardProps = {
  title: string;
  code: string;
  englishTitle: string;
  badgeNumber?: string;
  hasNewMaterials?: boolean;
  hasNewAssignments?: boolean;
  hasNewAnnouncements?: boolean;
};

const CourseCard = ({ 
  title, 
  code, 
  englishTitle, 
  badgeNumber,
  hasNewMaterials = false,
  hasNewAssignments = false,
  hasNewAnnouncements = false
}: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-4 border-l-4 border-orange-400">
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">{title}</h3>
          {badgeNumber && (
            <div className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center text-sm">
              {badgeNumber}
            </div>
          )}
        </div>
        <p className="text-gray-600 text-sm">{code}</p>
        <p className="text-gray-500 text-sm">{englishTitle}</p>
        
        <div className="flex space-x-2 pt-2 mt-2 border-t">
          <Link to={`/courses/${code}/materials`} className={`flex items-center ${hasNewMaterials ? 'text-kmublue-500' : 'text-gray-500'}`}>
            <BookOpen className="h-4 w-4 mr-1" />
            <span className="text-xs">강의자료</span>
            {hasNewMaterials && <span className="w-2 h-2 bg-kmublue-500 rounded-full ml-1"></span>}
          </Link>
          
          <Link to={`/courses/${code}/assignments`} className={`flex items-center ${hasNewAssignments ? 'text-notification-assignment' : 'text-gray-500'}`}>
            <FileText className="h-4 w-4 mr-1" />
            <span className="text-xs">과제</span>
            {hasNewAssignments && <span className="w-2 h-2 bg-notification-assignment rounded-full ml-1"></span>}
          </Link>
          
          <Link to={`/courses/${code}/announcements`} className={`flex items-center ${hasNewAnnouncements ? 'text-notification-announcement' : 'text-gray-500'}`}>
            <MessageCircle className="h-4 w-4 mr-1" />
            <span className="text-xs">공지</span>
            {hasNewAnnouncements && <span className="w-2 h-2 bg-notification-announcement rounded-full ml-1"></span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

const MobileHome = () => {
  const courses = [
    {
      title: "IT컨설팅",
      code: "0485104-01",
      englishTitle: "IT Consulting",
      badgeNumber: "01",
      hasNewMaterials: true,
      hasNewAssignments: false,
      hasNewAnnouncements: false
    },
    {
      title: "고객관계관리",
      code: "0485104-02",
      englishTitle: "Customer Relationship Management",
      badgeNumber: "01",
      hasNewMaterials: false,
      hasNewAssignments: true,
      hasNewAnnouncements: false
    },
    {
      title: "교육학개론",
      code: "0485104-03",
      englishTitle: "Introduction to Study of Education",
      badgeNumber: "01",
      hasNewMaterials: false,
      hasNewAssignments: false,
      hasNewAnnouncements: true
    },
    {
      title: "기업가정신과직무역량",
      code: "1280600-01",
      englishTitle: "Entrepreneurship and Job Competency",
      badgeNumber: "01",
      hasNewMaterials: false,
      hasNewAssignments: false,
      hasNewAnnouncements: false
    },
    {
      title: "시스템분석및설계",
      code: "0034408-01",
      englishTitle: "System Analysis and Design",
      badgeNumber: "01",
      hasNewMaterials: false,
      hasNewAssignments: false,
      hasNewAnnouncements: false
    },
    {
      title: "캡스톤디자인",
      code: "0485104-04",
      englishTitle: "Capstone Design",
      badgeNumber: "01",
      hasNewMaterials: false,
      hasNewAssignments: false,
      hasNewAnnouncements: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <div className="bg-kmublue-700 text-white p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">김서영</h2>
            <p className="text-sm mt-1">쉬어가는 것도 필요해요. 지치지 않도록 충분히 쉬어야 다시 힘낼 수 있어요.</p>
          </div>
          <Avatar className="h-14 w-14 border-2 border-white">
            <AvatarImage src="/placeholder.svg" alt="사용자" />
            <AvatarFallback>KS</AvatarFallback>
          </Avatar>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-bold mb-4">현재진행강좌</h3>
        
        {courses.map((course, index) => (
          <CourseCard 
            key={index}
            title={course.title}
            code={course.code}
            englishTitle={course.englishTitle}
            badgeNumber={course.badgeNumber}
            hasNewMaterials={course.hasNewMaterials}
            hasNewAssignments={course.hasNewAssignments}
            hasNewAnnouncements={course.hasNewAnnouncements}
          />
        ))}
        
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-4">과거강좌</h3>
          <button className="w-full py-4 bg-white rounded-lg text-center text-gray-500 border">
            조회하기
          </button>
        </div>
      </div>
      
      <MobileNavbar />
    </div>
  );
};

export default MobileHome;
