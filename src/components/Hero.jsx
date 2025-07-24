import React from 'react';
import title from '../assets/title.png';
import deco from '../assets/heart.png';

function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-100 px-4 relative overflow-hidden mb-0">
      <div className="flex flex-col items-center text-center relative z-10">

        {/* 타이틀 + 하트 이미지 그룹 */}
        <div className="relative w-fit inline-block">
          {/* 하트 이미지: 타이틀 뒤쪽에 위치 */}
          <img
            src={deco}
            alt="하트 이미지"
            className="absolute top-[-130px] right-[-160px] pointer-events-none select-none z-0"
            style={{ width: '250px', height: 'auto' }}
          />

          {/* 타이틀 이미지 */}
          <img
            src={title}
            alt="수연's Portfolio"
            className="w-64 md:w-80 h-auto relative z-10"
          />
        </div>

        {/* 소개 문구 */}
        <p className="mt-6 text-lg md:text-xl text-gray-600">
          UX/UI 디자이너 김수연입니다.
        </p>
      </div>
    </section>
  );
}

export default Hero;