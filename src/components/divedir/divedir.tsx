import styles from './diveder.module.css'
import { DividerProps } from './divider.props'
import cn from 'classnames'
const Dividir = ({className , ...props}:DividerProps) => {
  return (
    <hr className={ cn(styles.divider,className)} {...props}></hr>
  )
}

export default Dividir