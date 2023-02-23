import React ,{useState} from 'react'
import { toast } from 'react-toastify'

const CreateBlog = () => {
    const [formData, setformData] = useState({title:'',description:'',
    category:'',image:''
})
    const handleChange=(e)=>{
      setformData({
        ...formData,
        [e.target.name]:e.target.value
      })
    


    }
 const submitFormData=(e)=>{
    e.preventDefault();
    console.log(formData)
    createBlog(formData)
    toast.success("Ad ded ...")


}
const createBlog=async(allFormData)=>{
try{
    const res=  await  fetch("http://localhost:1337/api/blogs",{
        method:'post',
        headers:{
            'Content-Type':'application/json',
            // "Authorization":"Bearer "+localStorage.getItem('jwt')
        },
        body:JSON.stringify(allFormData)
    })
   return await res.json()
}catch(e){
    toast.error(e)
}
}
  return (
    <>
    <div className='container mx-auto  py-10'>
        <form class="w-full max-w-lg mx-auto" onSubmit={ submitFormData}>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        title
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" required
      name='title'

      onChange={handleChange}
      />

    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Category
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" required
            name='category'
            onChange={handleChange}
      />
    </div>
    <div className='w-full px-3 '>
    <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 
    leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="description here "
    rows={10} cols={10}
    required 
    name='description'
    onChange={handleChange}
    />
     <div className='w-full px-3 mt-10'>
     <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type='file'
     accept="image/*"  placeholder="Doe" required 
     name='image'
     onChange={handleChange}
     />

   <div className='w-full px-3 mt-10'>
   <button type='submit' className='bg-purple-300 py-3 px-3' onSubmit={submitFormData}>Create</button>
     </div>

     </div>

    </div>
  </div>

</form>
        </div>
    </>
  )
}

export default CreateBlog