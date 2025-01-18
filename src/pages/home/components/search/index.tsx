import {useRef} from 'react';
import Dropdown from '../../../../components/dropdown-search';
import Batmat from '../../../../assets/pictures/movie/batman.png';
import Joker from '../../../../assets/pictures/movie/joker.jpg';
import SpiderMan from '../../../../assets/pictures/movie/spider-man.jpg';


export default function Search() {

  return (
    <div className="flex items-center shadow-md rounded-md px-20 mx-80 h-28">
    <Dropdown 
    title='example 1'
    list= {
      [
        {value: 'option 1', img: undefined},
        {value: 'option 2', img: undefined},
        {value: 'option 3', img: undefined},
        {value: 'option 4', img: undefined},
      ]
    }
  />
  <Dropdown 
    title='example 2'
    list={
      [
        {value: 'option 1', img: {src: Batmat, date: '01/01/2021'}},
        {value: 'option 2', img: {src: Joker, date: '12/04/2021'}},
        {value: 'option 3', img: {src: SpiderMan, date: '05/06/2021'}},
        {value: 'option 4', img: {src: Batmat, date: '01/01/2021'}},
        {value: 'option 5', img: {src: Joker, date: '12/04/2021'}},
        {value: 'option 6', img: {src: SpiderMan, date: '05/06/2021'}}
      ]
    }
  />
  </div>
  )

}
