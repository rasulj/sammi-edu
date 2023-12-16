import { SidebarProps } from "./sidebar.props"
import cn from 'classnames'
import styles from './sidebar.module.css'
import Menu from "../menu/menu"
const Sidebar = ({ className ,...props}:SidebarProps):JSX.Element => {
  return (
    <div className={cn( className)} {...props}>
         <Menu/>
    </div>
  )
}

export default Sidebar