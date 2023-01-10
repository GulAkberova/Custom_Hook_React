import React,{useEffect} from 'react'
import useLocalStorage from '../customHooks/useLocalStorage'

function LocalStorage() {
const[data,setData]=useLocalStorage('name','')
useEffect(()=>{
    console.log(data)
  },[data])
  return (
    <>
    <input value={data} onChange={(e)=>setData(e.target.value)}/>

    </>
  )
}

export default LocalStorage