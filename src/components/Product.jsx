import React from 'react'
import { NavLink } from 'react-router-dom'
import { baseUrl } from '../helpers/BaseUrl'

const Product = ({id,name,description,price,image,category}) => {
  return (
  <NavLink to={`/single/${id}`} className='relative'>
      <div className='card shadow p-1'>
    <div className="card-image">
    <img src={`${baseUrl}${image}`} alt=""  className='w-full  radius' style={{maxHeight:'130px',minHeight:'130px'}}/>

    </div>
    <div className="card-content flex flex-col gap-2 p-3 ">
        <h1 className='text-xl text-gray-800'>{name}</h1>
        <p className='text-gray-500 text-justify mb-2'
        
        style={{height:'30px',maxHeight:'30px',overflow:'hidden'}}
        >{description.substring(0,60)}...</p>
        <span className='absolute top-0 right-1 bg-purple-300 rounded-md
        p-2  text-white   text-center
        '>{category}</span>
        <div className='flex justify-between mt-3'>
          <h4>Price</h4>
          <h2 className='text-red-400'>{price}</h2>
        </div>
        <NavLink to={`/single/${id}`}>
        Read More

        </NavLink>

    </div>
    


    </div>
  </NavLink>
  )
}

export default Product