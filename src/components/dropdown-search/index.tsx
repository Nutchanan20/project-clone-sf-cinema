import { useRef, useState } from 'react';

interface DropdownProps {
  title: string;
  list: ListInDropdownProps[];
}

interface ListInDropdownProps {
  value: string;
  img: ImgProps | undefined;
}

interface ImgProps {
  src : string;
  date : string;
}

const Dropdown: React.FC<DropdownProps> = ({ title, list }) => {
    const dropdownToggleRef = useRef<HTMLButtonElement | null>(null);
  const dropdownMenuRef = useRef<HTMLUListElement | null>(null);

  const handleClick = () => {
    const dropdownToggle = dropdownToggleRef.current;
    const dropdownMenu = dropdownMenuRef.current;

    console.log(dropdownMenu); 
    console.log(dropdownToggle); 

      if (dropdownMenu?.className.includes('hidden')) {
        dropdownMenu?.classList.add('block');
        dropdownMenu?.classList.remove('hidden');
        dropdownToggle?.classList.remove('text-black');
        dropdownToggle?.classList.add('text-blue-800');
      } else {
        dropdownMenu?.classList.add('hidden');
        dropdownMenu?.classList.remove('block');
        dropdownToggle?.classList.add('text-black');
        dropdownToggle?.classList.remove('text-blue-800');
      }
    
  };

  return (
    
      <div className="relative w-max mx-auto px-16 ">
        <button
          type="button"
          ref={dropdownToggleRef}
          className="px-5 py-2.5 rounded text-black text-sm tracking-wide border-none outline-none bg-white"
          onClick={handleClick}
        >
          {title}
        </button>

        <ul
          ref={dropdownMenuRef}
          className="absolute hidden shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto"
        >
          <li className="mb-2">
            <input
              placeholder="Search here"
              className="px-4 py-2.5 w-full rounded text-gray-800 text-sm border-none outline-blue-600 bg-blue-50 focus:bg-transparent"
            />
          </li>
      <div className="flex flex-wrap max-w-xl">
           {list.map((item, index) => (
            item.img ? (
            <li key={index} className="py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer rounded w-1/3">
                <img src={item.img.src}  className="w-32 h-52" />
                {item.img.date}
                {item.value}
            </li>
            ) : (
            <li key={index} className="py-2.5 px-4 hover:bg-blue-50 text-black text-sm cursor-pointer rounded w-1/2">
                {item.value}
            </li>
            )
      ))}
      </div>

        </ul>
      </div>
  );
};



export default Dropdown;
