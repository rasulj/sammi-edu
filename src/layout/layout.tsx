import { FunctionComponent } from "react"
import Footer from "./footer/footer"
import Header from "./header/header"
import { LayoutProps } from "./layout.props"
import Sidebar from "./sidebar/sidebar"


const Layout = ({children ,className ,...props}:LayoutProps):JSX.Element => {
  
  return (
    <div {...props}>
        <Header/>
        <Sidebar/>
       {children}
     <Footer/>
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
