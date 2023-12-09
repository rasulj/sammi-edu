import { Tag, Text } from "../components"
import Heading from "../components/heading/heading"


const index = () => {
  return (
    <div>
  <Heading tag="h1"> heading</Heading>
  <Tag color="primary"> primariy</Tag>
    <Tag color="green"> green</Tag>
      <Tag color="red"> red</Tag>
      <Text size="s"> text </Text>
       <Text size="l"> text </Text>
    </div>
  )
}

export default index