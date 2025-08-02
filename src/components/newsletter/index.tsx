import React, { useState } from "react";

interface NewsletterPopupProps {
  onClose: () => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-end justify-end bg-black bg-opacity-30">
      <div className="bg-white rounded-lg shadow-lg w-[340px] p-5 relative">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span>
              <svg width="20" height="20" fill="#2d64cf" viewBox="0 0 24 24">
                <path d="M2 6.5V18a2 2 0 002 2h16a2 2 0 002-2V6.5l-10 6.25L2 6.5zm20-2.5a2 2 0 00-2-2H4a2 2 0 00-2 2v.5l10 6.25L22 4.5V4z"/>
              </svg>
            </span>
            <span className="text-[#2d64cf] font-bold">คลิกเพื่อรับข่าวสารจาก SF</span>
          </div>
          <button
            className="text-gray-400 hover:text-gray-600 text-lg font-bold"
            onClick={onClose}
            aria-label="close"
          >
            ×
          </button>
        </div>
        <div className="text-center text-[#333] text-sm mb-4">
          กรุณาระบุอีเมลที่ต้องการรับข่าวสาร<br />หรือโปรโมชั่น
        </div>
        <input
          type="email"
          placeholder="อีเมล"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border border-[#c6c7c7] rounded px-3 py-2 mb-4 focus:outline-none"
        />
        <button className="w-full py-2 rounded bg-gradient-to-r from-[#2f66cd] to-[#5ab6de] text-white font-bold text-base">
          รับข่าวสาร
        </button>
      </div>
    </div>
  );
};

export default NewsletterPopup;