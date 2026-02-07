import emprive from "../../../../assets/pictures/bands-list/emprive.png";
import sfw from "../../../../assets/pictures/bands-list/sfw.png";
import sfx from "../../../../assets/pictures/bands-list/sfx.png";
import sfc from "../../../../assets/pictures/bands-list/sfc.png";
import iconFacebook from "../../../../assets/pictures/social-media/facebook.png";
import iconTwitter from "../../../../assets/pictures/social-media/twitter.png";
import iconInstagram from "../../../../assets/pictures/social-media/instagram.png";
import iconYoutube from "../../../../assets/pictures/social-media/youtube.png";
import iconLine from "../../../../assets/pictures/social-media/line.png";
export default function Footer() {
  const logos = [emprive, sfw, sfx, sfc];
  const menu = [
    {
      name: "เกี่ยวกับ SF",
      url: "https://www.sfcinemacity.com/about-sf"
    },
    {
      name: "สาขา",
      url: "https://www.sfcinemacity.com/branches"
    },
    {
      name: "ระบบในการรับชมภาพยนตร์",
      url: "https://www.sfcinemacity.com/system-type"
    },
    {
      name: "วิธีการซื้อ",
      url: "https://www.sfcinemacity.com/how-to-buy"
    },
    {
      name: "ร่วมงานกับเรา",
      url: "https://career.sfcinemacity.com/join-us?_gl=1*l3xdro*_gcl_aw*R0NMLjE3NjYyMjk1NDYuQ2owS0NRaUFyNW5LQmhDcEFSSXNBQ2FfTmlQOHdTUUdwNVVLeTNBRG01LUFvb2VNMDdoRnlNN1lMYVhlUU52R3o1SkJQTjYwZjVLNy1jWWFBcTZMRUFMd193Y0I.*_gcl_au*MTg1NDI3ODk0LjE3Njg3MjM3Mjg."
    },
    {
      name: "ติดต่อเรา",
      url: "https://www.sfcinemacity.com/contact-us"
    },
    {
      name: "เหมารอบฉาย",
      url: "https://www.sfcinemacity.com/group-booking"
    },
    {
      name: "นโยบายความเป็นส่วนตัว",
      url: "https://www.sfcinemacity.com/sfpdpa/th/policy.html"
    }
  ]
  const socials = [
    {
      name: "facebook",
      logo: iconFacebook,
      url: "https://www.facebook.com/SFcinema"
    },
    {
      name: "twitter",
      logo: iconTwitter,
      url: "https://x.com/WeLoveSF"
    },
    {
      name: "instagram",
      logo: iconInstagram,
      url: "https://www.instagram.com/welove_sf"
    },
    {
      name: "youtube",
      logo: iconYoutube,
      url: "https://www.youtube.com/WeLoveSF"
    },
    {
      name: "line",
      logo: iconLine,
      url: "https://lin.ee/yWqvpiW"
    },

  ];
  return (
    <div className="w-[1905px] h-[318.531px]">
      <div id="band-lists" className="flex justify-center gap-x-16 py-[45px] h-[142.84px]">
        {logos.map((logo, idx) => (
          <img key={idx} src={logo} className="h-11" />
        ))}
      </div>
      <div id="footbar" className="bg-[#1e1f24] h-[175.69px] pt-[55px] pb-[20px]">
        <div id="container" className="w-[1170px] h-[100.69px] px-[15px] mx-auto">
          <div id="footer-inner">
            <div id="footbar-top" className="flex justify-between mb-3">
              <div id="footer-menu">
                <ul className="text-white flex gap-x-5 text-sm">
                  {menu.map((item, index) => (
                    <li>
                      <a href={item.url} key={index} className="block hover:text-[#CCCCCC]">{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div id="call-center" className="text-white text-[20px] font-semibold">
                SF Smart Call: 1349
              </div>
            </div>
            <div id="footbar-bottom" className="flex justify-between">
              <div id="copyright" className="text-[#999999] text-sm font-semibold">
                Copyright © 2023 SF Group. All rights reserved.
              </div>
              <div id="social-media" className="text-[#999999] text-sm gap-x-3 flex">
                {socials.map((social, index) => (
                  <a href={social.url} key={index}>
                    <img src={social.logo} className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
