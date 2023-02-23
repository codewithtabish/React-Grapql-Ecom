import { useQuery } from '@apollo/client'
import React,{useState,useEffect} from 'react'
import Categories from '../components/Categories'
import Pagination from '../components/Pagination'
import Product from '../components/Product'
import Spinner from '../components/Spinner'
import { GETALLPRODUCTS } from '../gqlOperation/queries'

const Home = () => {
    const [page, setpage] = useState(1)
    const [itemsNo, setitemsNo] = useState(20)
    const {loading,error,data,refetch}=   useQuery(GETALLPRODUCTS,{
        variables:{
            "pagination": {
                "page": page,
                "pageSize": itemsNo
              }
        }
     
          
        
})
useEffect(() => {
    if(page!=1){
        refetch()

    }

}, [page])

const updateChange=(item)=>{
    setpage(item)
}
   if(loading) return <Spinner/>
   if(error) return <Spinner/>
   
  
  return (
    <section>
    <div className="container mx-auto py-5">
    <Categories/>
    

    <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>

    {
        data.products.data.map(({id,attributes})=>{
            {/* const {name,price,description,price}=attributes */}
            return (
                <Product key={id}
                    name={attributes.name}
                    price={attributes.price}
                    description={attributes.description}
                    id={id}
                    category={attributes.category.data.attributes.name}
                    image={attributes.images.data[0].attributes.url}
                />
            )
        })
    }
    </div>

    </div>

    {
      data.products.meta.pagination.pageCount>1 ? <Pagination pageCount={data.products.meta.pagination.pageCount}
    updateChange={updateChange}

    />:""
        
    }

    </section>
  )
}

export default Home