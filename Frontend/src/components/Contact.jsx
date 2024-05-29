import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {


  return (
    <>
   <div className='flex h-screen items-center justify-center '>
   <div>
        <div>
           <form>
            {/* if there is a button in form, it will close the modal */}
             <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
             >✕</Link >
            
            <h3 className="font-bold text-xl">Contact Us</h3>
            <div className='mt-4 space-y-2'>
                <span>Name</span> <br />
                <input type="text"  placeholder='Enter your name' className='w-80 px-3 py-2 border rounded-md outline-none'
                />
                
            </div>
            <div className='mt-4 space-y-2'>
                <span>Email</span> <br />
                <input type="email"  placeholder='Email Address' className='w-80 px-3 py-2 border rounded-md outline-none'
              />

            </div>
            <div className='mt-4 space-y-2'>
                <span>Message</span> <br />
                <textarea placeholder='Type your message' className="textarea textarea-bordered textarea-md w-full max-w-xs outline-none" ></textarea>
               
                
            </div>
            <div className='flex justify-around mt-4'>
              <button className="bg-blue-600 text-white rounded-md px-3 py-2 hover:bg-blue-700 duration:200 justify-beginr"
              >Submit</button>
              
            </div>
            </form>
        </div>
      </div>
   </div>
   </>
  )
}

export default Contact
