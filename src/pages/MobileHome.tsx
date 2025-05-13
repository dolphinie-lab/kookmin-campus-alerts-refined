
import React from 'react';
import { MobileNavbar } from '@/components/MobileNavbar';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type CourseCardProps = {
  title: string;
  code: string;
  englishTitle: string;
  badgeNumber?: string;
};

const CourseCard = ({ title, code, englishTitle, badgeNumber }: CourseCardProps) => {
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
      badgeNumber: "01"
    },
    {
      title: "고객관계관리",
      code: "0485104-01",
      englishTitle: "Customer Relationship Management",
      badgeNumber: "01"
    },
    {
      title: "교육학개론",
      code: "0485104-01",
      englishTitle: "Introduction to Study of Education",
      badgeNumber: "01"
    },
    {
      title: "기업가정신과직무역량",
      code: "1280600-01",
      englishTitle: "Entrepreneurship and Job Competency",
      badgeNumber: "01"
    },
    {
      title: "시스템분석및설계",
      code: "0034408-01",
      englishTitle: "System Analysis and Design",
      badgeNumber: "01"
    },
    {
      title: "캡스톤디자인",
      code: "0485104-01",
      englishTitle: "Capstone Design",
      badgeNumber: "01"
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
