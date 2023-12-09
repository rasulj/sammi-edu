import { useState } from "react"
import { Button, Input, Tag, Text, TextArea } from "../components"
import Heading from "../components/heading/heading"


const index = () => {
  const [isClik, setIsClick]= useState<boolean>(false)
  return (
    <div>
  <Heading tag="h1"> heading</Heading>
  <Tag color="primary"> primariy</Tag>
    <Tag color="green"> green</Tag>
      <Tag color="red"> red</Tag>
      <Text size="s"> text </Text>
      <Button appearance="ghost">More Details</Button>
          <TextArea placeholder="messange"/>
        <Button appearance="primary">primary</Button>
        <Input placeholder="plesholder"/>
        <Button appearance="primary" arrow={isClik ? 'down':'right'} onClick={()=>setIsClick(prev => !prev)}>down</Button>
       
       
    </div>
  )
}

export default index