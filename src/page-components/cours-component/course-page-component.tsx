
import styles from './course-page-component.module.css';
import cn from 'classnames';
import { Adventages, Heading,  HhData,  Product,  Sort,  Tag, Text } from '../../components';
import { CoursePageComponentProps } from './course-page-component-props';
import { useEffect, useReducer } from 'react';
import { sortReducer } from './sort.reducer';
import { SortEnum } from '../../components/sort/sort.props';
import {AnimatePresence} from 'framer-motion'

const CoursePageComponent = ({  page, products }: CoursePageComponentProps): JSX.Element => {
 
	const [ state , dispatch] = useReducer(sortReducer,{sort:SortEnum.Rating,products:products})
	const setSort = (sort:SortEnum)=>{
		dispatch({type:sort})
	}
	
	useEffect(()=>{
		dispatch({type:'reset',initialState:products})
	},[products])


	 const spring = {
    type: "spring",
    stiffness: 500,
    damping: 10
  };
  const animations = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    exit: { scale: 1 },
  };
	return (
		<div className={styles.wrapper}>
			{/* TITLE */}
			<div className={styles.title}>
				<Heading tag='h1'>{page.title}</Heading>
				 <Sort sort={state.sort} setSort={setSort} />
			</div>

			{/* PRODUCTS */}
			<AnimatePresence >
				{state.products.length && state.products.map( (c,idx) => ( <Product key={idx} product={c}  {...animations} layout transition={spring}/>)) } 
			</AnimatePresence>
   

			{/* VACATIONS */}
			<div className={styles.hhTitle}>
				<Heading tag='h2'>Vacations - {page.category}</Heading>
				<Tag color='red' size='m'>
					hh.uz
				</Tag>
			</div>

			{/* HHDATA */}
			{ page.hh && <HhData {...page.hh}/>}
			
			    {/*  ADVENTAGES */}
				{ page.advantages.length && (
					<>
					 <Heading tag='h2' > Adventages</Heading>
					<Adventages adventages={page.advantages}/>
					</>
				)}
				      {/*Description*/}
      <Text> {page.description}</Text>
      {/* SKILIS */}
      <Heading tag='h2'>Skiles</Heading>
      {page.tags.length && page.tags.map(t =>(
        <Tag color='primary' key={t}>{t}</Tag>
      ))}
		
		</div>
	);
};

export default CoursePageComponent;

