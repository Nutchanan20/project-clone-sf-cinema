export default function Navbar() {
    return(
        <div>
<nav className="flex items-center ">
    <div className="max-w-screen-xl px-8 pt-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-16 rtl:space-x-reverse text-sm">
                <li>
                    <a href="#" className="text-[#2d64cf] focus:font-bold group relative inline-block pb-1" aria-current="page">หน้าแรก
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d64cf] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-focus:scale-x-100"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[#2d64cf] group relative inline-block">
                        <div className="group-focus:font-bold pb-1">ภาพยนตร์</div>
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d64cf] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-hover:w-40 group-focus:scale-x-100"></span>
                        <div id="dropdown" className="absolute hidden group-hover:block bg-white rounded-md shadow w-40">
                            <ul className="py-2 text-gray-700">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#2d64cf]">กำลังฉาย</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#2d64cf]">โปรแกรมหน้า</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#2d64cf]">เทศกาลภาพยนตร์</a>
                                </li>
                            </ul>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[#2d64cf] focus:font-bold group relative inline-block pb-1">โรงภาพยนตร์
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d64cf] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-focus:scale-x-100"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[#2d64cf] focus:font-bold group relative inline-block pb-1">โปรโมชั่น
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d64cf] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-focus:scale-x-100"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[#2d64cf] focus:font-bold group relative inline-block pb-1">โบว์ลิ่งและเพลง
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d64cf] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-focus:scale-x-100"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[#2d64cf] focus:font-bold group relative inline-block pb-1">ข่าวและกิจกรรม
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d64cf] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-focus:scale-x-100"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[#2d64cf] focus:font-bold group relative inline-block pb-1">เทศกาลภาพยนตร์
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d64cf] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-focus:scale-x-100"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[#2d64cf] focus:font-bold group relative inline-block pb-1">SF+
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d64cf] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-focus:scale-x-100"></span>
                    </a>
                </li>
                <li>
                    <a href="#" className="text-[#2d64cf] focus:font-bold group relative inline-block">
                    <div className="group-focus:font-bold pb-1">นโยบายข้อมูลส่วนบุคคล</div>
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2d64cf] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 group-hover:w-44 group-focus:scale-x-100"></span>
                    <div id="dropdown" className="absolute hidden group-hover:block bg-white rounded-md shadow w-44">
                            <ul className="py-2 text-gray-700">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#2d64cf]">นโยบายความเป็นส่วนตัวในการซื้อสินค้าออนไลน์</a>
                                </li>
                            </ul>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>

        </div>
    )
}
