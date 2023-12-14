import { FooterProps } from './footer.props'
import cn from 'classnames'
import styles from './footer.module.css'
import {format }from 'date-fns'
const Footer = ({ className , ...props}:FooterProps) => {
  return (
   <footer className={cn(className, styles.footer)} {...props}>
      <div >Sammi © 2022 - {format(new Date(), 'yyyy')}. All right reserver</div>
      <a href='#'>Terms of use</a>
      <a href='#'>Privacy Policy</a>
      
    </footer>
  )
}

export default Footer 