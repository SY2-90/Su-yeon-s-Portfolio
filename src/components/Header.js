import React, { useState, useEffect } from "react";
import logo from '../assets/logo.png';

const projects = [
  { id: "project1", name: "Project 1" },
  { id: "project2", name: "Project 2" },
  { id: "project3", name: "Project 3" },
  { id: "project4", name: "Project 4" },
];

const sectionIds = ["hero", "about", "project1", "project2", "project3", "project4", "contact"];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState(null);
  const [currentSection, setCurrentSection] = useState("");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveProjectId(null);
  };

  const openProjectDetail = (id) => {
    setActiveProjectId(id);
  };

  const closeProjectDetail = () => {
    setActiveProjectId(null);
  };

  const closeAllMenus = () => {
    setActiveProjectId(null);
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // 히어로 섹션 높이 가져오기
    const heroSection = document.getElementById("hero");
    const heroHeight = heroSection ? heroSection.offsetHeight : 0;

    // 히어로 구간에 있으면 currentSection을 빈 문자열 등으로 초기화 (활성화 없음)
    if (scrollY < heroHeight - 100) {
      setCurrentSection("");  // 빈 문자열이면 헤더 메뉴 아무 것도 활성화 안 됨
      return;
    }

    let selected = "about"; //

    for (const id of sectionIds) {
      if (id === "hero") continue; //

      const section = document.getElementById(id);
      if (section) {
        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollY >= offsetTop - 100 && scrollY < offsetTop + height - 100) {
          selected = id;
          break;
        }
      }
    }

    setCurrentSection(selected);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50 px-6 py-4 flex justify-between items-center">
        <a href="/" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="SU·YEON Logo" className="h-10 w-auto" />
        </a>

        {/* 데스크탑 내비게이션 */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-gray-700">
            <li>
              <a
              href="#about"
              className={`transition-colors ${
                currentSection === "about"
                  ? "text-[#bb76d5] font-semibold"
                  : "text-gray-700"
              } hover:text-[#bb76d5] hover:font-semibold`}
            >
              About
            </a>
            </li>

            {projects.map((p) => (
              <li key={p.id}>
                <a
                  href={`#${p.id}`}
                  className={`transition-colors ${
                    currentSection === p.id
                      ? "text-[#bb76d5] font-semibold"
                      : "text-gray-700"
                  } hover:text-[#bb76d5] hover:font-semibold`}
                >
                  {p.name}
                </a>
              </li>
            ))}

            <li>
              <a
                href="#contact"
                className={`transition-colors ${
                  currentSection === "contact"
                    ? "text-[#bb76d5] font-semibold"
                    : "text-gray-700"
                } hover:text-[#bb76d5] hover:font-semibold`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* 햄버거 버튼 */}
        <button
          className="md:hidden flex flex-col space-y-1.5 cursor-pointer z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#bb76d5] transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#bb76d5] transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#bb76d5] transition-transform duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </header>

      {/* 모바일 메뉴 */}
      <nav
        className={`fixed top-16 right-0 w-56 bg-white shadow-lg border border-gray-200 rounded-md py-6 px-6 flex flex-col space-y-6 transition-transform duration-300 md:hidden z-40 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a
          href="#about"
          onClick={closeAllMenus}
          className="text-gray-700 hover:text-[#bb76d5]"
        >
          About
        </a>

        <div>
          <p className="font-semibold mb-2 text-gray-800">Projects</p>
          <ul className="flex flex-col space-y-3">
            {projects.map((p) => (
              <li key={p.id}>
                <a
                  href={`#${p.id}`}
                  onClick={closeAllMenus}
                  className="text-gray-700 hover:text-[#bb76d5] block"
                >
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#contact"
          onClick={closeAllMenus}
          className="text-gray-700 hover:text-[#bb76d5]"
        >
          Contact
        </a>
      </nav>

      {/* Top 버튼 */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#bb76d5] text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-[#a05dbd] transition font-bold z-[999]"
      >
        Top
      </button>

      {/* 부드러운 스크롤 */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}

export default Header;