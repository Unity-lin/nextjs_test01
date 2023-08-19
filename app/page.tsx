'use client'


import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0)
  return (
    <main>
      <div> 
        <h1> Counter {counter} </h1>
        </div>
        <div>
          <button onClick={()=>{setCounter((pp)=>{return pp+1})}} className='plus'> + </button>
          <button onClick={()=>{setCounter((mm)=>mm-1)}} className='minus'> - </button>
        </div>
    </main>
  )
}

