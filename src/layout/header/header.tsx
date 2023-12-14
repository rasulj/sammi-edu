import styles from './header.module.css'
import cn  from 'classnames'
import { HeaderProps } from './header.props'

const Header = ({ className , ...props}:HeaderProps) => {
  return (
    <header className={ cn( className)}  {...props}>header</header>
  )
}

export default Header