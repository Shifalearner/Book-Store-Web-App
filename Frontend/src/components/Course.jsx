import React, { useEffect, useState } from 'react'
import Cards from "../components/Cards"
import axios from "axios"
import { Link} from 'react-router-dom'

 
function Course() {

    const [book,setBook]=useState([])
    useEffect(() =>{
    const getBook = async()=>{
        try {
          const res = await axios.get("http://localhost:4001/book");
          console.log(res.data)
          setBook(res.data)
        } catch (error) {
           console.log(error)
        }
        
    };
    getBook();
    },[]);
    
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
        <div className='mt-28 items-center justify-center text-center dark:bg-slate-900 dark:text-white'>
            <h3 className='text-2xl font-semibold md:text-4xl'>We're 
            delighted to have you <span className='text-blue-600'>Here! :)</span></h3>
            <p className='mt-12'>
                Unlock a world of knowledge with our exclusive selection 
                of paid books. Dive deep into expert insights and 
                comprehensive guides crafted by top authors. Whether 
                you're looking to advance your career, learn a new 
                skill, or enrich your personal growth, our curated 
                collection has something for you. Each book offers 
                valuable content designed to educate and inspire. 
                Invest in your future with high-quality resources that 
                provide lasting value. Start your journey today and 
                achieve your goals with the best in educational literature.
                </p>
                <Link to='/'>
                
                <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300 mt-6'>Back</button>
                </Link>
        </div>
        <div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
                {book.map((item)=>(
                        <Cards key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>

    </div>
    </>
  )
}

export default Course
