export default function Newsletter(){
return(
    <div className="fixed bottom-0 right-0 bg-red-600 w-[336px]">
        <div>คลิกเพื่อรับข่าวสารจาก SF</div>
        <div className="break-words">กรุณาระบุอีเมลที่ต้องการรับข่าวสารหรือโปรโมชั่น</div>
        <input placeholder="อีเมล"></input>
    </div>
)

}