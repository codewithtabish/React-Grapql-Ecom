import React,{useState} from 'react'
import Modal from 'react-modal'
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  CardCvcElement,
  CardNumberElement,
} from '@stripe/react-stripe-js';
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';

const OrderModal = ({showModal,setShowModal}) => {
    const stripe = useStripe();
    const elements = useElements();
   const {cartTotal,items,emptyCart} =  useCart()
   const [process, setprocess] = useState(false)
     const [formData, setFormData] = useState({})
     const [cardError, setcardError] = useState(false)
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          height:'auto',
          width:'80vw'
        },
      };
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
      function openModal() {
        setShowModal(true);
      }
      function closeModal() {
        setShowModal(false);
      }
      const handleChange=(e)=>{
      setFormData({
        ...formData,
        [e.target.name]:e.target.value
      })

      }



        const makePaymentRequest=async(allFormData)=>{
        try{
            const res=await fetch("http://localhost:1337/api/orders",{
                method:"post",
                headers: {
                    'Content-Type': 'application/json',
                     "Authorization":'Bearer'+localStorage.getItem('jwt')
                  },
               body:JSON.stringify(allFormData)   
            })
            if(res.status!=200){

             toast.error("Some payment error...")
             setShowModal(false)
            }

            return await res.json()

        }catch(e){
            toast.error('The error is '+e)
            setShowModal(false)
            setcardError(true)
            // console.log()

        }

    }
    const  handleSubmit = async (event) => {
        event.preventDefault();

        if (elements == null) {
          return;
        }
        const cardElement=elements.getElement(CardElement)
      const payload=   await stripe.createToken(cardElement)
      const fullData={
        ...formData,
        token:payload?.token?.id,
        amount:cartTotal,
        items:items
      }
      console.log('The data is '+fullData)
      setprocess(true)
    //   setShowModal(false)
      await makePaymentRequest(fullData)
      setprocess(false)
     
       if( !cardError) {
        return

    }else{

        toast.success("Thank You for your shopping ...") 
        emptyCart()
        setShowModal(false)
    }

        
     
      


    
      
      };

  
    if(process){
        return <h1>Loading.....</h1>
    }
  return (
    <div>
    <Modal
    isOpen={showModal}
    onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    style={customStyles}
    contentLabel="Example Modal"
    >
    <div className="container mx-auto">
    <form action=""  onSubmit={handleSubmit}>
     <div className='grid gap-4'>
     <div className='md:col-start-1 md:col-end-6 col-start-1 col-end-12'>
     <input type="text"  
            name='shippingAddress'
            className='w-11/12  py-2 border-2 border-gray-500 rounded-md px-2'
            placeholder='shippingAddress'

            required
            onChange={handleChange}
            
            
        />
     </div>
     <div className='md:col-start-6 md:col-end-12 col-start-1 col-end-12'>
     <input type="text"  
            name='city'
            className='w-11/12  py-2 border-2 border-gray-500 rounded-md px-2'
            placeholder='City'

            required
            onChange={handleChange}
            
            
        />
     </div>
     <div className='md:col-start-1 md:col-end-6 col-start-1 col-end-12'>
     <input type="text"  
            name='state'
            className='w-11/12  py-2 border-2 border-gray-500 rounded-md px-2'
            placeholder='State'

            required
            onChange={handleChange}
            
            
        />
     </div>
     <div className='md:col-start-6 md:col-end-12 col-start-1 col-end-12'>
     <input type="number"  
            name='pin'
            className='w-11/12  py-2 border-2 border-gray-500 rounded-md px-2'
            placeholder='Pin Code'

            required
            onChange={handleChange}
            
            
        />
     </div>
     <div className='md:col-start-1 md:col-end-12 col-start-1 col-end-12 py-2'>
     <CardElement className=''/>
 

     </div>
  
  
<div className='mt-5 bg-red-200 mx-auto place-self-center'>
    
  <input type="submit" value="Pay Now" className='bg-cyan-600 text-white
  py-2 px-3  cursor-pointer
  '  disabled={!stripe} 
  onSubmit={handleSubmit}

  />
  

</div>

   
     
     



     </div>
    </form>

    </div>
    
  



    </Modal>


    </div>
  )
}

export default OrderModal