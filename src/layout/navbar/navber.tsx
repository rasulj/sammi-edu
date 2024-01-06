import styles from './navber.module.css'
import Logo from '../logo.svg'
import Link from 'next/link'
import { navlinks } from '../../helpers/constants'
import { Search } from '../../components'
import IconButton from '../../components/icon-button/icon-button'
import { motion} from 'framer-motion'
import { useState } from 'react'
const Navber = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

 const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffnes: 20,
      },
    },
    closed: {
      opacity: 0,
      x: '100%',
    },
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
       <Link href={'/'}>
        <Logo className={styles.logo} />
      </Link>
       <div className={styles.navigation}>
        { navlinks.map((nav , idx)=>(
          <Link href={nav.route} key={idx}> {nav.name}</Link>
        ))}
         <Search/>
       </div>
         <IconButton appearance='white' icon={!isOpen ? "menu": 'close'}  onClick={toggleMenu} className={styles.mobileIcon}/>
       
      </div>
       < motion.div variants={variants} initial={'closed'} animate={isOpen ? 'opened': 'closed'} className={styles.mobilMenu}>
          { navlinks.map((nav , idx)=>(
          <Link href={nav.route} key={idx}> {nav.name}</Link>
        ))}
         <Search/>
       </ motion.div>
    </div>
  )
}

export default Navber