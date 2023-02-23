import { useLazyQuery, useQuery } from '@apollo/client'
import React ,{useState} from 'react'
import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GET_ALL_CATEGORIES, GET_PRODUCT_BYNAME } from '../gqlOperation/queries'
import Cats from './Cats'
import Product from './Product'

const Categories = () => {

    const [query, setquery] = useState('')
    const [select, setselect] = useState(0)
    const [hideResult, sethideResult] = useState(true)
    const [getProductByName,{loading,error,data}]=useLazyQuery(GET_PRODUCT_BYNAME,{

        variables:{
            "filters": {
                "name":    {
                  "startsWith": `${query}`
                  
                  
                }
              }
        }
    })
 


    useEffect (() => {
        if(query.length!=0){
            getProductByName()
            sethideResult(false)
        }
        else{
            sethideResult(true)
        }
       
       
     
    }, [query])
const handleData=(e)=>{
    setTimeout(() => {
        setquery(e.target.value)
        
    }, 1000);
}
  
   
    
  return (
    <>

    <div className='categ mt-4 mb-12 flex  items-center justify-center md:gap-8 gap-3 px-5 md:px-0'>




    <div className='flex items-center md:w-1/2 w-11/12'>

    <label for="simple-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Search" required
            onChange={handleData}
        />
    </div>
    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-cyan-700 rounded-lg border border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <span className="sr-only">Search</span>
    </button>
    </div>




    <Cats/>



    
    </div>

    {
    !hideResult &&   
    <section className='mt-10'>
    <div className="container mx-auto py-5">
  
    

    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>

    {
        data?.products?.data?.map(({id,attributes})=>{
            {/* const {name,price,description,price}=attributes */}
            return (
                <Product key={id}
                    name={attributes?.name}
                    price={attributes?.price}
                    description={attributes?.description}
                    id={id}
                    category={attributes?.category?.data?.attributes?.name}
                    image={attributes?.images?.data[0]?.attributes.url}
                />
            )
        })
    }
    </div>

    </div>

    </section>
 }
    </>
  )
}

export default Categories