import { CardProps } from "./card.props"
import styles from './card.module.css'
import cn from 'classnames'
const Card = ({ color="primary",children,className, ...props}:CardProps) => {
  return (
    <div className={cn(styles.card,className ,{
        [styles.primariy]: color == 'primary'
    })}> {children} </div>
  )
}

export default Card