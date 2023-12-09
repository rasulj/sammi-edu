import styles from './text-area.module.css'
import cn from 'classnames'
import { TextAreaProps } from './text-area.props'
const TextArea  = ({...props}: TextAreaProps)=>{
    return(
  <textarea className={cn(styles.textarea)}  {...props}/>
    )
}
export default TextArea 

