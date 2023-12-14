import { FunctionComponent } from "react"
import Footer from "./footer/footer"
import Header from "./header/header"
import { LayoutProps } from "./layout.props"
import Sidebar from "./sidebar/sidebar"
import styles from './layout.module.css'


const Layout = ({children ,className ,...props}:LayoutProps):JSX.Element => {
  
  return (
    <div  className={styles.wrapper} {...props}>
        <Header  className={styles.header} />
        <Sidebar  className={styles.sidebar} />
        <div className={styles.body} > {children}</div>
        <Footer className={styles.footer} />
     </div>
  )
}

export const withLayout =  <T extends Record<string,unknown> >(Component:FunctionComponent<T>)=>{
 
  return  function loyoutComponent (props:T){
     console.log(props)
   return <Layout>
     <Component {...props}/>
    </Layout>
       
  }
}
