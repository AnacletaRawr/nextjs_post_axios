'use client'
import { useState, useEffect, useLayoutEffect } from 'react'
import styles from '../page.module.css'


export default function Exampleuno() {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }


  useEffect(()=>{
    console.log('useEffect')
    if(count) alert( ` Me precionaste ${count} veces`)
  },[count])

  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  }, [count]);

  return (
    <main className={styles.main}>
      <div>eJemplo de Use State</div>
      <button onClick={handleClick}>
        Me precionaste {count} veces
      </button>
    </main>
  )
}