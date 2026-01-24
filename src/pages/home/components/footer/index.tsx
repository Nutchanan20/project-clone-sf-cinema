import Emprive from "./photo/emprive.png";
import SfO from "./photo/sfO.png";
import SfW from "./photo/sfW.png";
import SfX from "./photo/sfX.png";

export default function Footer() {
  const brandList = [Emprive, SfW, SfX, SfO];
  const menu = [
    {menuName : "เกี่ยวกับ SF",
     link : "https://www.sfcinemacity.com/about-sf"
    },
    {menuName: "สาขา",
     link: "https://www.sfcinemacity.com/branches"
    },
    {menuName: "ระบบในการรับชมภาพยนตร์",
     link: "https://www.sfcinemacity.com/system-type"
    },
    {menuName: "วิธีการซื้อ",
     link: "https://www.sfcinemacity.com/how-to-buy"
    },
    {menuName: "ร่วมงานกับเรา",
     link: "https://career.sfcinemacity.com/join-us?_gl=1*1qb22b1*_gcl_aw*R0NMLjE3NjYyMjgxMTAuRUFJYUlRb2JDaE1JaXBHaXpfRExrUU1WajRXNUJSM0RUaEx3RUFBWUFTQUFFZ0kzX3ZEX0J3RQ..*_gcl_au*ODk2ODEzMjYzLjE3NjM0ODU1Nzg."
    },
    {menuName: "ติดต่อเรา",
     link: "https://www.sfcinemacity.com/contact-us"
    },
    {menuName: "เหมารอบฉาย",
     link: "https://www.sfcinemacity.com/group-booking"
    },
    {menuName: "นโยบายความเป็นส่วนตัว",
     link: "https://www.sfcinemacity.com/sfpdpa/th/policy.html"
    },
  ];
  return (
    <div className="w-full h-[318.35px]">
      <div
        id="brand-list"
        className="flex justify-center gap-x-14 py-[45px] h-[142.65px]"
      >
        {brandList.map((brand, index) => (
          <img src={brand} className="h-11"></img>
        ))}
      </div>
      <div className="w-full h-[175.7px] bg-[#1e1f24]">
        <div className="pt-[55px]">
          <div id="footbar" className="mx-[175.4px] px-[15px] flex justify-between">
            <div id="footbar-menu" >
              <ul className="text-[#fff] flex gap-x-[20px]">
                {menu.map((footbarMenu, index) => (
                  <li>
                    <a href={footbarMenu.link} className="text-[14px]">
                      {footbarMenu.menuName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div id="footbar-sf-number">
                <h2 className="font-extrabold text-[#fff]">SF Smart Call: 1349</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
