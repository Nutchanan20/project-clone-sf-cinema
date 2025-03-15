import {useRef} from 'react';
import DropdownSearch from '../../../../components/dropdown-search';
import Batmat from '../../../../assets/pictures/movie/batman.png';
import Joker from '../../../../assets/pictures/movie/joker.jpg';
import SpiderMan from '../../../../assets/pictures/movie/spider-man.jpg';
import Deadpool from '../../../../assets/pictures/movie/deadpool.jpg';
import Superman from '../../../../assets/pictures/movie/superman.jpg';
import Avengers from '../../../../assets/pictures/movie/avengers.jpg';


export default function Search() {

  return (
    <div className="flex items-center justify-center shadow-md rounded-md w-1/2 h-auto mx-auto p-4">
      <div className="ml-10 w-1/3">
        <DropdownSearch 
          title='เลือกโรงภาพยนตร์'
          list= {
            [
              {value: 'option 1', img: undefined},
              {value: 'option 2', img: undefined},
              {value: 'option 3', img: undefined},
              {value: 'option 4', img: undefined},
            ]
          }
        />
        <hr className="w-60 border-t border-gray-300 my-2 border-b-2" />
      </div>
      <div className="ml-10 w-1/3">
        <DropdownSearch 
          title='เลือกภาพยนตร์'
          list={
            [
              {value: 'Batmat', img: {src: Batmat, date: '01/01/2021'}},
              {value: 'Joker', img: {src: Joker, date: '12/04/2021'}},
              {value: 'SpiderMan', img: {src: SpiderMan, date: '05/06/2021'}},
              {value: 'Deadpool', img: {src: Deadpool, date: '01/01/2021'}},
              {value: 'Superman', img: {src: Superman, date: '12/04/2021'}},
              {value: 'Avengers', img: {src: Avengers, date: '05/06/2021'}}
            ]
          }
        />
        <hr className="w-60 border-t border-gray-300 my-2 border-b-2" />
      </div>
      <button className="px-20 py-5 mx-auto rounded text-white text-sm tracking-wide border-none outline-none bg-gradient-to-r from-blue-700 to-sky-400 font-semibold hover:shadow-sky-200 hover:shadow-xl">รอบฉาย</button>
    </div>
  )

}
