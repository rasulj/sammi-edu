import Button from '../button/button'
import Input from '../input/input'
import styles from './search.module.css'
import { SearchProps } from './search.props'
import cn from 'classnames'
import SearchIcon from './search.svg'
const Search = ({ className,...props}:SearchProps) => {
  return (
    <div className={cn( className ,styles.search)} {...props}>
        <Input placeholder='Search' className={styles.input} />
        <Button appearance='primary' className={styles.button}> <SearchIcon/> </Button>
        </div>
  )
}

export default Search