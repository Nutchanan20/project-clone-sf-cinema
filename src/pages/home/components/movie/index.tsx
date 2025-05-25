export default function Movie() {
    const categories = ["กำลังฉาย","โปรแกรมหน้า", "กิจกรรมพิเศษ"]
    return <div>
        <h1 className="text-center font-bold text-2xl text-[#2d64cf]">ภาพยนตร์</h1>
        <div className="flex justify-center mt-10">
            {categories.map((category,index) => (
                <button className="text-[#2d64cf] focus:text-black group relative inline-block pb-1 font-bold mx-10">{category}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d64cf] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-focus:scale-x-100"></span>
                </button>
            ))}
        </div>
                
    </div>

}
