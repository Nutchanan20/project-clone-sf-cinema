import {useRef} from 'react';
import Dropdown from '../../../../components/dropdown-search';

export default function Search() {

  return (
    <div className="flex items-center shadow-md rounded-md px-20 mx-80 h-28">
    <Dropdown 
    title='example 1'
    list={['option 1', 'option 2']}
  />
  <Dropdown 
    title='example 2'
    list={['option 1', 'option 2']}
  />
  </div>
  )

}
