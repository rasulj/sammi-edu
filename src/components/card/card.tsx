import { CardProps } from "./card.props"
import styles from './card.module.css'
import cn from 'classnames'
import { ForwardedRef, forwardRef } from "react"
const Card = forwardRef(({ color="primary",children,className, ...props}:CardProps, ref:ForwardedRef<HTMLDivElement>) => {
  return (
    <div className={cn(styles.card,className ,{
        [styles.primariy]: color == 'primary'
    })} ref={ref}> {children} </div>
  )
}
)

export default Card