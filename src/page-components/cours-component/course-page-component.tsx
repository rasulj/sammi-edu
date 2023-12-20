
import styles from './course-page-component.module.css';
import cn from 'classnames';
import { Heading, Product,  Tag } from '../../components';
import { CoursePageComponentProps } from './course-page-component-props';

const CoursePageComponent = ({ firstCategory, page, products }: CoursePageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			{/* TITLE */}
			<div className={styles.title}>
				<Heading tag='h1'>{page.title}</Heading>
				<div>Sort...</div>
			</div>

			{/* PRODUCTS */}
	{products.length && products.map( (c,idx) => ( <Product product={c}/>)) }

			{/* VACATIONS */}
			<div className={styles.hhTitle}>
				<Heading tag='h2'>Vacations - {page.category}</Heading>
				<Tag color='red' size='m'>
					hh.uz
				</Tag>
			</div>

			{/* HHDATA */}
			<div>HHDATA</div>
		</div>
	);
};

export default CoursePageComponent;