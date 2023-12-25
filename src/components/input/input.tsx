import styles from './input.module.css'
import cn from 'classnames'
import { InputProps } from './input.props'
import { ForwardedRef, forwardRef } from 'react'

const Input = forwardRef( ({className , error,...props}:InputProps , ref:ForwardedRef<HTMLInputElement>) => {
  return (
  <div className={styles.error}>
       <input className={cn(styles.input, className )} ref={ref} {...props}/>
       <span className={styles.errorMessage}> {error && error.message}</span>
    </div>
   
  )
} )

export default Input