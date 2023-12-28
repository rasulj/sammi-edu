import { useEffect, useState } from "react"

export const  useScrolY = ():number=>{
 
    const isBrowser = typeof window !== 'undefined'
    const [scrolY,setScrolY] = useState<number>(0)

    const handleScrol = ()=>{
        const currentScrol = isBrowser ? window.scrollY : 0
        setScrolY(currentScrol)
    }
     useEffect(()=>{
        window.addEventListener('scroll',handleScrol,{passive:true})
        return () => window.removeEventListener('scroll',handleScrol)
     },[])
     return scrolY
}