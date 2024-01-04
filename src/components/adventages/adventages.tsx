import { Divider } from '..'
import styles from './adventages.module.css'
import { AdventagesProps } from './adventages.props'
import CheckIcon from './check.svg'


const Adventages = ({adventages}:AdventagesProps):JSX.Element => {
 
  return (
    <div >
        {adventages.map(c =>(
            <div key={c.id} className={styles.advantages}>
                <CheckIcon/>
                <div className={styles.title}>{c.title}</div>
               <Divider className={styles.vline}/>
                <div className={styles.decription}>{c.description}</div>
            </div>
        ))}
    </div>
  )
}

export default Adventages