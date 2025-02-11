import React from 'react'
import { useEffect, useState } from 'react'

export const TablePhone = () => {

    const baseURL= import.meta.env.VITE_BASE_URL
    const endPoint= "phones"

    const [phone, setPhones]= useState()

    const getPhones= async ()=>{

        const url= `${baseURL}${endPoint}`
        const result= await fetch(url)
        const data= await result.json()
        setPhones(data)

    }

    useEffect(()=>{
      getPhones()
    },[])

  return (
    <>
  <table className='table'>
                <thead>
                    <tr>
                        <th>Id</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        phone.map((item) => (
                            <tr key={item.client_id}>
                                <td>{item.phone_number}</td>
                              
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
  )
}
