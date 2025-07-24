import React from 'react';
import { FiMail, FiPhone, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 text-gray-800 min-h-screen flex items-center justify-center px-4"
    >
      <div className="text-center max-w-xl">
        <h2 className="text-2xl font-normal text-gray-300 mb-0">✧</h2>
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="mb-6">사용자의 마음에 먼저 다가가는 디자이너가 되겠습니다.</p>
        <ul className="space-y-2 text-lg text-left p-6 border border-[#eeeeee] rounded-2xl bg-white shadow-sm">
          <li className="flex items-center gap-2">
            <FiMail className="text-gray-300" />
            <span>Email: <a href="mailto:shine_yi@naver.com" className="hover:underline">shine_yi@naver.com</a></span>
          </li>
          <li className="flex items-center gap-2">
            <FiPhone className="text-gray-300" />
            <span>Phone: <a href="tel:+821076763802" className="hover:underline">+82 10-7676-3802</a></span>
          </li>
          <li className="flex items-center gap-2">
            <FiInstagram className="text-gray-300" />
            <span>Instagram: <a href="https://www.instagram.com/gnar.reung" target="_blank" rel="noreferrer" className="hover:underline">instagram.com/gnar.reung</a></span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;