import React, { useEffect, useState } from 'react'


function useAsyncRequest(amount) {
    const [loading, setLoading]=useState(false)
const [data,  setData]= useState(null)

useEffect(()=>{
    const fetchData= async()=>{
        try{
            setLoading(true)
            const response=await fetch(
                `https://randomuser.me/api/?results=${amount}`
            )
            const json = await response.json()
            setData(json.results, setLoading(false))}
            //here results is from api, api has two data results and info we need only results data and after loang again it will will become false thats why we using again here false as set laoding
        
        catch(err){
            console.log("something wrong in API")
setLoading(false)
        }}
        if(amount){
            fetchData(amount)}
        },[amount])
   
  return [data, loading]
  
}

export default useAsyncRequest