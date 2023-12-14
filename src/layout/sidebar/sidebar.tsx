import { SidebarProps } from "./sidebar.props"
import cn from 'classnames'
import styles from './sidebar.module.css'
const Sidebar = ({ className ,...props}:SidebarProps):JSX.Element => {
  return (
    <div className={cn( className)} {...props}>
         SIDEBAR
    </div>
  )
}

export default Sidebar