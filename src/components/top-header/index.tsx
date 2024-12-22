import React from 'react';
import Logo from "../../assets/pictures/sf-logo.png"
import Account from "../../assets/pictures/account.png"
import Inbox from "../../assets/pictures/inbox.png"


export default function TopHeader() {
  return <header className='flex py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50'>
  <div className='flex flex-wrap items-center justify-between gap-4 w-full'>
    <button className="lg:absolute max-lg:left-10 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2">
      <img src={Logo} alt="logo" className='w-20' />
    </button>

    <div id="collapseMenu"
      className='max-lg:hidden lg:!block max-lg:w-full max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>

      <ul
        className='lg:flex lg:gap-x-1 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
        <li className='max-lg:border-b max-lg:py-3 px-1'>
          <button className='hover:text-[#2d64cf] text-[#2d64cf] block font-semibold text-[15px]'>ไทย</button>
        </li>
        <div className='text-[#939494] block font-semibold text-[15px]'>|</div>
        <li className='max-lg:border-b max-lg:py-3 px-1'>
          <button className='hover:text-[#2d64cf] text-[#939494] block font-semibold text-[15px]'>ENG</button>
        </li>
      </ul>
    </div>

    <div className='flex items-center ml-auto space-x-9'>
      <button>
        <img src={Inbox} alt="logo" className='w-7' />
      </button>
      <button className='flex text-[15px] border-none outline-none space-x-1'>
        <img src={Account} alt="logo" className='w-5' />
        <div className='text-[#2d64cf] hover:underline'>เข้าสู่ระบบ/สมัครสมาชิก</div>
      </button>
    </div>
  </div>
</header>
}
