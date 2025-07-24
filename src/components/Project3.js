import React from 'react';
import image from '../assets/p3_image.png';       
import fullImage from '../assets/p3_image02.png';   

const Project3 = () => {
  return (
    <section
      id="project3"
      className="w-full flex flex-col items-center justify-center overflow-x-hidden bg-gradient-to-b from-[#FFFDF6] to-[#FFF7E3] py-40"
      style={{ minHeight: '1024px' }}
    >
      {/* 상단: 텍스트 + 대표 이미지 */}
      <div className="w-full max-w-[1000px] flex flex-col lg:flex-row items-end justify-center gap-10 px-0">
        {/* 텍스트 박스 */}
        <div className="bg-white text-black text-sm md:text-base lg:text-base font-normal
    p-7 max-w-[320px] aspect-square leading-snug text-left
    border border-[#eeeeee] flex flex-col justify-end">
          이사로 홈페이지 -<br />
          현재 홈페이지가 없어<br />
          이사로 앱 디자인 기반으로<br />
          직접 홈페이지 메인 화면<br />및 로고 디자인<br />
          소요기간: 2일<br />
          포트폴리오용 디자인<br />단독작업<br />
          프로젝트 목표: 이사로<br />홈페이지 제작<br />
          사용 툴: 피그마, AI
        </div>
        {/* 대표 이미지 */}
        <div className="relative w-full lg:max-w-[700px] sm:max-w-full">
          <img
            src={image}
            alt="이사로 메인상단 이미지"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* 하단: 전체 폭 이미지 */}
      <div className="w-full mt-40 px-0">
        <img
          src={fullImage}
          alt="이사로 하단 풀화면 이미지 및 로고"
          className="w-full max-w-[1200px] mx-auto h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Project3;