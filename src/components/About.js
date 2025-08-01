import React from 'react';
import suyeonImg from '../assets/suyeon.jpg'; // 이미지 경로 맞게 조정

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFEEE] to-[#F4EAEA] mt-0">
    <section id="about" className="relative max-w-[1080px] mx-auto mt-0 p-6 mt-0">

      {/* 상단 타이틀 라인 */}
      <div className="border-t-4 w-full mb-8 rounded-t-full mt-20" style={{ borderColor: '#715875ff' }}></div>

      {/* 컬러 원 */}
      <div className="flex justify-center space-x-2 sm:space-x-3 mb-8 mx-4 sm:mx-6 items-center">
        <div className="rounded-full border border-black bg-[#63BF6D] w-4 sm:w-5 md:w-6" style={{ aspectRatio: '1 / 1', flexShrink: 0 }}></div>
        <div className="rounded-full border border-black bg-[#F0CC39] w-4 sm:w-5 md:w-6" style={{ aspectRatio: '1 / 1', flexShrink: 0 }}></div>
        <div className="rounded-full border border-black bg-[#F07039] w-4 sm:w-5 md:w-6" style={{ aspectRatio: '1 / 1', flexShrink: 0 }}></div>
      </div>

      {/* 타이틀: UX✧UI Designer: 김 수 연 */}
      <div className="flex justify-center items-center mb-10 md:mb-8 px-2 sm:px-4">
        <h2 className="font-space-grotesk font-medium leading-tight sm:leading-snug tracking-widest text-black
        text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl
        text-center">
         UX✧UI Designer: <span className="font-almarai font-bold">김 수 연</span>
        </h2>
      </div>

      {/* 구분선 */}
      <div className="border-t border-gray-400 w-full mb-8"></div>

      {/* 프로필 이미지 */}
      <div className="flex justify-center mt-12 mb-6">
        <div className="w-[138px] h-[179px] rounded overflow-hidden shadow-lg">
          <img src={suyeonImg} alt="김수연 프로필" className="object-cover w-full h-full" />
        </div>
      </div>

      {/* 소개글 */}
      <div className="text-center max-w-[800px] mx-auto mb-10 px-4">
        <p className="font-space-grotesk text-base leading-relaxed tracking-wide text-black">
        ☺︎ 감성 중심의 UX/UI 설계 역량과 앱 런칭 및 파견 근무 등 실무 경험을 보유한 디자이너입니다.<br/>
        ☺︎ 정보 신뢰성과 보안이 중요한 화면에서 사용자 흐름과 정확한 정보 전달을 고려한 UI 설계에 강점을 지녔습니다.<br/>
        ☺︎ 에이전시 소속 파견 근무를 통해 다양한 요구사항에 유연하게 대응하며 실무 적응력과 협업 능력을 쌓았습니다.
        </p>
      </div>

      {/* 가운데 구분 바 */}
      <div className="border-t border-black w-full mb-12"></div>

      {/* 상세 정보 */}
      <div className="text-center md:text-center max-w-[800px] mx-auto space-y-6 px-4">
        <div className="font-almarai text-base leading-7 text-black">
          <p><strong>지원분야</strong> : UX✧UI / 퍼블리셔</p>
          <p><strong>학력</strong> : 남서울대학교 아동복지학과 졸업 (2014)</p>
        </div>

        <div className="text-black">
          <p className="font-semibold mb-2">유관업무 경력</p>
          <ul className="list-disc list-inside space-y-1">
            <li>스마트웨어(주) _대리 (2024~2025)</li>
            <li>애드티브이노베이션 _PD (2018)</li>
            <li>이지미디어 파견근무 _사원 (2017)</li>
            <li>주식정보제공회사 _주임 (2015~2016)</li>
          </ul>
        </div>

        <div className="text-black">
          <p className="font-semibold mb-2">보유스킬</p>
          <p>포토샵 / 일러스트 / 피그마 / 인디자인 / 프리미어 프로 / 3D 블렌더 / 웹 퍼블리싱</p>
        </div>
      </div>

      {/* 하단 라인 */}
      <div className="border-t border-black w-full mt-14"></div>

      {/* 연락처 */}
      <div className="flex justify-between mt-8 mb-10 px-6">
        <p className="font-almarai text-lg text-black">KIM SU YEON</p>
        <p className="font-space-grotesk text-lg text-black tracking-wider">Phone : 010.7676.3802</p>
      </div>

    </section>
    </div>
  );
};

export default About;