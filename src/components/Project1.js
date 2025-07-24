import React from 'react';
import itemImage from '../assets/item_full_image.png';
import itemImage2 from '../assets/item_full_image02.png';
import itemImage3 from '../assets/item_full_image03.png';
import itemImage4 from '../assets/item_full_image04.png';

const Project1 = () => {
  return (
    <section id="project1" className="w-full flex flex-col items-center justify-center overflow-x-hidden">

      <div className="w-full bg-[#FFFAFA] flex flex-col items-center pt-20 pb-10">
        <div className="w-full max-w-[1000px] flex flex-col-reverse lg:flex-row items-center lg:items-end justify-center gap-5">
          <div className="relative max-w-[700px] aspect-[996/1024]">
            <img src={itemImage} alt="우리아이 앱 홍보 이미지" className="w-full h-full object-contain" />
          </div>
          <div className="bg-[#ffffff] text-[#000000] text-sm md:text-base lg:text-base font-normal p-6 max-w-[300px] leading-snug text-left border border-[#eeeeee] lg:ml-0 ml-auto">
            우리아이 앱 -<br />
            메인 로고 작업 및<br />
            하단 네비게이션 바 제작<br />
            소요기간: 3일<br />
            디자인 단독작업<br />
            프로젝트 목표: 우리아이 앱 출시<br />
            사용 툴: 피그마, AI
          </div>
        </div>
      </div>

      {/* Section 2 - 그라데이션 배경 */}
      <div
        className="w-full py-20"
        style={{
          background: 'linear-gradient(to bottom, #FFFAFA 0%, #F8EFEF 50%, #FFFAFA 100%)',
        }}
      >
        <div className="w-full flex flex-col items-center gap-10">
          <div className="flex flex-col lg:flex-row gap-10 w-full justify-center items-center max-w-[1000px]">
            <div className="bg-[#F8F3EC] rounded-[40px] p-4 w-full max-w-[360px] aspect-[596/1024] flex items-center justify-center">
              <div className="bg-[#F8ECEC] rounded-[40px] w-full h-full overflow-hidden">
                <img src={itemImage2} alt="우리아이 앱 메인화면" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="bg-[#F8F3EC] rounded-[40px] p-4 w-full max-w-[360px] aspect-[596/1024] flex items-center justify-center">
              <div className="bg-[#F8ECEC] rounded-[40px] w-full h-full overflow-hidden">
                <img src={itemImage3} alt="우리아이 logo preview" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - 마지막 이미지 */}
      <div className="w-full bg-[#FFFAFA] flex flex-col items-center pt-20 pb-20">
        <div className="w-full max-w-[1000px] flex flex-col-reverse lg:flex-row items-end lg:items-center justify-center gap-[30px]">
          {/* 이미지 영역 */}
          <div className="relative w-full max-w-[700px] m-0">
            <img
              src={itemImage4}
              alt="item preview"
              className="w-full h-auto object-contain object-bottom"
            />
          </div>

          {/* 텍스트 박스 */}
          <div className="
            bg-white text-black text-sm md:text-base lg:text-base font-normal m-0 p-7
            max-w-[320px] aspect-square leading-snug text-left
            border border-[#eeeeee] flex flex-col justify-end
          ">
            우리아이 앱 -
            아이템 제작<br />
            (화환(3D블렌더) 제외)<br />
            판매 아이템 제작<br />
            소요기간: 한 아이템 당 30분<br />
            우리아이 디자인 방향에 어울리는<br />
            아이템 직접 디자인<br />
            프로젝트 목표: 우리아이를 위한 <br />
            아이템 선물 증진<br />
            사용 툴: 포토샵, AI
          </div>
        </div>
      </div>

    </section>
  );
};

export default Project1;