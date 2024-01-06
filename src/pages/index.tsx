
import { GetServerSideProps } from "next"
import { withLayout } from "../layout/layout"
import { HomePageComponent } from "../page-components"
import { PageCategory } from "../interfaces/page.interface"
import axios from "axios"
import { MenuItem } from "../interfaces/menu.interface"


const index = () => {

  
  
  return <>
  <HomePageComponent/>
  </>
  
}

export default withLayout(index )

export const getServerSideProps:GetServerSideProps<HomePageProps> = async()=>{
    const firstCategory = PageCategory.Courses ;
  const {data:menu} = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,{firstCategory})
 
  return{
    props:{
    menu,
    firstCategory,
    }
  }
}
export interface HomePageProps  extends Record<string,unknown> {
  menu:MenuItem[]
  firstCategory:number
}