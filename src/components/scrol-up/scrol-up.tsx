import {motion} from 'framer-motion'
import styles from './scrol-up.module.css'
import { useScrolY } from '../../hooks/useScrollY'
import IconButton from '../icon-button/icon-button'
const scrollUp = () => {
    const scrollToTop = ()=>{
        window.scrollTo({top: 0 , behavior:"smooth"})
    }
 
    const scroll = useScrolY()
  return (
    scroll > 150 &&
    <motion.button 
    animate={{y:0 ,opacity: 1 , transition:{duration:0.6}}}
    initial={{y:100 ,opacity: 0}}
      exit={{ y: 100, opacity: 0, transition: { duration: 0.6 } }}
   whileHover={{ scale: 1.2 , transition: { duration: 0.2 } }}
    className={styles.scrolUp} onClick={()=> scrollToTop()}>
       <IconButton icon='up' appearance='primary'/> 
       </motion.button>
  )
}

export default scrollUp