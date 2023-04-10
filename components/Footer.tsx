import React from 'react'
import { footerList1, footerList2, footerList3 } from '../utils/constants'


const List =({items , mt} : {items : String[] , mt : boolean}) => {
  return (
 <div className={`flex flex-wrap gap-2 ${mt ? "mt-5" : ""} `}>
        {
          items.map((item , index )=> (
            <p key={index} className='text-gray-400 text-sm hover:underline cursor-pointer'>
              {item}
            </p>
          ))
        }

      </div>
  )
}
const Footer = () => {
  return (
    <div className='mt-6 hidden xl:block '>
      <List items={footerList1} mt={false}/>
      <List items={footerList2} mt/>
      <List items={footerList3} mt/>

      <p className='text-sm text-black font-bold font-mono mt-8 border-t-2 border-black'>@Younes Tiktik Clone , Next , Sanity , React , TailwindCss</p>
    </div>
  )
}

export default Footer