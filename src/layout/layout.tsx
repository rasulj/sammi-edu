import { FunctionComponent } from "react"
import Footer from "./footer/footer"
import Header from "./header/header"
import { LayoutProps } from "./layout.props"
import Sidebar from "./sidebar/sidebar"
import styles from './layout.module.css'
import { AppContextProvider, IAppContext } from "../context/app.context"
import { ScrolUP } from "../components"
import { useRouter } from "next/router"


const Layout = ({children ,className ,...props}:LayoutProps):JSX.Element => {
  
  return (
    <div  className={styles.wrapper} {...props}>
        <Header  className={styles.header} />
        <Sidebar  className={styles.sidebar} />
        <div className={styles.body} > {children}</div>
        <Footer className={styles.footer} />
         <ScrolUP/>
     </div>
  )
}

export const withLayout =  <T extends Record<string,unknown> & IAppContext >(Component:FunctionComponent<T>)=>{
 
  return  function loyoutComponent (props:T){
  const router = useRouter()
   return(
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        { router.asPath === '/' ? (<Component {...props}/>):(
         <Layout>
      <Component {...props}/>
     </Layout>    
        )}
   
    </AppContextProvider>
   )

  
       
  }
}
