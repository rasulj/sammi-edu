import styles from './diveder.module.css'
import { DividerProps } from './divider.props'

const Divedir = ({className , ...props}:DividerProps) => {
  return (
    <hr className={styles.divider} {...props}></hr>
  )
}

export default Divedir