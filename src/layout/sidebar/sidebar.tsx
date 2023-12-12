import { SidebarProps } from "./sidebar.props"

const Sidebar = ({ className ,...props}:SidebarProps):JSX.Element => {
  return (
    <div {...props}>
         SIDEBAR
    </div>
  )
}

export default Sidebar