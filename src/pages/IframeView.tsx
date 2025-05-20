
import React, { useEffect, useState } from 'react';
import MobileHome from './MobileHome';

/**
 * iframe에 내장될 때 최적화된 뷰를 제공하는 컴포넌트
 * 이 컴포넌트는 포털 사이트 내에서 iframe으로 삽입될 때
 * 최적의 뷰와 스타일을 제공합니다.
 */
const IframeView = () => {
  const [isInIframe, setIsInIframe] = useState(false);

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

    return () => {
      window.removeEventListener('resize', sendHeight);
      clearInterval(heightInterval);
    };
  }, []);

  return (
    <div className={isInIframe ? 'iframe-container' : ''}>
      <MobileHome />
    </div>
  );
};

export default IframeView;
