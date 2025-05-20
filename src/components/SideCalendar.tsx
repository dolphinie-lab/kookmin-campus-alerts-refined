
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { ko } from "date-fns/locale";

export const SideCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const today = new Date();

  // Example calendar events (these would typically come from an API or state)
  const calendarEvents = [
    { id: 1, date: new Date(2025, 9, 15), title: '중간고사 시작', type: 'exam' },
    { id: 2, date: new Date(2025, 9, 20), title: '중간고사 종료', type: 'exam' },
    { id: 3, date: new Date(2025, 9, 28), title: '수강신청 시작', type: 'registration' },
    { id: 4, date: new Date(2025, 10, 5), title: '과제 제출 마감', type: 'assignment' },
  ];

  // Filter events for the selected date
  const selectedDateEvents = date
    ? calendarEvents.filter(
        (event) => format(event.date, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
      )
    : [];

  return (
    <div className="space-y-4">
      <Card className="shadow-sm">
        <CardHeader className="bg-[#F4F1FA] rounded-t-lg pb-2 pt-4">
          <CardTitle className="text-md font-medium text-[#6E59A5]">Today</CardTitle>
          <div className="flex items-baseline">
            <span className="text-5xl font-bold text-[#7E69AB]">
              {format(today, 'd')}
            </span>
            <span className="ml-2 text-sm text-gray-500">
              {format(today, 'yyyy.MM')} {format(today, 'EEEE', { locale: ko })}
            </span>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="border rounded-md"
            locale={ko}
          />
        </CardContent>
      </Card>

      {selectedDateEvents.length > 0 && (
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-md font-medium text-[#6E59A5]">
              {date && format(date, 'yyyy년 MM월 dd일')} 일정
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {selectedDateEvents.map((event) => (
                <li
                  key={event.id}
                  className={`py-2 px-3 rounded-md text-sm ${
                    event.type === 'exam'
                      ? 'bg-red-50 text-red-800'
                      : event.type === 'assignment'
                      ? 'bg-blue-50 text-blue-800'
                      : 'bg-[#F4F1FA] text-[#6E59A5]'
                  }`}
                >
                  {event.title}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
