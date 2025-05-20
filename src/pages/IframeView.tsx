
import React, { useEffect, useState } from 'react';
import MobileHome from './MobileHome';
import { Card } from '@/components/ui/card';
import { RefreshCw } from 'lucide-react';

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
  );
};

export default IframeView;
