import corn from "../promotion/photo/corn.jpg";
import poster from "../promotion/photo/poster.jpg";
import cup from "../promotion/photo/cup.jpg";
import snack from "../promotion/photo/snack.jpg";
import cheese from "../promotion/photo/cheese.jpg";
import combo from "../promotion/photo/combo.jpg";
import popcorn from "../promotion/photo/popcorn.png";
import LineCup from "../promotion/photo/cup-combo-set.jpg";
export default function Promotion() {
  const promotion = [
    {
      poster: corn,
      heading:
        "โปรพิเศษสุดคุ้ม แลกซื้อ Corn Stix ในราคาพิเศษ 30 บาท เมื่อซื้อ Combo Set ชุดใดก็ได้",
      title: "",
    },
    {
      poster: poster,
      heading:
        " สิทธิพิเศษสำหรับลูกค้า Kbank ใช้คะแนน K Point 1,700 คะแนน แลกบัตรชมภาพยนตร์",
      title: "ด่วนจำนวนจำกัด",
    },
    {
      poster: cup,
      heading: "BT21 AFTER SCHOOL Combo Set",
      title: "ด่วน..สินค้ามีจำนวนจำกัด",
    },
    {
      poster: snack,
      heading: "Nachos Set",
      title: "สินค้ามีจำนวนจำกัด",
    },
    {
      poster: cheese,
      heading: "El Nacho Grande Cheese Sauce",
      title: "สินค้ามีจำนวนจำกัด",
    },
    {
      poster: combo,
      heading: "Nachos Combo Set",
      title: "สินค้ามีจำนวนจำกัด",
    },
    {
      poster: popcorn,
      heading: "Popcorn Cheese Pro Max Plus",
      title: "รสชาติเข้มเต็มๆ ชีส คนรักชีสไม่ควรพลาด!!",
    },
    {
      poster: LineCup,
      heading: "Line Friends Summer Combo Set",
      title: "สินค้ามีจำนวนจำกัด",
    },
  ];
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-[#005ea8] to-[#498ac4] h-[300px] w-full">
        <div className="flex justify-center items-center flex-col gap-3 py-14">
          <div className="text-white font-bold text-2xl">โปรโมชั่นสุดพิเศษ</div>
          <div className="text-white">
            โปรโมชั่นสุดพิเศษ สำหรับคนรักการชมภาพยนตร์
          </div>
        </div>
        </div>
        <div className="w-[1240px] h-[1201px] mx-auto bg-white -mt-32">
          <div className="bg-white w-full h-full">
            <div className="grid grid-cols-4 justify-items-center px-7 py-10">
              {promotion.map((promotion, index) => (
                <div className="py-4">
                  <img
                    className="h-[357px] w-[255px] shadow-lg"
                    src={promotion.poster}
                  ></img>
                  <div className="text-[#2d64cf] text-sm my-4 font-bold break-words w-[255px]">
                    {promotion.heading}
                  </div>
                  <div className="text-sm text-[#1e1f24] mb-2">
                    {promotion.title}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="border border-[#1e1f24] border-opacity-40 w-[1140px] h-[58px] hover:text-[#23527c] font-semibold rounded-md">โปรโมชั่นทั้งหมด</button>
            </div>
          </div>
        </div>
      </div>
  );
}
