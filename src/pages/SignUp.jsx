import React,{useState} from 'react'
import { useMutation } from '@apollo/client'

import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import { LOGINUSER, REGISTERUSER } from '../gqlOperation/mutation'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [formData, setFormData] = useState({})
  const navi=  useNavigate()
  const [loginUser,{loading,error,data}]=useMutation(REGISTERUSER)
  // const errorData=error.message
  console.log('The form data is '+data)
  if(loading){
    <Spinner/>
  }

  if(error) {
   <h1>{toast.error(`${error.message}`)}</h1>
  }
    
  if(data) {
    localStorage.setItem("jwt",data.register.jwt)
    console.log(data.register.jwt)
    
    toast.success(' SignUp  successfully ...')
    navi("/")
  }
  const handler=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
 

  }
const  formSubmission=(e)=>{
  e.preventDefault();

  loginUser({
    variables:{
      input:formData
    }
  })
}
  return (
    <div className='container mx-auto md:py-10'>
    <div className='md:w-1/2  mx-auto text-center'>
    <h2 className='text-2xl text-center font-bold my-5'>Sign Up </h2>
   
   

       <form onSubmit={formSubmission}  className='  flex flex-col gap-5 items-center'>
      <input type="text"  placeholder='UserName' className='p-2 w-11/12 border-gray-200
      border-1 rounded-md offset border-2 hover:border-gray-400 
      
      '  name='username' onChange={handler}/>
      <input type="email"  placeholder='email' className='p-2 w-11/12 border-gray-200
      border-1 rounded-md offset border-2 hover:border-gray-400 
      
      '  name='email' onChange={handler} />
      <input type="password"  placeholder=' Password' className='p-2 w-11/12 border-gray-200
      border-1 rounded-md offset border-2 hover:border-gray-400 
      
      '  name='password' onChange={handler} />
      <input type="submit" value="Sign Up"  className='px-8  py-2 text-white bg-purple-400 w-fit

      hover:cursor-pointer
      '
      onSubmit={handler}
    

      

      />
  
  

      </form>
    </div>


    </div>
  )
  
}

export default SignUp