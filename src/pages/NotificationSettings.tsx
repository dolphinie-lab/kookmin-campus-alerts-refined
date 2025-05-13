import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MobileNavbar } from '@/components/MobileNavbar';

const NotificationSettings = () => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const [settings, setSettings] = useState({
    general: {
      announcements: true,
      assignments: true,
      grades: true,
      system: true,
    },
    email: {
      announcements: false,
      assignments: true,
      grades: true,
      system: false,
    },
    push: {
      announcements: true,
      assignments: true,
      grades: false,
      system: true,
    }
  });
  
  const handleChange = (category: 'general' | 'email' | 'push', setting: string, value: boolean) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [category]: {
        ...prevSettings[category],
        [setting]: value,
      }
    }));
  };
  
  const handleSave = () => {
    toast.success('알림 설정이 저장되었습니다.');
  };

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-100 pb-16">
        <div className="bg-kmublue-700 text-white p-4 flex items-center justify-center relative">
          <Link to="/more" className="absolute left-4">
            <ArrowLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-xl font-medium">알림설정</h1>
        </div>

        <div className="p-4">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4 bg-gray-100">
              <TabsTrigger value="general">전체 알림</TabsTrigger>
              <TabsTrigger value="email">이메일 알림</TabsTrigger>
              <TabsTrigger value="push">푸시 알림</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="bg-white rounded-md p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="general-announcements" className="font-medium">공지사항</Label>
                    <p className="text-sm text-gray-500">새로운 공지사항이 등록되었을 때 알림</p>
                  </div>
                  <Switch 
                    id="general-announcements" 
                    checked={settings.general.announcements}
                    onCheckedChange={(value) => handleChange('general', 'announcements', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="general-assignments" className="font-medium">과제</Label>
                    <p className="text-sm text-gray-500">새로운 과제가 등록되거나 마감일이 다가올 때 알림</p>
                  </div>
                  <Switch 
                    id="general-assignments" 
                    checked={settings.general.assignments}
                    onCheckedChange={(value) => handleChange('general', 'assignments', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="general-grades" className="font-medium">성적</Label>
                    <p className="text-sm text-gray-500">성적이 등록되거나 변경되었을 때 알림</p>
                  </div>
                  <Switch 
                    id="general-grades" 
                    checked={settings.general.grades}
                    onCheckedChange={(value) => handleChange('general', 'grades', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="general-system" className="font-medium">시스템 알림</Label>
                    <p className="text-sm text-gray-500">시스템 유지보수, 업데이트 등의 알림</p>
                  </div>
                  <Switch 
                    id="general-system" 
                    checked={settings.general.system}
                    onCheckedChange={(value) => handleChange('general', 'system', value)}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="email" className="bg-white rounded-md p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-announcements" className="font-medium">공지사항</Label>
                    <p className="text-sm text-gray-500">새로운 공지사항이 등록되었을 때 이메일 알림</p>
                  </div>
                  <Switch 
                    id="email-announcements" 
                    checked={settings.email.announcements}
                    onCheckedChange={(value) => handleChange('email', 'announcements', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-assignments" className="font-medium">과제</Label>
                    <p className="text-sm text-gray-500">새로운 과제가 등록되거나 마감일이 다가올 때 이메일 알림</p>
                  </div>
                  <Switch 
                    id="email-assignments" 
                    checked={settings.email.assignments}
                    onCheckedChange={(value) => handleChange('email', 'assignments', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-grades" className="font-medium">성적</Label>
                    <p className="text-sm text-gray-500">성적이 등록되거나 변경되었을 때 이메일 알림</p>
                  </div>
                  <Switch 
                    id="email-grades" 
                    checked={settings.email.grades}
                    onCheckedChange={(value) => handleChange('email', 'grades', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="email-system" className="font-medium">시스템 알림</Label>
                    <p className="text-sm text-gray-500">시스템 유지보수, 업데이트 등의 이메일 알림</p>
                  </div>
                  <Switch 
                    id="email-system" 
                    checked={settings.email.system}
                    onCheckedChange={(value) => handleChange('email', 'system', value)}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="push" className="bg-white rounded-md p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-announcements" className="font-medium">공지사항</Label>
                    <p className="text-sm text-gray-500">새로운 공지사항이 등록되었을 때 푸시 알림</p>
                  </div>
                  <Switch 
                    id="push-announcements" 
                    checked={settings.push.announcements}
                    onCheckedChange={(value) => handleChange('push', 'announcements', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-assignments" className="font-medium">과제</Label>
                    <p className="text-sm text-gray-500">새로운 과제가 등록되거나 마감일이 다가올 때 푸시 알림</p>
                  </div>
                  <Switch 
                    id="push-assignments" 
                    checked={settings.push.assignments}
                    onCheckedChange={(value) => handleChange('push', 'assignments', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-grades" className="font-medium">성적</Label>
                    <p className="text-sm text-gray-500">성적이 등록되거나 변경되었을 때 푸시 알림</p>
                  </div>
                  <Switch 
                    id="push-grades" 
                    checked={settings.push.grades}
                    onCheckedChange={(value) => handleChange('push', 'grades', value)}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="push-system" className="font-medium">시스템 알림</Label>
                    <p className="text-sm text-gray-500">시스템 유지보수, 업데이트 등의 푸시 알림</p>
                  </div>
                  <Switch 
                    id="push-system" 
                    checked={settings.push.system}
                    onCheckedChange={(value) => handleChange('push', 'system', value)}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-6">
            <Button onClick={handleSave} className="w-full">설정 저장</Button>
          </div>
        </div>
        
        <MobileNavbar />
      </div>
    );
  }
  
  // Desktop version
  return (
    <div className="min-h-screen bg-gray-50">
      <Header toggleSidebar={toggleSidebar} />
      
      <div className="flex">
        <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        
        <main className="flex-1 p-6 md:ml-64 transition-all duration-300">
          <div className="mb-6">
            <h2 className="text-3xl font-bold">알림 설정</h2>
            <p className="text-gray-500 mt-2">원하는 알림 방식을 설정하세요</p>
          </div>
          
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>알림 환경설정</CardTitle>
              <CardDescription>
                원하는 알림 유형과 수신 방법을 설정할 수 있습니다.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">전체 알림</TabsTrigger>
                  <TabsTrigger value="email">이메일 알림</TabsTrigger>
                  <TabsTrigger value="push">푸시 알림</TabsTrigger>
                </TabsList>
                
                <TabsContent value="general" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="general-announcements" className="font-medium">공지사항</Label>
                        <p className="text-sm text-gray-500">새로운 공지사항이 등록되었을 때 알림</p>
                      </div>
                      <Switch 
                        id="general-announcements" 
                        checked={settings.general.announcements}
                        onCheckedChange={(value) => handleChange('general', 'announcements', value)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="general-assignments" className="font-medium">과제</Label>
                        <p className="text-sm text-gray-500">새로운 과제가 등록되거나 마감일이 다가올 때 알림</p>
                      </div>
                      <Switch 
                        id="general-assignments" 
                        checked={settings.general.assignments}
                        onCheckedChange={(value) => handleChange('general', 'assignments', value)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="general-grades" className="font-medium">성적</Label>
                        <p className="text-sm text-gray-500">성적이 등록되거나 변경되었을 때 알림</p>
                      </div>
                      <Switch 
                        id="general-grades" 
                        checked={settings.general.grades}
                        onCheckedChange={(value) => handleChange('general', 'grades', value)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="general-system" className="font-medium">시스템 알림</Label>
                        <p className="text-sm text-gray-500">시스템 유지보수, 업데이트 등의 알림</p>
                      </div>
                      <Switch 
                        id="general-system" 
                        checked={settings.general.system}
                        onCheckedChange={(value) => handleChange('general', 'system', value)}
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="email" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-announcements" className="font-medium">공지사항</Label>
                        <p className="text-sm text-gray-500">새로운 공지사항이 등록되었을 때 이메일 알림</p>
                      </div>
                      <Switch 
                        id="email-announcements" 
                        checked={settings.email.announcements}
                        onCheckedChange={(value) => handleChange('email', 'announcements', value)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-assignments" className="font-medium">과제</Label>
                        <p className="text-sm text-gray-500">새로운 과제가 등록되거나 마감일이 다가올 때 이메일 알림</p>
                      </div>
                      <Switch 
                        id="email-assignments" 
                        checked={settings.email.assignments}
                        onCheckedChange={(value) => handleChange('email', 'assignments', value)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-grades" className="font-medium">성적</Label>
                        <p className="text-sm text-gray-500">성적이 등록되거나 변경되었을 때 이메일 알림</p>
                      </div>
                      <Switch 
                        id="email-grades" 
                        checked={settings.email.grades}
                        onCheckedChange={(value) => handleChange('email', 'grades', value)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-system" className="font-medium">시스템 알림</Label>
                        <p className="text-sm text-gray-500">시스템 유지보수, 업데이트 등의 이메일 알림</p>
                      </div>
                      <Switch 
                        id="email-system" 
                        checked={settings.email.system}
                        onCheckedChange={(value) => handleChange('email', 'system', value)}
                      />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="push" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-announcements" className="font-medium">공지사항</Label>
                        <p className="text-sm text-gray-500">새로운 공지사항이 등록되었을 때 푸시 알림</p>
                      </div>
                      <Switch 
                        id="push-announcements" 
                        checked={settings.push.announcements}
                        onCheckedChange={(value) => handleChange('push', 'announcements', value)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-assignments" className="font-medium">과제</Label>
                        <p className="text-sm text-gray-500">새로운 과제가 등록되거나 마감일이 다가올 때 푸시 알림</p>
                      </div>
                      <Switch 
                        id="push-assignments" 
                        checked={settings.push.assignments}
                        onCheckedChange={(value) => handleChange('push', 'assignments', value)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-grades" className="font-medium">성적</Label>
                        <p className="text-sm text-gray-500">성적이 등록되거나 변경되었을 때 푸시 알림</p>
                      </div>
                      <Switch 
                        id="push-grades" 
                        checked={settings.push.grades}
                        onCheckedChange={(value) => handleChange('push', 'grades', value)}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="push-system" className="font-medium">시스템 알림</Label>
                        <p className="text-sm text-gray-500">시스템 유지보수, 업데이트 등의 푸시 알림</p>
                      </div>
                      <Switch 
                        id="push-system" 
                        checked={settings.push.system}
                        onCheckedChange={(value) => handleChange('push', 'system', value)}
                      />
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 flex justify-end">
                <Button onClick={handleSave}>설정 저장</Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default NotificationSettings;
