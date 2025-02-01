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
    <div className="flex items-center shadow-md rounded-md mx-80 h-28">
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
  </div>
  )

}
