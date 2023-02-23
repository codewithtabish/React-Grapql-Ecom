import React,{useState,useEffect} from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineShoppingCart} from 'react-icons/ai'
const NavBar = () => {
  const [menu, setmenu] = useState(false)
 const params=  useParams()
  const navi=  useNavigate()
  const jwt=localStorage.getItem('jwt')
  useEffect(() => {
    // const {cart}=params
    // alert(cart)
    if(params==='/cart'){
      alert('ji')
    }
 
  }, [params])
  
  const  logout=()=>{
    localStorage.removeItem('jwt')
    navi('/login')

  }
  return (
    <div className='md:shadow-md shadow p-4 md:p-0'>
    <div className="container mx-auto flex items-center justify-between  px-10">
        <div className="left ml-4 md:ml-0 flex gap-8 items-center">
            <h2 className='logo text-xl'><NavLink to={'/'}>Daraz</NavLink> </h2>
       
        </div>
        <div className="right md:block hidden">
       
            <ul className='flex space-x-3'>
            {
       

       jwt?
       <div className='flex items-center relative top-0'>
       <NavLink className='p-4 text-2xl cursor-pointer'
       to={'/cart'}><AiOutlineShoppingCart/> </NavLink>
       <span className='absolute w-6 h-6 right-100 p-3 left-8 cursor-pointer text-center
       flex items-center justify-center
        rounded-full bg-purple-500 text-white'>10</span>
        <li className='p-4 text-red-900 cursor-pointer'
           onClick={logout}
        >Logout</li>
       </div>:
       
     <>

             <li className='p-4'><NavLink to={'/signup'} className='text-gray-600'>SignUp</NavLink> </li>
             <li className='p-4'><NavLink to={'/login'} className='text-gray-600'>Login</NavLink></li>
     </>
     }
            </ul>
        </div>
        <div className='block md:hidden mr-4 md:mr-0  relative'>
        <BiMenuAltRight className='text-2xl text-gray-900' onClick={()=>setmenu(!menu)}/>
        <div className={` bg-gray-800     transition-all duration-500 ease-linear 
        z-10
        absolute right-0
        top=10 ${menu?"-translate-x-0":"-translate-x-full"  }`}
        
          style={{width:'100vw',height:'100vh',transform:''}}>

        <ul className='flex flex-col gap-4 justify-center items-center'>
        {
       

          jwt?
          <>
          <li className='p-4 text-2xl text-white '><AiOutlineShoppingCart/> </li>
           <li className='p-4 text-red-900 cursor-pointer'
           onClick={logout}
           >Logout</li>
          </>:
          
        <>

                <li className='p-4'><NavLink to={'/signup'} className='text-gray-600'>SignUp</NavLink> </li>
                <li className='p-4'><NavLink to={'/login'} className='text-gray-600'>Login</NavLink></li>
        </>
        }
            </ul>
        
        </div>

        </div>
    </div>

    
    </div>
  )
}

export default NavBar