import { useQuery } from '@apollo/client'
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { GETSINGLEPRODUCT } from '../gqlOperation/queries'
import Carousel from '@brainhubeu/react-carousel';
import { baseUrl } from '../helpers/BaseUrl'
import  { Dots } from '@brainhubeu/react-carousel';
import AddToCart from './AddToCart'
import { useCart } from 'react-use-cart'

const SingleProduct = () => {
 const {pid}=  useParams()
 const {addItem}=useCart()
 const {loading,error,data}=useQuery(GETSINGLEPRODUCT,{
  variables:{id:pid}
 })
 if(loading) return <Spinner data={'loading'}/>
 if(error) return <Spinner data={'error'}/>
 const {name,price,description,images}=data.product.data.attributes

 const {id}=data.product.data
//  AddToCart
 const  addToCatFun=()=>{
  
    addItem({
      id,
      name,
      price,
   
      img: baseUrl+images.data[0].attributes.url

    })
    
  

 }
  return (
    <section >
    {/* {baseUrl} */}
    <div className='container mx-auto'>
    <Carousel plugins={['arrows']} className='md:mt-1  md:mx-20 md:p-4 mx:2 '
    
    >
    {images.data.map(({id,attributes})=>{
      return(
           <img  className='w-full px-2' src={`${baseUrl}${attributes.url}`} alt=""  style={{height:"40vh",objectFit:'cover'}}/>
      
   

      )
     
     
      
    })}

   
  </Carousel>
 
 <div className="detail-data md:mx-28 md:p-4 mx-6 flex flex-col gap-4 lg:mt-0 md:mt-0 mt-5">

<div className='flex justify-between'>
<h2 className='text-2xl font-bold '>{name}</h2>
<span className='text-xl text-red-700'>₹ {price}</span>
</div>
 <p className='text-gray-600 text-justify'>{description}</p>
 <NavLink to={'/'} className='p-3 text-white bg-purple-500 rounded-sm w-fit mb-8 md:mb-0'
 onClick={()=>addToCatFun()}
 >Add To Cart</NavLink>
 </div>

  




    </div>

    </section>
    
    
  )
}

export default SingleProduct