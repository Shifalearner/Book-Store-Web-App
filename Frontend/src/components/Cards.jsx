import React from 'react'

const Cards = ({ item }) => {

  return (
    <>
     <div className='mt-6 my-6 p-3'>
     <div className="card w-95 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={item.image} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge text-white bg-blue-700 p-3">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline p-3 hover:bg-blue-700 hover:text-white duration-200 cursor-pointer rounded-full">${item.price}</div> 
      <div className="badge badge-outline p-4 hover:bg-blue-700 hover:text-white duration-200 cursor-pointer rounded-full">Buy Now</div>
    </div>
  </div>
</div>
      </div>
    </>
   
  )
}

export default Cards
