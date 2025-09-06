import React, { useState } from "react";
import IconSend from "../../assets/pictures/ic_send.svg";

interface NewsletterPopupProps {
  onClose: () => void;
}

const NewsletterPopup: React.FC<NewsletterPopupProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");

  return (
    <div className="fixed bottom-0 right-0 flex items-end justify-end">
      <div className="bg-white rounded-lg shadow-2xl w-[340px] relative">
        <button
          onClick={onClose}
          aria-label="close"
          className="px-5 py-3 flex items-center justify-between w-full"
        >
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-2">
              <span>
                <img src={IconSend} alt="icon-send" className="w-5 h-5" />
              </span>
              <span className="text-[#2d64cf] font-bold">
                คลิกเพื่อรับข่าวสารจาก SF
              </span>
            </div>
          </div>
          <div className="text-[#9B9B9B] text-2xl ml-4">×</div>
        </button>
        <div className="bg-[#f5f7fb] p-5">
          <div className="text-center text-[#333333] text-sm mb-4 font-medium">
            กรุณาระบุอีเมลที่ต้องการรับข่าวสาร
            <br />
            หรือโปรโมชั่น
          </div>
          <input
            type="email"
            placeholder="อีเมล"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-[#2f66cd] rounded px-3 py-2 mb-4 focus:outline-none"
          />
          <button className="w-full py-4 rounded bg-gradient-to-r from-[#2f66cd] to-[#5ab6de] text-white font-semibold text-sm">
            รับข่าวสาร
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
