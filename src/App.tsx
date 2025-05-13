
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotificationSettings from "./pages/NotificationSettings";
import NotFound from "./pages/NotFound";
import { useIsMobile } from "./hooks/use-mobile";
import MobileHome from "./pages/MobileHome";
import Notifications from "./pages/Notifications";
import More from "./pages/More";

const queryClient = new QueryClient();

const App = () => {
  const isMobile = useIsMobile();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={isMobile ? <MobileHome /> : <Index />} />
            <Route path="/notification-settings" element={<NotificationSettings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/more" element={<More />} />
            <Route path="/messages" element={isMobile ? <NotFound /> : <Navigate to="/" />} />
            <Route path="/calendar" element={isMobile ? <NotFound /> : <Navigate to="/" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
