import { useEffect, useState } from 'react'

export const useTime = () => {
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    let interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  },[])

  return {time}
}