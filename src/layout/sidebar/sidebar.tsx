import { SidebarProps } from "./sidebar.props"
import cn from 'classnames'
import styles from './sidebar.module.css'
import Menu from "../menu/menu"
import Link from "next/link"
import Logo from '../logo.svg'
import Divedir from "../../components/divedir/divedir"


const Sidebar = ({ className ,...props}:SidebarProps):JSX.Element => {
  return (
    <div className={cn( className ,styles.sidebar)} {...props}>
       <Link href={'/'}>
        <Logo/>
       </Link>
       <Divedir/>
         <div> sorch....</div>
         <Menu/>
    </div>
  )
}

export default Sidebar