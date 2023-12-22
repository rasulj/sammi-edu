import { convertToUSD } from "../../helpers/helpers"
import Card from "../card/card"
import { HhDataProps } from "./hh-data-props"
import styles from './hh-data.module.css'
import RateIcon from './rate.svg'


const HHData = ({count ,juniorSalary,middleSalary,seniorSalary }: HhDataProps):JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}> All Vacation</div>
        <div className={styles.countValue}>{count}</div>
     </Card>
      <Card className={styles.salary}>
        <div >
           <div className={styles.title}>junior</div>
          <div className={styles.salaruValue}>{ convertToUSD(juniorSalary) }</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon />
            <RateIcon />
             </div>
           </div>
        <div >
          <div className={styles.title}>Middle</div>
          <div className={styles.salaruValue}>{convertToUSD(middleSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon />
          </div>

        </div>
        <div >
          <div className={styles.title}>Senior</div>
          <div className={styles.salaruValue}>{convertToUSD(seniorSalary)}</div>
          <div className={styles.rate}>
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
            <RateIcon className={styles.filled} />
          </div>

        </div>
          </Card>
      </div>

  
  )
}

export default HHData