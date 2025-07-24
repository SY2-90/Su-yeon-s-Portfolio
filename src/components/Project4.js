import React from 'react';
import mainImage from '../assets/p4_image.png';
import detailImage from '../assets/mini_img.png';
import leftImage from '../assets/p4_image02.png'; 
import rightImage from '../assets/p4_image03.png'; 
import centerImage from '../assets/p4_image04.png';

const Project4 = () => {
  return (
    <div id="project4" className="w-full overflow-x-hidden">

      {/* 기존 프로젝트4 메인 섹션 */}
      <section
        id="project4-main"
        className="w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#FFFAFA] to-[#FFFFFF] py-40"
        style={{ minHeight: '1024px' }}
      >
        <div className="w-full max-w-[1000px] flex flex-col lg:flex-row items-end justify-center gap-10 px-0">
          {/* 큰 메인 이미지 */}
          <div className="relative w-full lg:max-w-[600px] sm:max-w-full">
            <img
              src={mainImage}
              alt="Project4 메인 이미지"
              className="w-full h-auto object-contain rounded-[362px_362px_99px_99px]"
              style={{ backgroundColor: '#F6ECF8' }}
            />
          </div>

          {/* 작은 이미지와 텍스트를 세로로 묶은 그룹 */}
          <div className="flex flex-col items-start gap-6 max-w-[300px]">
            {/* 상세 이미지 */}
            <div className="w-[196px] self-end lg:self-start">
              <img
                src={detailImage}
                alt="칫솔살균기 3D 이미지"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* 텍스트 박스 */}
            <div className="bg-white text-black text-sm md:text-base lg:text-base font-normal
    p-6 max-w-[320px] leading-snug text-left font-[GangwonEduAllOTF]
    border border-[#eeeeee] flex flex-col justify-end w-full">
              윈스) LED 칫솔 살균기 -<br />
              올리브영 웹에서 판매 중인<br />
              칫솔 살균기 상세페이지 리디자인<br />
              소요기간: 2일<br />
              기존의 디자인 방향에 맞게 직접 디자인<br />
              프로젝트 목표: 칫솔 살균기 판매촉진<br />
              사용 툴: 피그마, 포토샵, AI
            </div>
          </div>
        </div>
      </section>

      {/* 두 이미지가 가운데 정렬된 페이지 */}
      <section
        id="project4-page1"
        className="w-full py-20 bg-white flex justify-center"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 50%, #FEFAFF 100%)',
        }}
      >
        <div className="w-full max-w-[1000px] flex flex-col lg:flex-row justify-center gap-10 px-4">
          <img
            src={leftImage}
            alt="칫솔살균기 기능설명 이미지"
            className="w-[480px] h-auto object-contain rounded-lg"
          />
          <img
            src={rightImage}
            alt="칫솔살균기 상세설명 이미지"
            className="w-[480px] h-auto object-contain rounded-lg"
          />
        </div>
      </section>

      {/* 마지막 한 장 이미지 페이지 */}
      <section
        id="project4-page2"
        className="w-full flex flex-col items-center py-40 bg-white"
        style={{
          background: 'linear-gradient(180deg, #FEFAFF 0%, #F3EFF3 100%)',
        }}
      >
        <div className="w-full max-w-[1000px] flex justify-center px-0">
          <img
            src={centerImage}
            alt="프로젝트4 마지막 페이지 할인 안내 이미지"
            className="w-[500px] h-auto object-contain rounded-[10px]"
          />
        </div>
      </section>

    </div>
  );
};

export default Project4;
