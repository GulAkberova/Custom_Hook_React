import { useEffect } from 'react';
import './App.css';
import useLocalStorage from './customHooks/useLocalStorage';
import useFetch from './customHooks/useFetch';

function App() {
// const[data,setData]=useLocalStorage('name','afesw')

const {data,loading,error} =  useFetch('https://dummyjson.com/products/1');
if(loading) return 'loading...'

if(error){
 return console.log('error',error)
}
console.log(data)
// useEffect(()=>{
//   console.log(data)
// },[data])
// console.log(data)
  return (
    <>
     
    </>
  );
}

export default App;
