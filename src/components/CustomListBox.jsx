import React from 'react';
import addToCustomList from '../helpers/addToCustomList';
import { useSelector } from 'react-redux';

const CustomListBox = (props) => {

  const customLists = useSelector(state => state.customListMovies.customListMovies);

  const listNames = customLists?.map((list) => {
    return (
      <div
        key={list.id}
        className='px-2 cursor-pointer hover:text-indigo-500 my-1'
        onClick={() => addToCustomList(list.id, props.media)}
      >
        {list.name}
      </div>
    )
  })

  return (
    <div className='absolute bg-[#111111] py-2 px-2 border border-indigo-500 bottom-5 left-5 z-50 rounded-lg text-sm font-light flex flex-col w-[170px] h-[170px] justify-between'>
      <div className='sticky title border-b pb-2 text-center mb-1'>Add to custom list</div>
      <div className='overflow-y-auto'>
        {props.title
          ? listNames
          : 'Add TV feature coming soon...'}
      </div>
      <div className='sticky footer border-t pt-1 text-center mt-1 cursor-pointer'>Create New +</div>
    </div>
  )
}

export default CustomListBox;