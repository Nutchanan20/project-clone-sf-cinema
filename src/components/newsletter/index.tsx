import Plane from "../newsletter/PaperPlane.svg"

export default function Newsletter(){
return(
    <div className="fixed bottom-0 right-0 w-[336px] shadow-md">
        <button className="bg-[#FFFFFF] flex justify-between items-center p-3 w-full">
            <div className="flex-1 flex justify-center">
                <img src={Plane} className="w-5 h-5 mr-2"></img>
                <div className="text-[#2D64CF] font-bold">คลิกเพื่อรับข่าวสารจาก SF</div>
            </div>
            <div className="text-[#939494] text-lg">x</div>
        </button>
        
        <div className="p-5 bg-[#F5F7FB]">
            <div className="text-center mb-5">
                กรุณาระบุอีเมลที่ต้องการรับข่าวสาร
                <br />
                หรือโปรโมชั่น
            </div>
            <div className="flex justify-center">
                <input placeholder="อีเมล" className="rounded-sm border border-[#2D64CF] w-full h-10 px-2 focus:outline-none"></input>
            </div>
            <div className="flex justify-center mt-4">
                <button className="text-white bg-gradient-to-r from-blue-700 to-sky-400 rounded-sm border w-full h-12 font-bold">รับข่าวสาร</button>
            </div>
        </div>
    </div>
)

}