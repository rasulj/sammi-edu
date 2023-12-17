
import styles from './course-page-component.module.css';
import {  Heading, Tag, Text, } from '../../components';
import { useReducer,useEffect } from 'react';
import { CoursePageComponentProps } from './course-page-component-props';



const CoursePageComponent = ({  page, products }: CoursePageComponentProps): JSX.Element => {

 


 return (
    <div className={styles.wrapper}>
      {/* TITLE */}
      <div className={styles.title}>
        <Heading tag='h1'>{page.title}</Heading>
      </div>
      {/* PRODUCTS */}

      {/* VACATIONS */}
      <div className={styles.hhTitle}>
        <Heading tag='h2'>Vacations - {page.category}</Heading>
        <Tag color='red' size='m'>
          hh.uz
        </Tag>
      </div>

      {/* HHDATA */}
      
        {/*  ADVENTAGES */}
      
      {/*Description*/}
     
    </div>
  );
};

export default CoursePageComponent;