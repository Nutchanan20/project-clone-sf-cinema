import {useRef} from 'react';
import dropdownIcon from "../../../../assets/pictures/dropdownIcon.png"
import HP1Poster from "../../../../assets/pictures/movies/harry 1.jpg"
import HP2Poster from "../../../../assets/pictures/movies/harry 2.jpg"
import HP3Poster from "../../../../assets/pictures/movies/harry 3.jpg"
import HP4Poster from "../../../../assets/pictures/movies/harry 4.jpg"
import HP5Poster from "../../../../assets/pictures/movies/harry 5.jpg"
import HP6Poster from "../../../../assets/pictures/movies/harry 6.jpg"
import HP7Poster from "../../../../assets/pictures/movies/harry 7.0.jpg"
import HP75Poster from "../../../../assets/pictures/movies/harry 7.5.jpg"
import Mufasa from "../../../../assets/pictures/movies/mufasa poster.jpg"
export default function Search() {
  const dropdownCinemaToggleRef = useRef<HTMLButtonElement | null>(null);
  const dropdownCinemaMenuRef = useRef<HTMLUListElement | null>(null);
  const dropdownMovieToggleRef = useRef<HTMLButtonElement | null>(null);
  const dropdownMovieMenuRef = useRef<HTMLUListElement | null>(null);

  const movies = [
    {
      poster: HP1Poster, 
      date: "01-01-2024",
      title: "HarryPotter 1"
    },
    {
      poster: HP2Poster, 
      date: "02-02-2024",
      title: "HarryPotter 2"
    },
    {
      poster: HP3Poster, 
      date: "03-03-2024",
      title: "HarryPotter 3"
    },
    {
      poster: HP4Poster, 
      date: "04-04-2024",
      title: "HarryPotter 4"
    },
    {
      poster: HP5Poster, 
      date: "05-05-2024",
      title: "HarryPotter 5"
    },
    {
      poster: HP6Poster, 
      date: "06-06-2024",
      title: "HarryPotter 6"
    },
    {
      poster: HP7Poster, 
      date: "07-07-2024",
      title: "HarryPotter 7"
    },
    {
      poster: HP75Poster, 
      date: "08-08-2024",
      title: "HarryPotter 7.5"
    },
    {
      poster: Mufasa, 
      date: "09-09-2024",
      title: "Mufasa"
    }
  ]

  function handleCinemaClick() {
    const dropdownCinemaToggle = dropdownCinemaToggleRef.current
    const dropdownCinemaMenu = dropdownCinemaMenuRef.current
      if (dropdownCinemaMenu?.className.includes('hidden')) {
        dropdownCinemaMenu?.classList.add('block')
        dropdownCinemaMenu?.classList.remove('hidden')
        dropdownCinemaToggle?.classList.add('text-blue-600')
        dropdownCinemaToggle?.classList.remove('text-black')
      } else {
          dropdownCinemaMenu?.classList.add('hidden')
          dropdownCinemaMenu?.classList.remove('block')
          dropdownCinemaToggle?.classList.add('text-black')
          dropdownCinemaToggle?.classList.remove('text-blue-600')
      }
  }

  function handleMovieClick() {
    const dropdownMovieToggle = dropdownMovieToggleRef.current
    const dropdownMovieMenu = dropdownMovieMenuRef.current
      if (dropdownMovieMenu?.className.includes('hidden')) {
        dropdownMovieMenu?.classList.add('block')
        dropdownMovieMenu?.classList.remove('hidden')
        dropdownMovieToggle?.classList.add('text-blue-600')
        dropdownMovieToggle?.classList.remove('text-black')
      } else {
          dropdownMovieMenu?.classList.add('hidden')
          dropdownMovieMenu?.classList.remove('block')
          dropdownMovieToggle?.classList.add('text-black')
          dropdownMovieToggle?.classList.remove('text-blue-600')
      }
  }
  
    return <div className=" shadow-md h-32 mx-60 rounded-md flex items-center">
      <div className="relative w-max mx-auto">
      <button type="button" id="dropdownCinemaToggle" onClick={handleCinemaClick} ref={dropdownCinemaToggleRef}
        className="px-5 py-2.5 rounded text-black text-sm font-semibold tracking-wide border-none outline-none bg-white flex items-center">
        เลือกโรงภาพยนตร์
        <img src={dropdownIcon} alt="logo" className='w-9 ' />
      </button>
      <hr className='border-2'></hr>
      <ul id="dropdownCinemaMenu" ref={dropdownCinemaMenuRef} className='absolute hidden shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto'>
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
    <div className="relative w-max mx-auto">
      <button type="button" id="dropdownMovieToggle" onClick={handleMovieClick} ref={dropdownMovieToggleRef}
        className="px-5 py-2.5 rounded text-black text-sm font-semibold tracking-wide border-none outline-none bg-white flex items-center">
        เลือกภาพยนตร์
        <img src={dropdownIcon} alt="logo" className='w-9 ' />
      </button>
      <hr className='border-2'></hr>

      <ul id="dropdownMovieMenu" ref={dropdownMovieMenuRef} className='absolute hidden shadow-lg bg-white py-2 px-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto'>
        <div className='flex flex-wrap w-1/3'>
          {movies.map((movie,index) => (
          <li key={index} className='cursor-pointer px-4 pt-3 hover:bg-blue-50'>
            <img className='h-44 w-32' src={movie.poster}></img>
            <div className='text-blue-900 text-xs'>วันที่เข้าฉาย: {movie.date}</div>
            <div className='font-semibold text-sm text-gray-950'>{movie.title}</div>
          </li>
          ))}
          
        </div>
      </ul>
    </div>
    <div className="relative w-max mx-auto">
      <button type="button" 
        className="px-14 py-4 rounded text-white text-sm font-semibold tracking-wide border-none outline-none bg-gradient-to-r from-blue-700 to-sky-400 flex items-center hover:shadow-sky-200 hover:shadow-xl">
        รอบฉาย
      </button>
    </div>
      

  </div>
}