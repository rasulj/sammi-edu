import cn from 'classnames'
import style from './menu.module.css'
import { useContext, } from 'react'
import { AppContext } from '../../context/app.context'
import { firstLevelMenu } from '../../helpers/constanta'
import Link from 'next/link'
import { IFirstLevelMenu, PageItem } from '../../interfaces/menu.interface'
import { useRouter } from 'next/router'


const Menu = () => {
    const {menu ,firstCategory ,setMenu } = useContext(AppContext)
    const router = useRouter()
    const openSecondLevel = (category:string)=>{
   setMenu && setMenu(
    menu.map(c =>{
        if(c._id.secondCategory === category){
           c.isOpened = !c.isOpened
        
        }
          return c
      })
   ) 
    }
 const bulidFirstLevel = ()=>{
    return(
      <>
      { firstLevelMenu.map( c => (
        <div key={c.route}> 
          <Link href={`/${c.route}`}>
          <div  className={cn(style.firstLevel , {
            [style.firstLevelActive]:c.id === firstCategory
          })}>   
            { c.icon}
            <span>{c.name}</span>
          </div>
           </Link>
            { c.id == firstCategory && bulidSecondLevel(c)}
        </div>
      ))}
      </>
    )
 }
 const bulidSecondLevel = (menuItem:IFirstLevelMenu)=>{
 
return(
         <div className={cn(style.secondBlock)}>
          { menu.map( m =>{
            if(m.pages.map( p => p._id).includes(router.asPath.split('/')[2]) ){
              m.isOpened = true
            }
         
            
         return(
          <div key={m._id.secondCategory}>
              <div className={cn(style.secondLevel)} onClick={()=> openSecondLevel(m._id.secondCategory)}> {m._id.secondCategory} </div>
              <div className={cn(style.secondLevelBlock,{
                [style.secondLevelBlockActive]:m.isOpened
              })}>
                 {bulidThirdLevel(m.pages ,menuItem.route)}</div>
            </div>
         )   
          })}
         </div>
)
 }
 const bulidThirdLevel = (page:PageItem[], route:string)=>{
  
  
return page.map(m =>(
 
    <Link href={`/${route}/${m._id}`} className={cn(style.thirdLevel ,{
      [style.thirdLevelActive]:router.asPath == `/${route}/${m._id}`
    } )} >
      {m.title}
    </Link>
 
  
))

 }
    return(
      <div className={cn(style.menu)}>
        {bulidFirstLevel()}
      </div>
    )
}

export default Menu