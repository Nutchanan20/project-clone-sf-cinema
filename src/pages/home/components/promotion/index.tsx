import CornStix from "../../../../assets/pictures/promotions/corn-stix.jpg";
import Kbank from "../../../../assets/pictures/promotions/kbank.jpg";
import Bt21 from "../../../../assets/pictures/promotions/bt21.jpg";
import Nachos from "../../../../assets/pictures/promotions/nachos.jpg";
import NachosGrande from "../../../../assets/pictures/promotions/nachos-grande.jpg";
import NachosComboSet from "../../../../assets/pictures/promotions/nachos-combo-set.jpg";
import PopcornCheese from "../../../../assets/pictures/promotions/popcorn-cheese.png";
import Line from "../../../../assets/pictures/promotions/line.jpg";

export default function Promotion() {
  const promotions = [
    {
      poster: CornStix,
      detail:
        "โปรพิเศษสุดคุ้ม แลกซื้อ Corn Stix ในราคาพิเศษ 30 บาท เมื่อซื้อ Combo Set ชุดใดก็ได้",
      special: "",
    },
    {
      poster: Kbank,
      detail:
        "สิทธิพิเศษสำหรับลูกค้า Kbank ใช้คะแนน K Point 1,700 คะแนน แลกบัตรชมภาพยนตร์",
      special: "ด่วนจำนวนจำกัด",
    },
    {
      poster: Bt21,
      detail: "BT21 AFTER SCHOOL Combo Set",
      special: "ด่วน..สินค้ามีจำนวนจำกัด",
    },
    {
      poster: Nachos,
      detail: "Nachos Set",
      special: "สินค้ามีจำนวนจำกัด",
    },
    {
      poster: NachosGrande,
      detail: "El Nacho Grande Cheese Sauce",
      special: "สินค้ามีจำนวนจำกัด",
    },
    {
      poster: NachosComboSet,
      detail: "Nachos Combo Set",
      special: "สินค้ามีจำนวนจำกัด",
    },
    {
      poster: PopcornCheese,
      detail: "Popcorn Cheese Pro Max Plus",
      special: "รสชาติเข้มเต็มๆ ชีส คนรักชีสไม่ควรพลาด!!",
    },
    {
      poster: Line,
      detail: "Line Friends Summer Combo Set",
      special: "สินค้ามีจำนวนจำกัด",
    },
  ];
  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-[#005ea8] to-[#498ac4] to-75% w-full h-[300px]">
        <div className="flex justify-center text-white items-center flex-col gap-2 py-16">
          <div className="text-[26px] font-bold">โปรโมชั่นสุดพิเศษ</div>
          <div className="text-[18px]">
            โปรโมชั่นสุดพิเศษ สำหรับคนรักการชมภาพยนตร์เช่นคุณ
          </div>
        </div>
        </div>
        <div className="w-[1240px] h-[1202.06px] bg-white mx-auto -mt-24">
          <div className="grid grid-cols-4 justify-items-center mx-[30px] py-[30px]">
            {promotions.map((promotion, index) => (
              <div className="mx-[20px] py-[20px] cursor-pointer">
                <img
                  className="h-[357px] w-[255px] shadow-lg"
                  src={promotion.poster}
                  alt={promotion.detail}
                />
                <div className="text-sm text-left font-semibold text-[#2d64cf] break-words w-[255px] my-[20px]">
                  {promotion.detail}
                </div>
                <div className="text-black text-xs mt-4 mb-1">
                  {promotion.special}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="w-[1140px] h-[58px] font-medium rounded-md border border-[#1e1f24] border-opacity-50 text-[#1e1f24] hover:text-[#23527c]">
              โปรโมชั่นทั้งหมด
            </button>
          </div>
        </div>
      </div>
  );
}
