import {useRef} from 'react';
import dropdownIcon from "../../../../assets/pictures/dropdownIcon.png"
export default function Search() {
  const dropdownToggleRef = useRef<HTMLButtonElement | null>(null);
  const dropdownMenuRef = useRef<HTMLUListElement | null>(null);

  
  function handleClick() {
    const dropdownToggle = dropdownToggleRef.current
    const dropdownMenu = dropdownMenuRef.current
      if (dropdownMenu?.className.includes('hidden')) {
        dropdownMenu?.classList.add('block')
        dropdownMenu?.classList.remove('hidden')
        dropdownToggle?.classList.add('text-blue-600')
        dropdownToggle?.classList.remove('text-black')
      } else {
          dropdownMenu?.classList.add('hidden')
          dropdownMenu?.classList.remove('block')
          dropdownToggle?.classList.add('text-black')
          dropdownToggle?.classList.remove('text-blue-600')
      }
  }
  
    return <div className=" shadow-md h-32 mx-60 rounded-md ">
      <div className="relative w-max mx-auto">
      <button type="button" id="dropdownToggle" onClick={handleClick} ref={dropdownToggleRef}
        className="px-5 py-2.5 rounded text-black text-sm font-semibold tracking-wide border-none outline-none bg-white flex items-center">
        เลือกภาพยนตร์
        <img src={dropdownIcon} alt="logo" className='w-9 ' />
      </button>

      <ul id="dropdownMenu" ref={dropdownMenuRef} className='absolute hidden shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto'>
        <li className="mb-2">
          <input placeholder="Search here"
            className="px-4 py-2.5 w-full rounded text-gray-800 text-sm border-none outline-blue-600 bg-blue-50 focus:bg-transparent" />
        </li>
        <li className='py-2.5 px-4 hover:text-blue-500 text-black text-sm cursor-pointer rounded'>Dropdown option</li>
        <li className='py-2.5 px-4 hover:text-blue-500 text-black text-sm cursor-pointer rounded'>Cloth set</li>
        <li className='py-2.5 px-4 hover:text-blue-500 text-black text-sm cursor-pointer rounded'>Sales details</li>
        <li className='py-2.5 px-4 hover:text-blue-500 text-black text-sm cursor-pointer rounded'>Marketing</li>
      </ul>
    </div>
      

  </div>
}