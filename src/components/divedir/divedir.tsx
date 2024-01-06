import styles from './divedir.module.css'
import { DividerProps } from './dividir.props'
import cn from 'classnames'
const Dividir = ({className , ...props}:DividerProps) => {
  return (
    <hr className={ cn(styles.divider,className)} {...props}></hr>
  )
}

export default Dividir