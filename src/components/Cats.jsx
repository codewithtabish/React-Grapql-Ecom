import { useLazyQuery, useQuery } from '@apollo/client'
import React ,{useState} from 'react'
import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GET_ALL_CATEGORIES, GET_PRODUCT_BYNAME } from '../gqlOperation/queries'

const Cats = () => {
    const {loading,error,data}=useQuery(GET_ALL_CATEGORIES)
    const [query, setquery] = useState('')
    const [select, setselect] = useState(0)
  return (

    
  <div>

  <select className='py-2 md:px-5 border-1 border-purple-600 hover:ring-offset-0 outline-none 
  mr-4
  px-0 '
 

 


  >
  {
      

   
      data?.categories?.data?.map((item,index)=>{
          return(
         
              <option className=' px-4 bg-gray-300 py-5 text-white 
          mb-4
          mr-2

hover:bg-white' value={item.attributes.name} key={index}

>
<NavLink   className='inline' >
<>
{item?.attributes?.name}


</>

</NavLink>

</option>
         
           

          

  

         
          )
      })
  }


  </select>
</div>
 
  )
}

export default Cats