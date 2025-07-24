import React from 'react';
import p2Image1 from '../assets/p2_image.png';
import p2Image2 from '../assets/p2_image02.png';
import p2Image3 from '../assets/p2_image03.png';
import p2Image4 from '../assets/p2_image04.png';

const Project2 = () => {
  return (
    <section id="project2" className="w-full flex flex-col items-center justify-center overflow-x-hidden">

      {/* Section 1 - 소개 설명 + 대표 이미지 */}
      <div className="w-full bg-[#FFFAFA] flex flex-col items-center pt-40 pb-20">
        <div className="w-full max-w-[1000px] flex flex-col lg:flex-row items-end justify-center gap-6 sm:gap-6 lg:gap-10 xl:gap-10">
          <div className="bg-white text-black text-sm md:text-base lg:text-base font-normal
    p-7 max-w-[320px] aspect-square leading-snug text-left font-[GangwonEduAllOTF]
    border border-[#eeeeee] flex flex-col justify-end">
            우리아이 홈페이지<br />
            -<br />
            메인 로고 작업부터<br />
            전체 메인 페이지 디자인<br />
            소요기간: 4일<br />
            팀 구성: 디자인 단독작업,<br />
            플러터 개발자 1명과 구현 협업<br />
            프로젝트 목표: 우리아이 앱 홍보<br />
            사용 툴: 피그마, 포토샵, AI
          </div>
          <div className="relative max-w-[660px]">
            <img src={p2Image1} alt="우리아이 홈페이지 대표 이미지" className="w-full h-full object-contain m-0" />
          </div>
        </div>
      </div>

      {/* Section 2 - 중간 이미지 2장 */}
      <div
        className="w-full py-20"
        style={{
          background: 'linear-gradient(to bottom, #FFFAFA 0%, #F8EFEF 50%, #FFFAFA 100%)',
        }}
      >
        <div className="w-full flex flex-col items-center gap-10">
          <div className="flex flex-col lg:flex-row gap-8 w-full justify-center items-center max-w-[1000px] px-4">
            <div className="w-full lg:w-1/2">
              <img src={p2Image2} alt="우리아이 홈페이지 이미지" className="w-full h-auto object-contain rounded-xl" />
            </div>
            <div className="w-full lg:w-1/2">
              <img src={p2Image3} alt="우리아이 홈페이지 이미지" className="w-full h-auto object-contain rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - 마지막 이미지 전체 */}
      <div className="w-full flex flex-col items-center pt-20 pb-40" style={{
          background: 'linear-gradient(to bottom, #FFFAFA 0%, #FFFDF6 100%)',
        }} >
        <div className="w-full max-w-[1000px] flex justify-center">
          <div className="relative w-full max-w-[500px]">
            <img
              src={p2Image4}
              alt="우리아이 홈페이지 이미지"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Project2;
