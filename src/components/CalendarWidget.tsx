
import React, { useState } from 'react';
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CalendarWidget = () => {
  const [date, setDate] = useState<Date>(new Date());
  const today = new Date();
  const formattedDate = format(date, "dd MMM, yyyy");
  const formattedToday = format(today, "dd.MM") + " 화요일";
  
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-medium">
          {format(date, "MM.dd")} 화요일
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setDate(d => new Date(d.setMonth(d.getMonth() - 1)))}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm">Today</span>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setDate(d => new Date(d.setMonth(d.getMonth() + 1)))}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Calendar
        mode="single"
        selected={date}
        onSelect={(newDate) => newDate && setDate(newDate)}
        className="p-3 pointer-events-auto rounded-md border"
        showOutsideDays
      />
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-xs">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
          <span className="text-gray-600">2025-05-27 ~ 2025-05-29</span>
          <span className="text-gray-700 ml-2">학계 계획회기 수강신청</span>
        </div>
        <div className="flex items-start text-xs">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-2 mt-1"></span>
          <span className="text-gray-700">학계 계획회기 수강신청 기간</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
