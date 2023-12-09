import styles from './tag.module.css'
import { TagProps } from "./tag.props"
import cn from 'classnames'


const Tag = ({size,color,children, className ,...props}:TagProps):JSX.Element => {
  return (
    <div className={cn(styles.tag, className ,{
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.green]: color === 'green',
        [styles.red]: color === 'red',
        [styles.primary]: color === 'primary'
    })} {...props}>{children} </div>
  )
}

export default Tag