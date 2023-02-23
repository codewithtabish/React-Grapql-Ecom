import React from 'react'
import ReactLoading from 'react-loading';

const Spinner = ({data}) => {
  return (
    <div>

    <div className='flex justify-center items-center  w-full ' style={{height:'80vh'}}>
    <div className='container mx-auto flex gap-4 items-center justify-center'>
    <ReactLoading type={'bars'} color={'gray-400'} height={'7%'} width={'7%'} 
    delay='2000'

    />
    <ReactLoading type={'balls'} color={'#d3d'} height={'7%'} width={'7%'} 
    delay='2000'

    />
  
    </div>
    
    
    

    </div>
   
 
    </div>
  )
}

export default Spinner