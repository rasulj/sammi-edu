import Image from 'next/image'
import { Button, Card, Heading, ScrolUP, Text } from '../../components'
import Navber from '../../layout/navbar/navber'
import styles from './home-page-component.module.css'
import { company, timeLineList } from '../../helpers/constants'
import { Fragment } from 'react'
import { Timeline, TimelineEvent } from 'react-event-timeline';
import Footer from '../../layout/footer/footer'

const HomePageComponent = () => {
  return (
    <div className={styles.home}>
        <Navber/>
        <div className={styles.hero}>
            <div className={styles.heroTitle}>
                <Heading tag='h1'> Lern New Skills Online With Sammi <span>Academy</span></Heading>
                <Text> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consectetur aut quis 
                    nostrum eligendi laudantium obcaecati doloremque quos amet deserunt?
                </Text>
                <Button appearance="success" arrow='right'>  Join For Free </Button>
            </div>
            <div className={styles.heroImage}>
                <Image  src={'/hero.png'} alt='heroImage' width={600} height={500}/>
            </div>
        </div>
         <div className={styles.compony}>
             <Heading tag='h3'>Trusted by the world's best</Heading>
              <div className={styles.componyIcon}>
                 { company.map((icon,idx)=>(
                    <Fragment key={idx}> {icon}</Fragment>
                ))}</div>
               
         </div>
         <div className={styles.timeline}>
            <Heading tag='h3'>What we can teach you</Heading>
            <div className={styles.timelineCard} >
                <Timeline lineColor='#ddd'>
            { timeLineList.map(({text,title,Icon},idx)=>(
                <TimelineEvent
                     key={idx}
                     title={title}
                     icon={<Icon />}
                    bubbleStyle={{ borderColor: '#140342', backgroundColor: '#fff' }}
                    contentStyle={{ border: 'none', boxShadow: 'none', backgroundColor: 'transparent' }}
                    titleStyle={{ fontSize: '20px' }}
                > <Card> <Text color='white' style={{padding:20}}> {text}</Text></Card> </TimelineEvent>
            ))}
               </Timeline>
            </div>
               

          <div className={styles.mobileTimeline}>
                    {timeLineList.map((data, idx) => (
                        <Card color='white' style={{ padding: 20 }} className={styles.card} key={idx}>
                            <Heading tag='h3'>{data.title}</Heading>
                            <Text>{data.text}</Text>
                        </Card>
                    ))}
                </div>
         </div>
       <ScrolUP/>
            <Footer />
    </div>
  )
}

export default HomePageComponent