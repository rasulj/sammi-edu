import axios from "axios"
import { GetServerSideProps } from "next"
import { MenuItem, PageItem } from "../../interfaces/menu.interface"
import { ProductModel } from "../../interfaces/product.interface"
import { PageCategory } from "../../interfaces/page.interface"
import { withLayout } from "../../layout/layout"


const Index = ({ menu}:PageProps) => {
  return (
    <div>Index</div>
  )
}

export default withLayout(Index)

export const getServerSideProps:GetServerSideProps<PageProps> = async({query})=>{
 const {slug} = query
 
 const firstCategory = PageCategory.Courses ;
  const {data:menu} = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,{firstCategory})
const {data:page} = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`)
const {data:product} = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`,{ category:slug,})
  return{
    props:{
    firstCategory,
    menu,
    product,
    page
    }
  }
}
export interface PageProps extends Record<string,unknown> {
     firstCategory: number
     menu:MenuItem[],
     product:ProductModel[]
     page:PageItem,

 
}