import styles from './text-area.module.css'
import cn from 'classnames'
import { TextAreaProps } from './text-area.props'
import { ForwardedRef, forwardRef } from 'react'
const TextArea  = forwardRef(({className,error, ...props}: TextAreaProps , ref:ForwardedRef<HTMLTextAreaElement>)=>{
    return <div className={cn(styles.textAreaWrapper, className)} >
        <textarea className={cn(styles.textArea,{
            [styles.error]:error
        })} ref={ref} {...props} />

        {error && <span className={cn(styles.errorMessage)}> {error.message}</span>}
       </div>
}
)
export default TextArea 

