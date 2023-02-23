import React ,{useState} from 'react'
import { useCart } from 'react-use-cart'
import Spinner from '../components/Spinner'
import { tableHeader } from '../helpers/BaseUrl'
import {IoIosRemoveCircleOutline} from 'react-icons/io'
import { toast } from 'react-toastify'
import { Zoom ,Bounce} from 'react-reveal'
import OrderModal from '../Modals/OrderModal'
const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]
const AddToCart = () => {
  const [showModal, setShowModal] = useState(false)
  const {isEmpty,items,cartTotal,removeItem}=useCart()

  const jwt=localStorage.getItem('jwt')
  // alert(jwt)
  if(isEmpty){
     <Spinner/>
  }
  if(items){
   <h1>Ye there is some data</h1>
  }
  const removeData=(name,id)=>{
    removeItem(id)
    toast.warning(`${name} has been removed ...`)


  }
  return (
    <>

    <div className='section py-10 md:py-14 container mx-auto'>
    <h1 className='text-gray-900 text-xl font-semibold text-center my-5'>Cart Items</h1>
    <div className="grid gap-5 p-4  items-center">
  

      <div className="left md:col-start-1 md:col-end-5 col-start-1 col-end-12">
      {
        items.map((item,index)=>{
          return(
            <div className="card flex justify-between gap-4 items-center" key={index} >
           <div className='flex items-center'>
           <img src={item.img} alt=""  className='w-20 h-20 rounded-full p-4  '/>
           <div className='flex items-center justify-between'>
          <div>
          <h2>{item.name}</h2>
          <p>price : ₹ {item.price}</p>
          </div>
           
           <div className='flex items-center'>
         
      
     

           </div>
            </div>
           </div>
           <div>
           <span className='text-2xl text-red-800 cursor-pointer'
           onClick={()=>removeData(item.name,item.id)}
           ><IoIosRemoveCircleOutline/></span>
           </div>
           



            </div>
        
          )
        })
      }
 
  

      </div>
  {
    !isEmpty?
    <div className="right md:col-start-8 rounded-md md:col-end-12 col-start-1 col-end-12" >
      <div className='main flex flex-col gap-4 md:items-center shadow-lg p-4'>
      <div className="left md:col-start-1 md:col-end-5 col-start-1 col-end-12">
      {
        items.map((item,index)=>{
          return(
            <div className="card flex justify-center gap-4 items-center" key={index} >
           <div className='flex items-center'>
           <img src={item.img} alt=""  className='w-20 h-20 rounded-full p-4  '/>
           <div className='flex items-center justify-between'>
          <div className='flex flex-col gap-2'>
          <h2>{item.name}</h2>
          <p>price : ₹ {item.price}</p>
        
          </div>
           
           <div className='flex items-center'>
         
       
         
      
     

           </div>
            </div>
           </div>
          
           



            </div>
        
          )
        })
      }
 
  

      </div>
      <div>
      <hr className='bg-gray-800 border-2 border-red-400 w-full min-w-min' />
      <br />
     <div className='flex flex-col gap-4'>
     <p className='text-sm'>Total    : ₹ {cartTotal}</p>
    
     <button className='p-3 text-white bg-purple-600 w-full
     
     
     '
     onClick={()=>setShowModal(true)}
     >Checkout</button>
     </div>
      </div>

      </div>

   

      </div>
    :<div className='flex  col-start-1   flex-col text-center col-end-12 items-start justify-center'>
    <>
    <p className='mx-auto'>Your Card is Empty ...</p>

 
    <Bounce top right className='flex flex-col gap-2 items-center  text-center'>
    <br />
    <img src="/images/cart.jpg" alt="" srcset="" className='w-1/3 h-1/3 mx-auto' />
    
   
    
   
   
    </Bounce>
    
    </>
    </div>
  }
    </div>

   
    

    </div>
    <OrderModal  showModal={showModal} setShowModal={setShowModal}/>
    </>
  )
}

export default AddToCart


