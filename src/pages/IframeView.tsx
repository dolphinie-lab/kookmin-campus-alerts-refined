
import React, { useEffect, useState } from 'react';
import MobileHome from './MobileHome';
import { Card } from '@/components/ui/card';
import { RefreshCw, Star, Search, Bell } from 'lucide-react';
import CalendarWidget from '@/components/CalendarWidget';

/**
 * iframe에 내장될 때 최적화된 뷰를 제공하는 컴포넌트
 * 이 컴포넌트는 포털 사이트 내에서 iframe으로 삽입될 때
 * 최적의 뷰와 스타일을 제공합니다.
 */
const IframeView = () => {
  const [isInIframe, setIsInIframe] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    // iframe 안에서 실행되고 있는지 감지
    const inIframe = window.self !== window.top;
    setIsInIframe(inIframe);
    
    // iframe에서 실행 중일 때 body에 클래스 추가
    if (inIframe) {
      document.body.classList.add('in-iframe');
    }

    // 부모 페이지에 높이 정보 전달 (iframe 크기 자동 조정용)
    const sendHeight = () => {
      const height = document.body.scrollHeight;
      if (inIframe && window.parent) {
        window.parent.postMessage({ type: 'resize', height }, '*');
      }
    };

    // 초기 높이 전송 및 리사이징 이벤트 연결
    sendHeight();
    window.addEventListener('resize', sendHeight);
    
    // 정기적으로 높이 체크 및 전송
    const heightInterval = setInterval(sendHeight, 500);

    // 부모 페이지로부터 메시지 수신 처리
    const handleMessage = (event) => {
      if (event.data.type === 'refresh') {
        handleRefresh();
      }
    };
    
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('resize', sendHeight);
      window.removeEventListener('message', handleMessage);
      clearInterval(heightInterval);
    };
  }, []);

  // 데이터 새로고침 기능
  const handleRefresh = () => {
    setIsRefreshing(true);
    // 실제 데이터 새로고침 로직이 여기에 추가될 수 있습니다
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  };

  return (
    <div className={`${isInIframe ? 'iframe-container' : ''} porview`}>
      {/* 새로운 배너 */}
      <div className="kmu-top-banner">
        <div className="kmu-logo-section">
          <div className="kmu-logo">KMU</div>
          <div className="kmu-title">국민대학교 | ON국민</div>
        </div>
        <div className="kmu-nav-links">
          <a href="#" className="kmu-nav-item">포털</a>
          <span className="kmu-nav-separator">|</span>
          <a href="#" className="kmu-nav-item active">eCampus</a>
          <span className="kmu-nav-separator">|</span>
          <a href="#" className="kmu-nav-item">K-Startrack</a>
          <span className="kmu-nav-separator">|</span>
          <a href="#" className="kmu-nav-item">KCARD/출석부</a>
          <span className="kmu-nav-separator">|</span>
          <a href="#" className="kmu-nav-item">경력개발지원단</a>
        </div>
        <div className="kmu-tools">
          <button className="kmu-tool-btn">더보기</button>
          <button className="kmu-tool-btn"><Star className="h-4 w-4" /></button>
          <button className="kmu-tool-btn grid-icon"></button>
          <div className="kmu-notification">
            <Bell className="h-4 w-4" />
            <span className="kmu-notification-count">932</span>
          </div>
        </div>
      </div>
      
      {/* 하단 메뉴 */}
      <div className="kmu-submenu">
        <a href="#" className="kmu-submenu-item">MY</a>
        <a href="#" className="kmu-submenu-item">교내정보</a>
        <a href="#" className="kmu-submenu-item">학사정보</a>
        <a href="#" className="kmu-submenu-item active">전체</a>
        <a href="#" className="kmu-submenu-item settings"><div className="gear-icon"></div></a>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <div className="md:w-2/3">
          <Card className="p-portlet-controller board">
            <div className="p-header-view-region">
              <div className="title-bar-view-region">
                <h3 className="p-title-view">국민대 E-Campus</h3>
                <div className="p-refresh" onClick={handleRefresh}>
                  <span className={isRefreshing ? 'on' : ''}>
                    <RefreshCw className="h-4 w-4 mx-auto mt-2" />
                  </span>
                </div>
              </div>
              <div className="btn-bookmark">
                <span>즐겨찾기</span>
              </div>
            </div>
            
            <div className="p-body-view-region porview scroll">
              <MobileHome />
            </div>
          </Card>
        </div>
        
        <div className="md:w-1/3">
          <CalendarWidget />
        </div>
      </div>
    </div>
  );
};

export default IframeView;
