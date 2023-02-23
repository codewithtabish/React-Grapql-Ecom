import React from 'react'

const Pagination = ({pageCount,updateChange}) => {
  return (
    <div className='container mx-auto py-4 text-center bottom-0  fixed'>
    {
        [...Array(pageCount).keys()].map((item,index)=>{
            return <button key={index} className='py-2 px-4 text-white rounded-full
            shadow-md  hover:bg-cyan-600 duration-700 cursor-pointer transition-all
             bg-purple-400 mx-2' 
             onClick={()=>updateChange(item+1)}
             >{item+1}</button>
        })
    }


    </div>
  )
}

export default Pagination