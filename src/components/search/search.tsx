import Button from '../button/button'
import Input from '../input/input'
import styles from './search.module.css'
import { SearchProps } from './search.props'
import cn from 'classnames'
import SearchIcon from './search.svg'
import { ChangeEvent, EventHandler, useContext, useState } from 'react'
import { AppContext } from '../../context/app.context'
import { PageModel } from '../../interfaces/page.interface'
import { PageItem } from '../../interfaces/menu.interface'
import { useRouter } from 'next/router'
const Search = ({ className,...props}:SearchProps) => {


 const [search ,setSearch] = useState('')
 const [response ,setResponse] = useState<PageItem[]>([])
  const {menu} = useContext(AppContext) 

  const router = useRouter()
    const searchHandler = (id: string) => {
        router.push(`/${router.query?.type || 'courses'}/${id}`);
        setResponse([]);
        setSearch('');
    };

 const changeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
  const allPages = menu.map( c => c.pages).flat()
  const {value}= e.target
  setSearch(value)
   const response = allPages.filter(c => c.title.toLowerCase().indexOf(value.toLowerCase()) !== -1);
     setResponse(response)
     if( value.length === 0){
      setResponse([])
     }
 }


 

  return (
    <div className={cn( className ,styles.search)} {...props}>
        <Input placeholder='Search' className={styles.input} value={search} onChange={changeHandler}/>
        <Button appearance='primary' className={styles.button}> <SearchIcon/> </Button>
      
              { response.length ?(
                <div className={styles.searchResponse}>
                  { response.map(c =>(
                    <div key={c._id} onClick={()=> searchHandler(c._id)}>
                      {c.title}
                    </div>
                  ))}
                </div>
              ):null }
       
 

        </div>
  )
}

export default Search