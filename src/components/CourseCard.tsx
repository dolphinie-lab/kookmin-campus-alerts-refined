
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BookOpen, FileText, MessageCircle } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: string;
  title: string;
  professor: string;
  progress: number;
  hasNewMaterials: boolean;
  hasNewAssignments: boolean;
  hasNewAnnouncements: boolean;
}

export const CourseCard = ({
  id,
  title,
  professor,
  progress,
  hasNewMaterials,
  hasNewAssignments,
  hasNewAnnouncements
}: CourseCardProps) => {
  return (
    <Card className="h-full hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          {(hasNewMaterials || hasNewAssignments || hasNewAnnouncements) && (
            <Badge variant="destructive" className="text-xs">New</Badge>
          )}
        </div>
        <CardDescription>{professor}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>진도율</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
          
          <div className="flex space-x-2 pt-2">
            <div className={`flex items-center ${hasNewMaterials ? 'text-kmublue-500' : 'text-gray-500'}`}>
              <BookOpen className="h-4 w-4 mr-1" />
              <span className="text-xs">강의자료</span>
              {hasNewMaterials && <span className="notification-dot lecture mt-0 ml-1"></span>}
            </div>
            
            <div className={`flex items-center ${hasNewAssignments ? 'text-notification-assignment' : 'text-gray-500'}`}>
              <FileText className="h-4 w-4 mr-1" />
              <span className="text-xs">과제</span>
              {hasNewAssignments && <span className="notification-dot assignment mt-0 ml-1"></span>}
            </div>
            
            <div className={`flex items-center ${hasNewAnnouncements ? 'text-notification-announcement' : 'text-gray-500'}`}>
              <MessageCircle className="h-4 w-4 mr-1" />
              <span className="text-xs">공지</span>
              {hasNewAnnouncements && <span className="notification-dot announcement mt-0 ml-1"></span>}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Link to={`/courses/${id}`} className="w-full">
          <Button variant="outline" className="w-full">
            강의실 입장
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
