import axios from "axios"
import { GetServerSideProps } from "next"
import { MenuItem, PageItem } from "../../interfaces/menu.interface"
import { ProductModel } from "../../interfaces/product.interface"
import { withLayout } from "../../layout/layout"
import { firstLevelMenu } from "../../helpers/constants"


const Index = ({ menu}:PageProps) => {
  return (
    <div>Index</div>
  )
}

export default withLayout(Index)

export const getServerSideProps:GetServerSideProps<PageProps> = async({query})=>{

   const {type ,slug} = query
  
  if(!type){
    return { notFound:true}
  }
  const firstCategoryItem = firstLevelMenu.find(m => m.route === type)

 
  if (!firstCategoryItem) {
    return { notFound: true }
  }

  const {data:menu} = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`,{firstCategory:firstCategoryItem.id})
const {data:page} = await axios.get(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find/${slug}`)
const {data:product} = await axios.post(`${process.env.NEXT_PUBLIC_DOMAIN}/api/product-find`,{ category:slug,})
  return{
    props:{
    firstCategory:firstCategoryItem.id,
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