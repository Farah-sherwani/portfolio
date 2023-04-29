import Link from 'next/link'

import head from 'next/head'


import { useState } from "react"

const Counter = () => {
const [counter, setCounter] = useState<number>(0)

const incrementCount = () : void =>{
    setCounter(counter +1) 
    //counter++
}

const decrementCount = () : void =>{
    //counter--
    setCounter(!counter ? 0 : counter -1) 
}
{
    return
     (
      <>
      <Link href="/blog">go to blog</Link>
 
       <h1>Counter : {counter} </h1>
       < button onClick ={incrementCount }>Increase</button>
       <button onClick = {decrementCount}>Decrease</button>
     </>)
      
    }
      
    
  }
   export default Counter

