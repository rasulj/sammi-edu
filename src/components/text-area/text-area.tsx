import styles from './text-area.module.css'
import cn from 'classnames'
import { TextAreaProps } from './text-area.props'
const TextArea  = ({className, ...props}: TextAreaProps)=>{
    return(
  <textarea className={cn(styles.textarea, className)}  {...props}/>
    )
}
export default TextArea 

