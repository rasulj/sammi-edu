import cn from 'classnames'
import style from './menu.module.css'
import { useContext, } from 'react'
import { AppContext } from '../../context/app.context'
import { firstLevelMenu } from '../../helpers/constants'
import Link from 'next/link'
import { IFirstLevelMenu, PageItem } from '../../interfaces/menu.interface'
import { useRouter } from 'next/router'
import {motion} from 'framer-motion'



const Menu = () => {

  const { menu,setMenu,firstCategory} = useContext(AppContext)
 const variants ={
  hidden:{
    marginBottom: 0,
     
  },
  visible:{
    marginBottom: 20,
    transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
  }
 }
  const childrenVariants={
  hidden:{
     overflow: 0,
      height: 0
  },
  visible:{
    marginBottom: 20,
    transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
  }
 }
   const variantsChildren = {
    visible: {
      opacity: 1,
      height: 30,
    },
    hidden: {
      opacity: 0,
      height: 0,
    },
  };
const router = useRouter()
 
const openSecondBlock = ( category:string) =>{
  setMenu && setMenu( menu.map( c => {
    if( c._id.secondCategory === category){
      c.isOpened = !c.isOpened
    }
 return c
  }))
}
  
const bulidFirstLevel = ()=>{
  return(
    <>
     { firstLevelMenu.map( c =>(
      <div key={c.name}>
        <Link href={`/${c.route}`}>
          <div className={cn(style.firstLevel ,{
            [style.firstLevelActive]: c.id == firstCategory
          })}>
            {c.icon}
            <span> {c.name} </span>
          </div>
        </Link>
        <div >
          {c.id == firstCategory && bulidSecondLevel(c)}
        </div>
      </div>
     ))}
    </>
  )
}



const bulidSecondLevel = (menuItem: IFirstLevelMenu)=>{
  return(
    <div  className={cn(style.secondBlock)}>
      { menu.map( m => {
 if(m.pages.map(p => p._id).includes(router.asPath.split('/')[2])){
       m.isOpened = true
 }
      return  <div key={m._id.secondCategory}>
          <div  className={cn(style.secondLevel)} onClick={()=> openSecondBlock(m._id.secondCategory)}> {m._id.secondCategory} </div>
          <motion.div  variants={variants}  layout initial={m.isOpened ?'visible' : 'hidden'} animate={m.isOpened ?'visible' : 'hidden'}
           className={cn(style.secondLevelBlock )} > {bulidThirdLevel(m.pages,menuItem.route)}  </motion.div> 
        </div>
        })}
    </div>
  )
}
const bulidThirdLevel = (page:PageItem[] ,route:string)=>{
   return page.map(m =>(
    <motion.div variants={variantsChildren}  key={m._id}>
       <Link href={`/${route}/${m._id}`} className={cn(style.thirdLevel , {
      [style.thirdLevelActive]:`/${route}/${m._id}` == router.asPath
    })}>
      {m.title}
    </Link>
    </motion.div>
   
   ))
}
  return (
    <div className={cn(style.menu)}>{bulidFirstLevel()}</div>
  )
}

export default Menu







