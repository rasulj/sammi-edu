import styles from './sort.module.css'
import cn from 'classnames'
import { SortEnum, SortProps } from './sort.props'
import SortIcon from './sort.svg'
const Sort = ({className , sort=SortEnum.Rating , ...props}:SortProps) => {
  return (
    <div className={cn( className , styles.sort)} {...props}>
        <span className={cn({ [styles.active]:sort === SortEnum.Rating})}> 
            <SortIcon  className={styles.sortIcon}/>Rating </span>
 
            <span  className={cn({
            [styles.active]:sort === SortEnum.Price
        })}>
            <SortIcon className={styles.sortIcon}/> Price</span>
               
        
    </div>
  )
}

export default Sort