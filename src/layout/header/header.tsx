import styles from './header.module.css'
import cn  from 'classnames'
import { HeaderProps } from './header.props'
import Link from 'next/link'
import LogoIcon from '../logo.svg'
import IconButton from '../../components/icon-button/icon-button'
import { motion}from 'framer-motion'
import Sidebar from '../sidebar/sidebar'
import { useState } from 'react'
const Header = ({ className , ...props}:HeaderProps) => {
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
    <div className={cn(className , styles.header)}  {...props}>
       <Link href={'/'}>
         <LogoIcon/>
       </Link>
        <IconButton icon='menu' appearance= 'primary' onClick={()=> setIsOpen(prev => !prev)}/>
       <motion.div variants={variants} initial={'closed'} animate={isOpen ? 'opened': 'closed'} className={styles.mobileMenu}>
        <Sidebar/>
        <IconButton icon='close' appearance= 'primary' className={styles.iconClose} onClick={()=> setIsOpen(prev => !prev)}/>
       </motion.div>
      </div>
  )
}

export default Header