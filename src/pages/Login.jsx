import { useMutation } from '@apollo/client'
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'
import { LOGINUSER } from '../gqlOperation/mutation'

const Login = () => {
  const [formData, setFormData] = useState({})
 const navigate=  useNavigate()
  const [loginUser,{loading,error,data}]=useMutation(LOGINUSER)
  console.log('The form data is '+data)
  if(loading) return <Spinner/>
  if(error) {

   toast.error(`${error.message}`)
  }
  if(data) {
    console.log(data.login.jwt)
    navigate("/")
    
// 
    localStorage.setItem("jwt",data.login.jwt)

   toast.success(' login successfully ...')
    
   
   
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
  // const {name}=formData


  }
  return (
    <div className='container mx-auto md:py-10'>
    <div className='md:w-1/2  mx-auto text-center'>
    <h2 className='text-2xl text-center font-bold my-5'>Login </h2>
   
   

       <form onSubmit={formSubmission}  className='  flex flex-col gap-5 items-center'>
      <input type="text"  placeholder='UserName or email' className='p-2 w-11/12 border-gray-200
      border-1 rounded-md offset border-2 hover:border-gray-400 
      
      '  name='identifier' onChange={handler}/>
      <input type="text"  placeholder=' Password' className='p-2 w-11/12 border-gray-200
      border-1 rounded-md offset border-2 hover:border-gray-400 
      
      '  name='password' onChange={handler} />
      <input type="submit" value="Login"  className='px-8  py-2 text-white bg-purple-400 w-fit

      hover:cursor-pointer
      '
      onSubmit={handler}
    

      

      />
  
  

      </form>
    </div>


    </div>
  )
}

export default Login