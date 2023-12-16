import { useState } from "react"
import { Button, Card, Input, Rating, Tag, Text, TextArea } from "../components"
import Heading from "../components/heading/heading"
import { withLayout } from "../layout/layout"
import { GetServerSideProps } from "next"
import axios from 'axios'
import { MenuItem } from "../interfaces/menu.interface"
import { PageCategory } from "../interfaces/page.interface"


const index = ({data}:HomePageProps) => {

  
  const [isClik, setIsClick]= useState<boolean>(false)
   const [rating, setRating]= useState<number>(3)
  
  return (
    <div>
  <Heading tag="h1"> heading</Heading>
  <Card color="primary"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita eveniet id quis aliquam culpa debitis officiis quasi, eos rem tenetur?</Card>
  <Tag color="primary"> primariy</Tag>
    <Tag color="green"> green</Tag>
      <Tag color="red"> red</Tag>
      <Text size="s"> text </Text>
      <Button appearance="ghost">More Details</Button>
       <Rating rating={rating} setRating={setRating} isEditabled={true}/>
          <TextArea placeholder="messange"/>
        <Button appearance="primary">primary</Button>
        <Input placeholder="plesholder"/>
        <Button appearance="primary" arrow={isClik ? 'down':'right'} onClick={()=>setIsClick(prev => !prev)}>down</Button>
       
       
    </div>
  )
}

export default withLayout(index)

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