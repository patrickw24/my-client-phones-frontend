import React from 'react'
import { useState } from 'react'

export const FormPhone = () => {

  const [phone_number, setPhone_Number]= useState()

  const url= import.meta.env.VITE_BASE_URL
  const endpoint= "phone"


const phoneHandler= (event)=> {
  setPhone_Number(event.target.value)
}

const submitHandler = async ()=>{
  event.preventDefault()

  const newURL=`${url}${endpoint}`

  const tmp= {
    phone_number
  }

  const result= fetch(newURL,{
    method: "POST",
    headers:{
      'Content/Type': "application/json"
    },
    body: JSON.stringify(tmp)
  })

  window.location= "/"


}



  return (
    <>
     <div className="card p-3 mb-5">
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input className="form-control" type="number" onChange={phoneHandler} />
                </div>
                <button type='submit' className='btn btn-success w-100'> Create </button>
            </form>
            </div>
    </>
    
  )
}
